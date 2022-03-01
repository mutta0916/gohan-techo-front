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
          @change-title="changeTitle($event, dailyMenus.date)"
          @modal-child-click="click($event, dailyMenus.date)"
          @clear="clear($event, dailyMenus.date)"
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

const title = 0
const menu = 1

export default {
  components: {
    'daily-menu': dailyMenu,
    'recipe-select': recipeSelect
  },
  data () {
    return {
      recipes: [],
      year: (new Date()).getFullYear(),
      month: (new Date()).getMonth() + 1,
      showModal: false,
      selectedDate: '',
      selectedCategory: '',
      selectedLocation: '',
      allMenus: []
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
    await this.$axios.$get(`${this.$axios.defaults.baseURL}menu`, { params: { user_id: 1, year: this.year, month: this.month } })
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
      this.$axios.$get(`${this.$axios.defaults.baseURL}menu`, { params: { user_id: 1, year: this.year, month: this.month } })
        .then((response) => {
          this.allMenus = response.menus
        })
        .catch((error) => {
          console.log(error)
        })
    },
    forward () {
      const date = new Date(this.year, this.month - 1)
      date.setMonth(date.getMonth() + 1)
      this.year = date.getFullYear()
      this.month = date.getMonth() + 1
      this.$axios.$get(`${this.$axios.defaults.baseURL}menu`, { params: { user_id: 1, year: this.year, month: this.month } })
        .then((response) => {
          this.allMenus = response.menus
        })
        .catch((error) => {
          console.log(error)
        })
    },
    changeTitle (eventArgs, selectedDate) {
      // 日付のインデックスを取得
      const filterDateIndex = this.allMenus.findIndex(({ date }) => date === selectedDate)
      // 献立情報更新
      this.allMenus[filterDateIndex].data[eventArgs.category].title = eventArgs.title
      this.$axios
        .$post(`${this.$axios.defaults.baseURL}menu`,
          {
            user_id: 1,
            menu_id: this.allMenus[filterDateIndex].data[eventArgs.category].id,
            date: this.allMenus[filterDateIndex].date,
            category: eventArgs.category,
            title: eventArgs.title,
            location: 0,
            menu_recipes_id: 0,
            recipe_id: 0,
            update_target: title
          })
        .catch((error) => {
          console.log(error)
        })
    },
    selectDish (id, name, photo) {
      this.showModal = false
      // クリックした項目に値を反映
      // 日付のインデックスを取得
      const filterDate = this.allMenus.filter(elem => elem.date === this.selectedDate)
      const filterDateIndex = this.allMenus.findIndex(({ date }) => date === this.selectedDate)
      // 区分のインデックスを取得
      const filterCategory = filterDate[0].data.filter(elem => elem.category === this.selectedCategory)
      const filterCategoryIndex = filterDate[0].data.findIndex(({ category }) => category === this.selectedCategory)
      // 位置のインデックスを取得
      const filterLocationIndex = filterCategory[0].data.findIndex(({ location }) => location === this.selectedLocation)
      this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].recipe_id = id
      this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].recipe_name = name
      this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].recipe_photo = photo

      // 献立情報更新
      this.$axios
        .$post(`${this.$axios.defaults.baseURL}menu`,
          {
            user_id: 1,
            menu_id: this.allMenus[filterDateIndex].data[filterCategoryIndex].id,
            date: this.allMenus[filterDateIndex].date,
            category: this.selectedCategory,
            title: this.allMenus[filterDateIndex].data[filterCategoryIndex].title,
            location: this.selectedLocation,
            menu_recipes_id: this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].menu_recipes_id,
            recipe_id: id,
            update_target: menu
          })
        .catch((error) => {
          console.log(error)
        })
    },
    click (eventArgs, date) {
      this.showModal = eventArgs.showModalFlg
      this.selectedDate = date
      this.selectedCategory = eventArgs.category
      this.selectedLocation = eventArgs.location
    },
    clear (eventArgs, selectedDate) {
      // 日付のインデックスを取得
      const filterDate = this.allMenus.filter(elem => elem.date === selectedDate)
      const filterDateIndex = this.allMenus.findIndex(({ date }) => date === selectedDate)
      // 区分のインデックスを取得
      const filterCategory = filterDate[0].data.filter(elem => elem.category === eventArgs.category)
      const filterCategoryIndex = filterDate[0].data.findIndex(({ category }) => category === eventArgs.category)
      // 位置のインデックスを取得
      const filterLocationIndex = filterCategory[0].data.findIndex(({ location }) => location === eventArgs.location)
      this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].menu_recipes_id = 0
      this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].location = 0
      this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].recipe_id = 0
      this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].recipe_name = ''
      this.allMenus[filterDateIndex].data[filterCategoryIndex].data[filterLocationIndex].recipe_photo = ''
      this.$axios
        .$delete(`${this.$axios.defaults.baseURL}menu/${eventArgs.menuRecipesId}`)
        .then(() => {
          // 処理なし
          console.log(this.allMenus)
        })
        .catch((error) => {
          console.log(error)
        })
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
