<template>
  <div id="app">
    <div class="content_wrapper">
      <div class="content_header">
        <input type="submit" value="" class="previous_month" @click="back">
        <h1>{{ year }}年{{ month }}月</h1>
        <input type="submit" value="" class="next_month" @click="forward">
      </div>
      <div class="list">
        <daily-menu
          v-for="(dailyMenus, index) in allMenus"
          :key="index"
          :daily-menus="dailyMenus"
          class="each_menu"
          @modal-child-click="click"
        />
      </div>
    </div>
    <recipe-select v-if="showModal" :recipes="recipes" @close="close" @selectDish="selectDish" />
    <a href="#" class="page_top">トップへ</a>
  </div>
</template>

<script scoped>
import dailyMenu from '../components/DailyMenu'
import recipeSelect from '../components/RecipeSelect'

export default {
  components: {
    'daily-menu': dailyMenu,
    'recipe-select': recipeSelect
  },
  data () {
    return {
      recipes: [],
      keyword: '',
      year: (new Date()).getFullYear(),
      month: (new Date()).getMonth() + 1,
      showModal: false,
      selectRecipeId: 0,
      selectPhoto: '',
      selectedCategory: '',
      selectedLocation: '',
      allMenus: []
    }
  },
  async fetch () {
    await this.$axios
      .$get('http://127.0.0.1:8000/api/recipe', { params: { user_id: 1 } })
      .then((response) => {
        this.recipes = response.recipes
      })
      .catch((error) => {
        console.log(error)
      })
    await this.$axios.$get('http://127.0.0.1:8000/api/menu')
      .then((response) => {
        this.allMenus = response.menus
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    back () {
      const date = new Date(this.year, this.month - 1)
      date.setMonth(date.getMonth() - 1)
      this.year = date.getFullYear()
      this.month = date.getMonth() + 1
    },
    forward () {
      const date = new Date(this.year, this.month - 1)
      date.setMonth(date.getMonth() + 1)
      this.year = date.getFullYear()
      this.month = date.getMonth() + 1
    },
    selectDish (id, photo) {
      this.showModal = false
      this.selectRecipeId = id
      this.selectPhoto = photo
    },
    click (showModalFlg) {
      this.showModal = showModalFlg
    },
    close () {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.content_wrapper {
  max-width: 1000px;
  margin: 15px auto;
  padding: 0 30 0 30px;
}

.content_header {
  display: flex;
  justify-content: space-between;
}

.previous_month {
  background-color: #8bd3dd;
  width: 40px;
  height: 40px;
  clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
}

.next_month {
  background-color: #8bd3dd;
  width: 40px;
  height: 40px;
  clip-path: polygon(0 0, 0% 100%, 100% 50%);
}

h1 {
  text-align: center;
  margin: 0 0 30px 0;
  letter-spacing: 10px;
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
