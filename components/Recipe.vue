<template>
  <NuxtLink to="/createRecipeApp" class="item">
    <figure class="img_wrapper">
      <img :src="photo" alt="料理画像">
    </figure>
    <div class="main">
      <div class="title-wrapper">
        <h3>{{ recipe.name }}</h3>
        <input type="submit" value="×" class="button_delete" @click="remove(recipe)">
      </div>
      <p class="memo">
        {{ recipe.memo }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
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
  },
  methods: {
    remove (recipe) {
      this.$store.commit('remove', recipe)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 0;
}

.item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.img_wrapper {
  flex: 0 1 47%;
  margin: 0;
  margin-right: 3%;
}

img {
  width: 100%;
}

.main {
  flex: 1;
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
}

.button_delete {
  font-size: 10px;
  width: 16%;
  background-color: rgb(255, 155, 155);
  border:solid 1px #fff;
  border-radius: 50%;
}
</style>
}
