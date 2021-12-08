<template>
  <div id="app">
    <div class="content_wrapper">
      <div class="list">
        <recipe v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" class="each_recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import recipe from '../components/Recipe'

export default {
  components: {
    recipe
  },
  computed: {
    recipes () {
      return this.$store.state.recipes
    }
  }
}
</script>

<style>
.content_wrapper {
  max-width: 1200px;
  margin: 15px auto;
  padding: 50px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.each_recipe {
  flex: 0 1 30%;
  margin-bottom: 20px;
}
</style>
