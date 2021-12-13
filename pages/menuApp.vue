<template>
  <div id="app">
    <div class="content_wrapper">
      <div class="content_header">
        <input type="submit" value="" class="previous_month" @click="back">
        <h1>{{ year }}年{{ month }}月</h1>
        <input type="submit" value="" class="next_month" @click="forward">
      </div>
      <div class="list">
        <daily-Menu v-for="day in days" :key="day" :day="day" class="each_recipe" />
      </div>
    </div>
  </div>
</template>

<script scoped>
import dailyMenu from '../components/DailyMenu'

export default {
  components: {
    'daily-Menu': dailyMenu
  },
  data () {
    return {
      keyword: '',
      year: (new Date()).getFullYear(),
      month: (new Date()).getMonth() + 1
    }
  },
  computed: {
    days () {
      return (new Date(this.year, this.month, 0)).getDate()
    },
    filteredRecipes () {
      const searchRecipes = []
      for (const i in this.recipes) {
        const recipe = this.recipes[i]
        if (recipe.name.includes(this.keyword) ||
              recipe.genre.includes(this.keyword) ||
                recipe.type.includes(this.keyword)) {
          searchRecipes.push(recipe)
        }
      }
      return searchRecipes
    }
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
    }
  }
}
</script>

<style scoped>
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

.content_wrapper {
  max-width: 1200px;
  margin: 15px auto;
  padding: 0 30 0 30px;
}

/* .list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */

.each_recipe {
  flex: 0 1 40%;
  margin: 20px;
}
</style>
