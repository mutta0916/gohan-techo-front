<template>
  <div id="app">
    <div class="create_recipe_wrapper">
      <div class="recipe_name_row_wrapper">
        <input v-model="name" type="text" name="name" placeholder="料理名を入力してください。" class="recipe_name">
        <select v-model="selectGenre" name="genre" class="select">
          <option v-for="(row, index) in genres" :key="index" :value="row.id">
            {{ row.genre }}
          </option>
        </select>
        <select v-model="selectType" name="type" class="select">
          <option v-for="(row, index) in types" :key="index" :value="row.id">
            {{ row.type }}
          </option>
        </select>
        <input type="submit" value="登録" class="button_insert" @click="register">
        <input type="submit" value="削除" class="button_delete" @click="destroy">
      </div>
      <div class="content_wrapper">
        <div class="left_content_wrapper">
          <div class="recipe_photo_wrapper">
            <label>
              <img :src="photo" alt="クリックして画像を選択" class="recipe_photo">
              <input class="recipe_upload" type="file" accept="image/jpeg" @change="onImageChange">
              クリックしてアップロード
            </label>
          </div>
          <div class="recipe_material_wrapper">
            <div class="recipe_servings_wrapper">
              <label class="recipe_servings_label">材料：</label>
              <input v-model="servings" type="number" placeholder="2" min="1" class="recipe_servings">
              <label class="recipe_servings_label">人前</label>
            </div>
            <recipe-material :ingredients="ingredientData" @change-ingredients="changeIngredients" />
          </div>
          <textarea v-model="memo" placeholder="ちょっとしたメモを残せます。次改善したい点などを書き残せます。例）次は辛さをもっと辛くしたい。" class="recipe_memo" />
        </div>
        <div class="right_content_wrapper">
          <h2>作り方</h2>
          <recipe-howto :howtos="howtoData" @change-howto="changeHowto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recipeMaterial from '../components/RecipeMaterialList'
import recipeHowtoGrp from '../components/RecipeHowtoGrp'

const store = 0
const update = 1

export default {
  components: {
    'recipe-material': recipeMaterial,
    'recipe-howto': recipeHowtoGrp
  },
  data () {
    return {
      mode: store,
      recipeId: '',
      genres: [],
      selectGenre: '1',
      types: [],
      selectType: '1',
      howtoData: [
        { id: '0', howto: '' },
        { id: '0', howto: '' },
        { id: '0', howto: '' },
        { id: '0', howto: '' },
        { id: '0', howto: '' }
      ],
      ingredientData: [
        { id: '0', name: '', amount: '' },
        { id: '0', name: '', amount: '' },
        { id: '0', name: '', amount: '' },
        { id: '0', name: '', amount: '' },
        { id: '0', name: '', amount: '' }
      ],
      photo: require('../assets/upload.svg'),
      photoData: '',
      name: '',
      servings: 2,
      memo: '',
      error: ''
    }
  },
  async fetch () {
    this.recipeId = this.$route.query.recipeId
    this.mode = this.recipeId ? update : store
    await this.$axios.$get(`${this.$axios.defaults.baseURL}genre`)
      .then((response) => {
        this.genres = response.genres
      })
      .catch((error) => {
        console.log(error)
      })
    await this.$axios.$get(`${this.$axios.defaults.baseURL}type`)
      .then((response) => {
        this.types = response.types
      })
      .catch((error) => {
        console.log(error)
      })
    if (this.mode === update) {
      await this.$axios.$get(`${this.$axios.defaults.baseURL}recipe/${this.recipeId}`)
        .then((response) => {
          this.name = response.recipes[0].name
          this.photo = response.recipes[0].photo ? response.recipes[0].photo : require('../assets/upload.svg')
          this.servings = response.recipes[0].servings ? response.recipes[0].servings : '2'
          this.memo = response.recipes[0].memo ? response.recipes[0].memo : ''
          this.howtoData.splice(0, this.howtoData.length)
          this.howtoData.push(...response.howtos)
          this.ingredientData.splice(0, this.ingredientData.length)
          this.ingredientData.push(...response.ingredients)
          this.selectGenre = response.recipes[0].genre
          this.selectType = response.recipes[0].type
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  methods: {
    createImage (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    onImageChange (event) {
      const images = event.target.files
      this.photoData = images[0]
      this.createImage(this.photoData)
        .then((image) => { this.photo = image })
        .catch(() => { this.error = '画像のアップロードに失敗しました。' })
    },
    register () {
      const formData = new FormData()
      const arrHowto = this.howtoData.filter(elem => elem.howto.trim())
      const arrIngredient = this.ingredientData.filter(elem => elem.name.trim() && elem.amount.trim())
      formData.append('user_id', 1)
      formData.append('name', this.name)
      formData.append('genre_id', this.selectGenre)
      formData.append('type_id', this.selectType)
      formData.append('servings', this.servings)
      formData.append('howto', JSON.stringify(arrHowto))
      formData.append('ingredient', JSON.stringify(arrIngredient))
      formData.append('photo', this.photoData)
      formData.append('memo', this.memo)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      if (this.mode === update) {
        formData.append('_method', 'PUT')
        this.$axios
          .$post(`${this.$axios.defaults.baseURL}recipe/${this.recipeId}`, formData, config)
          .then(() => {
            this.$route.push({ path: '/recipeListApp' })
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.$axios
          .$post(`${this.$axios.defaults.baseURL}recipe`, formData, config)
          .then(() => {
            this.$route.push({ path: '/recipeListApp' })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    destroy () {
      this.$axios
        .$delete(`${this.$axios.defaults.baseURL}recipe/${this.recipeId}`)
        .then(() => {
          window.location.href = '/recipeListApp'
        })
        .catch((error) => {
          console.log(error)
        })
    },
    changeHowto (changeHowtos) {
      this.howtoData = changeHowtos
    },
    changeIngredients (changeIngredients) {
      this.ingredientData = changeIngredients
    }
  }
}
</script>

<style scoped>
.create_recipe_wrapper {
  max-width: 1200px;
  margin: 15px auto;
  padding: 50px;
  background-color: #fef6e4;
}

.recipe_name_row_wrapper {
  display: flex;
  flex-flow: row;
  margin-bottom: 25px;
}

.recipe_name {
  font-size: 23px;
  width: 50%;
  margin-right: auto;
}

.content_wrapper {
  display: flex;
  flex-flow: column;
}

.left_content_wrapper {
  flex: 0 0 350px;
  margin-right: 20px;
}

.right_content_wrapper {
  flex: 1 1 auto;
}

.recipe_photo_wrapper {
  margin-bottom: 20px;
}

.recipe_photo {
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 5px;
}

.recipe_upload {
  display: none;
}

img:hover {
  opacity: 0.7;
}

.recipe_material_wrapper {
  margin-bottom: 20px;
}

.recipe_memo {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background-color: white;
}

.recipe_servings_label {
  font-size: 23px;
}

.recipe_servings_wrapper {
  margin-bottom: 13px;
}

.recipe_servings {
  text-align: center;
  font-size: 23px;
  width: 50px;
}

h2 {
  margin: 0;
}

.button_insert {
  margin: 5px;
  background-color: #8bd4ddd3;
}

.button_delete {
  margin: 5px;
  background-color: #ff80b0;
}

.select {
  border: none;
  margin: 10px;
  background-color: transparent;
}

@media only screen and (min-width: 768px) {
  .content_wrapper {
    display: flex;
    flex-flow: row;
  }

  .recipe_memo {
    margin-bottom: 0;
  }
}

</style>
