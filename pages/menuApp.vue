<template>
  <div id="app">
    <div class="content_wrapper">
      <div class="content_header">
        <input type="submit" value="" class="previous_month" @click="back">
        <h1>{{ year }}年{{ month }}月</h1>
        <input type="submit" value="" class="next_month" @click="forward">
      </div>
      <div class="list">
        <daily-menu v-for="(day, index) in days" :key="index" :obj-day="day" class="each_menu" @modal-child-click="click" />
      </div>
    </div>
    <recipe-select v-if="showModal" @close="close" @selectDish="selectDish" />
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
      keyword: '',
      year: (new Date()).getFullYear(),
      month: (new Date()).getMonth() + 1,
      showModal: false
    }
  },
  computed: {
    days () {
      const days = (new Date(this.year, this.month, 0)).getDate()
      const array = []
      const dayName = ['日', '月', '火', '水', '木', '金', '土']
      for (let i = 0; i < days; i++) {
        const week = (new Date(this.year, this.month, i + 1)).getDay()
        array.push({
          year: this.year,
          month: this.month,
          day: i + 1,
          week: dayName[week]
        })
      }
      return array
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
    },
    selectDish (id) {
      this.showModal = false
      // idから写真を取得し、メイン画面に反映させる
      alert(id)
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
