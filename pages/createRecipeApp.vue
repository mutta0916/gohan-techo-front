<template>
  <div id="app">
    <div class="create_recipe-wrapper">
      <input type="text" name="name" v-model="name" placeholder="料理名" class="recipe_name">
      <div class="recipe_row-wrapper">
        <recipe-photo class="recipe_photo"/>
        <div class="recipe_material-wrapper">
          <div class="recipe_material_label-wrapper">
            <label>材料：</label>
            <input type="number" placeholder="２" min="1" class="recipe_servings">
            <label>人前</label>
          </div>
          <recipe-material />
        </div>
      </div>
      <recipe-howto />
      <input type="text" v-model="memo" placeholder="ちょっとしたメモを残せます。次改善したい点などを書き残せます。例）次は辛さをもっと辛くしたい。" class="recipe_memo">
      <b-button variant="primary" class="recipe_input" @click="insert">登録</b-button>
    </div>
  </div>
</template>

<script>
import recipeMaterial from '../components/RecipeMaterialList'
import recipeHowtoGrp from '../components/RecipeHowtoGrp'
import recipePhoto from '../components/RecipePhoto'

export default {
  components: {
    'recipe-material': recipeMaterial,
    'recipe-howto': recipeHowtoGrp,
    'recipe-photo': recipePhoto
  },
  methods: {
    insert: function() {
      this.$store.commit('insert', {name: this.name});
    }
  }
}
</script>

<style>
.create_recipe-wrapper {
  width: 1215px;
  margin: 30px auto;
  padding: 10px;
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

.recipe_row-wrapper {
  display: flex;
}

.recipe_photo {
  width: 600px;
  height: 500px;
  margin: 10px;
}

.recipe_material-wrapper {
  width: 545px;
  margin: 10px;
}

.recipe_material_label-wrapper {
  display: flex;
}

.recipe_material_label-wrapper label {
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
