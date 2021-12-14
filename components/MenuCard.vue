<template>
  <div class="content_wrapper">
    <input type="text" placeholder="献立名称 例)朝ごはん" class="name">
    <div class="img_wrapper_first_line">
      <img v-for="index in 3" :key="index" :src="photo" alt="献立画像" class="photo">
    </div>
    <div class="img_wrapper_second_line">
      <img v-for="index in 3" :key="index" :src="photo" alt="献立画像" class="photo">
    </div>
    <input
      v-for="index in 5"
      :key="index"
      type="button"
      value="献立を選択"
      class="select_recipe"
      @click="launchModal"
    >
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
      photo: require('../assets/sample.jpg')
    }
  },
  methods: {
    launchModal () {
      alert('料理を選ぶ画面が表示されるよ！')
    }
  }
}
</script>

<style scoped>
.content_wrapper {
  display: flex;
  flex-flow: column;
  width: 100%;
}

.img_wrapper_first_line {
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 7px;
  margin-bottom: 5px;
}

.img_wrapper_second_line {
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 7px;
}

.photo {
  max-width: 32%;
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
