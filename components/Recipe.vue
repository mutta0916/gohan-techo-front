<template>
  <NuxtLink :to="{ path: 'createRecipeApp', query: { userId: recipe.user_id, recipeId: recipe.id } }" class="item">
    <figure class="img_wrapper">
      <img v-if="recipe.photo===null" :src="require('../assets/upload.svg')" alt="料理画像">
      <img v-else :src="recipe.photo" alt="料理画像">
    </figure>
    <div class="main">
      <p class="recipe_name">
        {{ recipe.name }}
      </p>
      <p class="memo">
        {{ recipe.memo }}
      </p>
      <span class="genre_label">{{ recipe.genre_name }}</span>
      <span class="type_label">{{ recipe.type_name }}</span>
    </div>
  </NuxtLink>
</template>

<script scoped>
export default {
  props: {
    recipe: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.recipe_name {
  font-size: 17px;
  margin: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-decoration: none;
  color: currentColor;
}

.item:hover {
  opacity: 0.7;
}

.img_wrapper {
  flex: 0 1 47%;
  margin: 0;
  margin-right: 10px;
}

img {
  width: 100%;
}

.main {
  flex:0 1 50%;
  max-width: 50%;
}

span {
  font-size: 14px;
  margin-right: 5px;
  text-align: center;
  border-radius: 20%;
  padding: 5px;
  color: #fff;
}
.genre_label {
  background-color: #fc90b9;
}

.type_label {
  background-color: #8bd3dd;
}

@media only screen and (min-width: 768px) {
  .item {
    flex-flow: row;
    align-items: flex-start;
  }

  .recipe_name {
    font-size: 19px;
  }
}
</style>
}
