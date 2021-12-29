<template>
  <div class="content_wrapper">
    <input type="text" placeholder="献立名称 例)朝ごはん" class="name">
    <div class="img_wrapper_line">
      <img
        v-for="index in 2"
        :key="index"
        :src="photo"
        alt="献立画像"
        class="photo"
        @click="click">
    </div>
    <div class="img_wrapper_line">
      <img
        v-for="index in 2"
        :key="index"
        :src="photo"
        alt="献立画像"
        class="photo"
        @click="click">
    </div>
    <div class="img_wrapper_line">
      <img
        v-for="index in 2"
        :key="index"
        :src="photo"
        alt="献立画像"
        class="photo"
        @click="click">
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    recipe: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      photo: require('../assets/upload.svg')
    }
  },
  methods: {
    click () {
      this.$emit('modal-child-click', true)
    }
  }
}
</script>

<style scoped>
.name {
  margin-bottom: 5px;
}

.content_wrapper {
  display: flex;
  flex-flow: column;
  width: 100%;
}

.img_wrapper_line {
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.photo {
  margin: 5px;
  margin-left: 0px;
  max-width: 49%;
  box-sizing: border-box;
  height: auto;
}

.select_recipe {
  text-align: left;
  box-sizing: border-box;
  border-bottom: 1px dotted;
  border-right:none;
  border-left:none;
  border-top:none;
  background-color: transparent;
  margin-bottom: 10px;
}
</style>
}
