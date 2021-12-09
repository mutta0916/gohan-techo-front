<template>
  <NuxtLink to="/createRecipeApp" class="item">
    <figure class="img_wrapper">
      <img :src="photo" alt="料理画像">
    </figure>
    <div class="main">
      <h3>{{ recipe.name }}</h3>
      <p class="memo">
        {{ recipe.memo }}
      </p>
      <span class="genre_label">{{ recipe.genre }}</span>
      <span v-for="(type, index) in recipe.type" :key="index" class="type_label">{{ type }}</span>
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
  },
  data () {
    return {
      photo: require('../assets/upload.svg')
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 17px;
  margin: 0;
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

  h3 {
    font-size: 19px;
  }
}
</style>
}
