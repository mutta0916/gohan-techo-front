<template>
  <div>
    <li><input type="text" class="recipe_howto"></li>
  </div>
</template>

<script>
export default {
  props: ['howto']
}
</script>

<style scoped>
li {
  margin-bottom: 5px;
}

.recipe_howto {
  width: 100%;
  margin: 5px;
}
</style>
}
