<template>
  <transition name="modal">
    <div class="modal_mask">
      <div class="content_wrapper">
        <div class="content_header">
          <div class="content_name_header">
            <p class="content_message">
              料理を選択してください。
            </p>
            <button class="close_button" @click="$emit('close')">
              閉じる
            </button>
          </div>
          <input v-model="keyword" type="text" placeholder="ここから検索ができます。" class="search">
        </div>
        <div class="content_body">
          <div v-for="(recipe, index) in filteredRecipes" :key="index" class="photo_wrapper" @click="selectDish(recipe.id, recipe.name, recipe.photo)">
            <p>{{ recipe.name }}</p>
            <figure>
              <img
                v-if="recipe.photo===null"
                :src="require('../assets/upload.svg')"
                alt="料理画像"
                class="photo"
              >
              <img
                v-else
                :src="recipe.photo"
                alt="料理画像"
                class="photo"
              >
            </figure>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    recipes: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      keyword: ''
    }
  },
  computed: {
    filteredRecipes () {
      return this.recipes.filter(elem => elem.name.includes(this.keyword) || elem.genre_name.includes(this.keyword) || elem.type_name.includes(this.keyword))
    }
  },
  methods: {
    selectDish (id, name, photo) {
      this.$emit('selectDish', id, name, photo)
    }
  }
}
</script>

<style scoped>
.content_message {
  margin: 0;
}

.content_name_header {
  display: flex;
  justify-content: space-between;
}

.close_button {
  width: 100px;
  height: 30px;
  background-color: #f3d2c1;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
}

.close_button:hover {
  opacity: 0.5;
}

.search {
  width: 30%;
  margin-bottom: 5px;
}

.modal_mask {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
}

.content_wrapper {
  width: 65%;
  margin: 0px auto;
  padding: 30px;
  background-color: #f5eae4;
  box-shadow: 0 2px 8px #00000054;
}

.content_body {
  height: 68vh;
  overflow-y: auto;
  scroll-snap-type: y;
  scroll-padding: 100px;
  padding: 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 24%);
  gap: 10px;
}

.photo_wrapper {
  position: relative;
  width: 100%;
  height: auto;
  scroll-snap-align: start;
}

.photo_wrapper p {
  max-width: 91%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  color: white;
  background: skyblue;
  font-size: 15px;
  line-height: 1;
  padding: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

figure {
  margin: 0;
}

.photo {
  width: 100%;
  height: auto;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave {
  opacity: 1;
}

.modal-leave-active {
  transition: opacity 0.5s;
}
</style>
