<template>
  <div class="content_wrapper">
    <input v-model="title" type="text" placeholder="献立名称 例)朝ごはん" class="title" @change="change">
    <div v-for="n in 3" :key="n" class="img_wrapper_line">
      <p>{{ categoryMenus.data[( n - 1 ) * 2].name }}</p>
      <img
        v-if="!categoryMenus.data[( n - 1 ) * 2].recipe_photo"
        :src="require('../assets/upload.svg')"
        alt="献立画像"
        class="photo"
        @click="click(( n - 1 ) * 2)"
      >
      <img
        v-else
        :src="categoryMenus.data[( n - 1 ) * 2].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click(( n - 1 ) * 2)"
      >
      <p>{{ categoryMenus.data[2 * n - 1].name }}</p>
      <img
        v-if="!categoryMenus.data[2 * n - 1].recipe_photo"
        :src="require('../assets/upload.svg')"
        alt="献立画像"
        class="photo"
        @click="click(2 * n - 1)"
      >
      <img
        v-else
        :src="categoryMenus.data[2 * n - 1].recipe_photo"
        alt="献立画像"
        class="photo"
        @click="click(2 * n - 1)"
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
    change () {
      this.$emit('change-title', this.title)
    },
    click (location) {
      this.$emit('modal-child-click', { showModalFlg: true, location })
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
