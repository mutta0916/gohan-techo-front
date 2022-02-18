<template>
  <div class="content_wrapper">
    <input v-model="title" type="text" placeholder="献立名称 例)朝ごはん" class="title">
    <!-- <div v-for="(categoryMenu, index) in categoryMenus.data" :key="index">
    </div> -->
    <!-- <div v-for="index in 3" :key="index" class="img_wrapper_line"> -->
    <!-- <div v-for="(categoryMenu, index) in categoryMenus.data" :key="index" class="img_wrapper_line"> -->
    <!-- <img
        :key="indexImg"
        :src="categoryMenus.data[0].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click"
      >
    </div> -->
    <div class="img_wrapper_line">
      <img
        v-if="!categoryMenus.data[0].recipe_photo"
        :src="require('../assets/upload.svg')"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-else
        :src="categoryMenus.data[0].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-if="!categoryMenus.data[1].recipe_photo"
        :src="require('../assets/upload.svg')"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-else
        :src="categoryMenus.data[1].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click"
      >
    </div>
    <div class="img_wrapper_line">
      <img
        v-if="!categoryMenus.data[2].recipe_photo"
        :src="require('../assets/upload.svg')"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-else
        :src="categoryMenus.data[2].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-if="!categoryMenus.data[3].recipe_photo"
        :src="require('../assets/upload.svg')"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-else
        :src="categoryMenus.data[3].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click"
      >
    </div>
    <div class="img_wrapper_line">
      <img
        v-if="!categoryMenus.data[4].recipe_photo"
        :src="require('../assets/upload.svg')"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-else
        :src="categoryMenus.data[4].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-if="!categoryMenus.data[5].recipe_photo"
        :src="require('../assets/upload.svg')"
        alt="献立画像"
        class="photo"
        @click="click"
      >
      <img
        v-else
        :src="categoryMenus.data[5].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click"
      >
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    categoryMenus: {
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
    }
  },
  data () {
    return {
      photo: require('../assets/upload.svg'),
      title: this.categoryMenus.title
    }
  },
  methods: {
    click (event) {
      this.$emit('modal-child-click', true)
    }
  }
}
</script>

<style scoped>
.title {
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
