<template>
<div>
  <div class="recipe_material_row-wrapper">
    <input placeholder="材料名" class="recipe_material_name">
    <input placeholder="分量" class="recipe_material_quantity">
  </div>
  <recipe-material v-for="(material, index) in materials" v-bind:material="material" v-bind:key="index" />
  <b-button variant="primary" class="recipe_input" @click="onClick">行を追加</b-button>
</div>
</template>

<script>
import recipeMaterial from '../components/RecipeMaterial'

export default {
  // これっていつからリターンするようになったの？
  data: function() {
    return {
      materials: [1,2,3,4]
    }
  },
  components: {
    'recipe-material':recipeMaterial
  },
    methods: {
    onClick: function() {
      this.materials.push('');
    }
  }
}
</script>

<style scoped>

.recipe_material_row-wrapper {
  display: flex;
}

.recipe_material_name {
  width: 400px;
  margin: 5px;
}

.recipe_material_quantity {
  width: 400px;
  margin: 5px;
}

</style>
}
