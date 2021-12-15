<template>
  <div id="app">
    <div class="content_wrapper">
      <div class="content_header">
        <input type="submit" value="" class="previous_month" @click="back">
        <h1>{{ year }}年{{ month }}月</h1>
        <input type="submit" value="" class="next_month" @click="forward">
      </div>
      <div class="list">
        <daily-menu v-for="(day, index) in days" :key="index" :obj-day="day" class="each_menu" />
      </div>
    </div>
  </div>
</template>

<script scoped>
import dailyMenu from '../components/DailyMenu'

export default {
  components: {
    'daily-menu': dailyMenu
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
</style>
