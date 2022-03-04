<template>
  <div class="content_wrapper">
    <input :value="categoryMenus.title" type="text" placeholder="献立名称 例)朝ごはん" class="title" @change="change($event)">
    <div v-for="n in 3" :key="n" class="img_wrapper_line">
      <div class="img_wrapper">
        <div class="img_header">
          <p v-show="categoryMenus.data[( n - 1 ) * 2].recipe_name">
            {{ categoryMenus.data[( n - 1 ) * 2].recipe_name }}
          </p>
          <button
            v-show="categoryMenus.data[( n - 1 ) * 2].recipe_name"
            class="clear"
            @click="clear(categoryMenus.data[( n - 1 ) * 2].menu_recipes_id, ( n - 1 ) * 2)"
          >
            ×
          </button>
        </div>
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
      </div>
      <div class="img_wrapper">
        <div class="img_header">
          <p v-show="categoryMenus.data[2 * n - 1].recipe_name">
            {{ categoryMenus.data[2 * n - 1].recipe_name }}
          </p>
          <button
            v-show="categoryMenus.data[2 * n - 1].recipe_name"
            class="clear"
            @click="clear(categoryMenus.data[2 * n - 1].menu_recipes_id, 2 * n - 1)"
          >
            ×
          </button>
        </div>
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
  methods: {
    change ($event) {
      this.$emit('change-title', $event.target.value)
    },
    click (location) {
      this.$emit('modal-child-click', { showModalFlg: true, location })
    },
    clear (menuRecipesId, location) {
      this.$emit('clear', { menuRecipesId, location })
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
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.img_wrapper {
  position: relative;
  width: 100%;
  height: auto;
}

.img_header {
  width: 100%;
  position: absolute;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  top: 0;
  left: 0;
  margin: 0;
}

.img_wrapper p {
  margin: 0;
  max-width: 91%;
  color: white;
  background: skyblue;
  font-size: 15px;
  line-height: 1;
  padding: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.clear {
  font-size: 20px;
  font-weight: bold;
  background: transparent;
  border: none;
  cursor:pointer;
}

.clear:hover {
  opacity: 0.5;
}

.photo {
  margin: 0;
  width: 100%;
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
