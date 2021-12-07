<template>
  <div>
    <div class="recipe_material_row_wrapper">
      <input type="text" placeholder="材料" class="recipe_material_name">
      <input type="text" placeholder="分量" class="recipe_material_quantity">
    </div>
    <recipe-material v-for="(material, index) in materials" :key="index" :material="material" />
    <input type="submit" value="行を追加" class="recipe_material_button" @click="addRow">
    <input type="submit" value="行を削除" class="recipe_material_button" @click="delRow">
  </div>
</template>

<script>
import recipeMaterial from '../components/RecipeMaterial'

export default {
  components: {
    'recipe-material': recipeMaterial
  },
  data () {
    return {
      materials: [1, 2, 3, 4]
    }
  },
  methods: {
    addRow () {
      this.materials.push('')
    },
    delRow () {
      this.materials.pop()
    }
  }
}
</script>

<style scoped>
.recipe_material_row_wrapper {
  display: flex;
}

.recipe_material_name {
  width: 50%;
  margin: 5px;
}

.recipe_material_quantity {
  width: 50%;
  margin: 5px;
}

.recipe_material_button {
  margin-top: 20px;
  margin-left: 5px;
}

</style>
}
