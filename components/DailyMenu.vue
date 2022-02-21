<template>
  <div class="content_wrapper">
    <div class="content_header">
      <div class="day">
        {{ (new Date(dailyMenus.date)).getDate() }}日 ({{ getWeek(new Date(dailyMenus.date)) }})
      </div>
    </div>
    <div class="content_main">
      <menu-card
        v-for="(categoryMenus, index) in dailyMenus.data"
        :key="index"
        :category-menus="categoryMenus"
        class="menu_card"
        @modal-child-click="click($event, index)"
      />
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
    dailyMenus: {
      type: Object,
      default () {
        return {}
      }
    },
    recipes: {
      type: Object,
      default () {
        return {}
      }
    },
    selectRecipeId: {
      type: Number,
      default: 0
    },
    selectPhoto: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    click (eventArgs, category) {
      this.$emit('modal-child-click', { showModalFlg: eventArgs.showModalFlg, location: eventArgs.location, category })
    },
    getWeek (date) {
      const dayName = ['日', '月', '火', '水', '木', '金', '土']
      const week = date.getDay()
      return dayName[week]
    }
  }
}
</script>

<style scoped>
.content_wrapper {
  display: flex;
  flex-flow: column;
  width: 100%;
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

.content_main {
  display: flex;
  flex-flow: column;
}

.menu_card {
  flex: 0 1 32.5%;
  margin: 0 0 5px 0;
}

@media only screen and (min-width: 768px) {
  .content_main {
    flex-flow: row;
    justify-content: space-between;
  }
}
</style>
}
