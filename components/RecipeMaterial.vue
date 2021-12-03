<template>
  <div class="recipe_material_row-wrapper">
    <input class="recipe_material_name">
    <input class="recipe_material_quantity">
  </div>
</template>

<script>
export default {
  props: ['material']
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
