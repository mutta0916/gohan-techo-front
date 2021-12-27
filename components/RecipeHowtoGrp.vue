<template>
  <div>
    <ol>
      <li><input type="text" placeholder="手順を入力してください。" class="recipe_howto"></li>
      <recipe-howto v-for="(howto, index) in howtos" :key="index" :howto="howto" />
    </ol>
    <input type="submit" value="行を追加" @click="addRow">
    <input type="submit" value="行を削除" @click="delRow">
  </div>
</template>

<script>
import recipeHowto from './RecipeHowto'

export default {
  components: {
    'recipe-howto': recipeHowto
  },
  data () {
    return {
      howtos: ['1', '2', '3', '4', '5', '6', '7']
    }
  },
  methods: {
    addRow () {
      this.howtos.push('')
    },
    delRow () {
      this.howtos.pop()
    }
  }
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
