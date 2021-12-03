<template>
  <div id="app">
    <div class="create_recipe_wrapper">
      <input v-model="name" type="text" name="name" placeholder="料理名を入力してください。" class="recipe_name">
      <div class="recipe_row_wrapper">
        <div class="recipe_photo_wrapper">
          <label>
            <img :src="photo" alt="クリックして画像を選択" class="recipe_photo">
            <input class="recipe_upload" type="file" accept="image/jpeg, image/png" @change="onImageChange">
            クリックしてアップロード
          </label>
        </div>
        <div class="recipe_material_wrapper">
          <div class="recipe_material_label_wrapper">
            <label>材料：</label>
            <input type="number" placeholder="２" min="1" class="recipe_servings">
            <label>人前</label>
          </div>
          <recipe-material />
        </div>
      </div>
      <recipe-howto />
      <input v-model="memo" type="text" placeholder="ちょっとしたメモを残せます。次改善したい点などを書き残せます。例）次は辛さをもっと辛くしたい。" class="recipe_memo">
      <b-button variant="primary" class="recipe_input" @click="insert">
        登録
      </b-button>
    </div>
  </div>
</template>

<script>
import recipeMaterial from '../components/RecipeMaterialList'
import recipeHowtoGrp from '../components/RecipeHowtoGrp'

export default {
  components: {
    'recipe-material': recipeMaterial,
    'recipe-howto': recipeHowtoGrp
  },
  data () {
    return {
      photo: require('../assets/upload.svg'),
      error: ''
    }
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    onImageChange (e) {
      const images = e.target.files || e.dataTransfer.files
      this.getBase64(images[0])
        .then((image) => { this.photo = image })
        .catch((error) => { this.setError(error, '画像のアップロードに失敗しました。') })
    },
    upload () {
      if (this.photo) {
        /* postで画像を送る処理をここに書く */
        this.message = 'アップロードしました'
        this.error = ''
      } else {
        this.error = '画像がありません'
      }
    },
    insert () {
      this.$store.commit('insert', { name: this.name })
    }
  }
}
</script>

<style scoped>
.create_recipe_wrapper {
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fef6e4;
}

input {
  box-sizing: border-box;
  border-bottom: 1px dotted;
  border-right:none;
  border-left:none;
  border-top:none;
  background-color: transparent;
  width: 100%;
}

input:focus {
    outline: none;
}

.recipe_name {
  width: 600px;
  height: 50px;
  margin: 10px;
}

.recipe_row_wrapper {
  display: flex;
}

.recipe_photo_wrapper {
  width: 250px;
}

.recipe_photo {
  display: block;
  max-width: 100%;
  height: auto;
}

.recipe_upload {
  display: none;
}

img:hover {
  opacity: 0.7;
}

.recipe_material_wrapper {
  width: 545px;
  margin: 10px;
}

.recipe_material_label_wrapper {
  display: flex;
}

.recipe_material_label_wrapper label {
  font-size: 23px;
}

.recipe_servings {
  width: 50px;
}

/* .recipe_memo {
  height: 150px;
  margin: 10px;
  background-color: white;
} */

.recipe_input {
  margin: 10px;
}

</style>
