<template>
  <div class="recipe_material_row_wrapper">
    <input type="text" class="recipe_material_name">
    <input type="text" class="recipe_material_quantity">
  </div>
</template>

<script>
export default {
  props: {
    material: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
recipe_material_row_wrapper {
  display: flex;
}

.recipe_material_name {
  width: 60%;
  margin: 5px;
}

.recipe_material_quantity {
  width: 60%;
  margin: 5px;
}
</style>
}
