<template>
  <div id="app">
    <div class="content_wrapper">
      <input v-model="keyword" type="text" placeholder="ここで検索ができます。" class="search">
      <h1>Menu</h1>
      <div class="list">
        <recipe v-for="(recipe, index) in filteredRecipes" :key="index" :recipe="recipe" class="each_recipe" />
      </div>
    </div>
    <a href="#" class="page_top">トップへ</a>
  </div>
</template>

<script>
import recipe from '../components/Recipe'

export default {
  components: {
    recipe
  },
  data () {
    return {
      recipes: [],
      keyword: ''
    }
  },
  async fetch () {
    await this.$axios
      .$get(`${this.$axios.defaults.baseURL}recipe`, { params: { user_id: 1 } })
      .then((response) => {
        this.recipes = response.recipes
      })
      .catch((error) => {
        console.log(error)
      })
  },
  computed: {
    filteredRecipes () {
      return this.recipes.filter(elem => elem.name.includes(this.keyword) || elem.genre_name.includes(this.keyword) || elem.type_name.includes(this.keyword))
    }
  }
}
</script>

<style scoped>
.search {
  margin: 5px;
}

h1 {
  text-align: center;
  margin: 0 0 30px 0;
  letter-spacing: 10px;
}

.content_wrapper {
  max-width: 1200px;
  margin: 15px auto;
  padding: 0 30 0 30px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.each_recipe {
  flex: 0 1 40%;
  margin: 20px;
}

.page_top {
  text-decoration: none;
  position: fixed;
  right: 10px;
  bottom: 10px;
  background: #8bd3dd;
  color: white;
  padding: 10px;
  border: solid 1px;
}
</style>
