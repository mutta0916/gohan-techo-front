<template>
  <div>
    <ol>
      <li><input placeholder="豚肉に塩コショウを振る。" class="recipe_howto"></li>
      <recipeHowto v-for="(howto, index) in howtos" :key="index" :howto="howto" />
    </ol>
    <b-button variant="primary" class="recipe_input" @click="onClick">
      行を追加
    </b-button>
  </div>
</template>

<script>
import recipeHowto from '../components/RecipeHowto'

export default {
  components: {
    'recipe-howto': recipeHowto
  },
  data () {
    return {
      howtos: [1, 2, 3, 4]
    }
  },
  methods: {
    onClick () {
      this.howtos.push('')
    }
  }
}

</script>

<style scoped>

.recipe_howto {
  margin: 5px;
}

</style>
}
