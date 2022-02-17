<template>
  <div class="content_wrapper">
    <div class="content_header">
      <div class="day">
        {{ dayInfo.day }}日 ({{ dayInfo.week }})
      </div>
    </div>
    <div class="content_main">
      <menu-card v-for="index in 3" :key="index" class="menu_card" @modal-child-click="click" />
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
    dayInfo: {
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
      week: (new Date(this.year, this.month, 0)).getDay(),
      showModal: false
    }
  },
  methods: {
    click (showModalFlg) {
      this.$emit('modal-child-click', showModalFlg)
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
