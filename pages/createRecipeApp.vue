<template>
  <div id="app">
    <div class="create_recipe_wrapper">
      <div class="recipe_name_row_wrapper">
        <input v-model="name" type="text" name="name" placeholder="料理名を入力してください。" class="recipe_name">
        <input type="submit" value="登録" class="button_insert" @click="insert">
      </div>
      <div class="content_wrapper">
        <div class="left_content_wrapper">
          <div class="recipe_photo_wrapper">
            <label>
              <img :src="photo" alt="クリックして画像を選択" class="recipe_photo">
              <input class="recipe_upload" type="file" accept="image/jpeg, image/png" @change="onImageChange">
              クリックしてアップロード
            </label>
          </div>
          <div class="recipe_material_wrapper">
            <div class="recipe_servings_wrapper">
              <label class="recipe_servings_label">材料：</label>
              <input type="number" placeholder="２" min="1" class="recipe_servings">
              <label class="recipe_servings_label">人前</label>
            </div>
            <recipe-material />
          </div>
          <textarea v-model="memo" placeholder="ちょっとしたメモを残せます。次改善したい点などを書き残せます。例）次は辛さをもっと辛くしたい。" class="recipe_memo" />
        </div>
        <div class="right_content_wrapper">
          <h2>作り方</h2>
          <recipe-howto />
        </div>
      </div>
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
  background-color: #8bd4ddd3;
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
