<template>
  <div class="content_wrapper">
    <div class="content_header">
      <div class="day">
        {{ objDay.day }}日 ({{ objDay.week }})
      </div>
      <input type="text" name="name" placeholder="メモを入力できます。" class="memo">
    </div>
    <div class="content_main">
      <menu-card class="menu_card"/>
      <menu-card class="menu_card" />
      <menu-card class="menu_card" />
    </div>
  </div>
</template>

<script scoped>
import menuCard from './MenuCard'

export default {
  components: {
    'menu-card': menuCard
  },
  props: {
    objDay: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      week: (new Date(this.year, this.month, 0)).getDay()
    }
  }
}
</script>

<style scoped>
.content_wrapper {
  display: flex;
  flex-flow: column;
  /* justify-content: space-between; */
  color: currentColor;
}

.content_header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
}

.day {
  background-color: #fc90b9;
  color: white;
  padding: 5px;
}

.memo {
  flex: 0 1 30%;
}

.content_main {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.menu_card {
  flex: 0 1 30%;
  margin: 0;
  margin-right: 10px;
}

@media only screen and (min-width: 768px) {
  /* .content_wrapper {
    flex-flow: row;
    align-items: flex-start;
  } */

  h3 {
    font-size: 19px;
  }
}
</style>
}
