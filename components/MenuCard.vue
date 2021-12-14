<template>
  <div class="content_wrapper">
    <input type="text" placeholder="献立名称 例)朝ごはん" class="name">
    <div class="img_wrapper">
      <img v-for="index in 5" :key="index" :src="photo" alt="献立画像" class="photo">
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
}

.name {
  margin-bottom: 10px;
}

.img_wrapper {
  margin: 0;
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}

.photo {
  position: absolute;
  top: 0;
  right: 0;
  width: 95px;
  height: 95px;
  /* border: 2px solid #8bd3dd; */
  border-radius: 50%;
  box-sizing: border-box;
}

.photo:nth-child(1){
  top: 0px;
  left: 16%;
}

.photo:nth-child(2){
  top: 0px;
  left: 50%;
}

.photo:nth-child(3){
  top: 50%;
  left: 0;
}

.photo:nth-child(4){
  top: 50%;
  left: 33.5%;
}

.photo:nth-child(5){
  top: 50%;
  right: 0%;
}

.select_recipe {
  text-align: left;
  box-sizing: border-box;
  border-bottom: 1px dotted;
  border-right:none;
  border-left:none;
  border-top:none;
  background-color: transparent;
  margin-bottom: 7px;
}
</style>
}
