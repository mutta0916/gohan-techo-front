<template>
  <div>
    <div v-for="(row, index) in data" :key="index" class="recipe_material_row_wrapper">
      <input
        v-if="index === 0"
        placeholder="材料"
        :value="row.name"
        type="text"
        class="recipe_material_name"
        @input="inputTextName(index, $event)"
      >
      <input v-else :value="row.name" type="text" class="recipe_material_name" @input="inputTextName(index, $event)">
      <input
        v-if="index === 0"
        placeholder="分量"
        :value="row.amount"
        type="text"
        class="recipe_material_amount"
        @input="inputTextAmount(index, $event)"
      >
      <input v-else :value="row.amount" type="text" class="recipe_material_name" @input="inputTextAmount(index, $event)">
    </div>
    <input type="submit" value="行を追加" class="recipe_material_button" @click="addRow">
    <input type="submit" value="行を削除" class="recipe_material_button" @click="delRow">
  </div>
</template>

<script>

export default {
  props: {
    ingredients: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      data: this.ingredients
    }
  },
  methods: {
    inputTextName (index, $event) {
      const amount = this.data[index].amount
      this.data[index] = { id: '0', name: $event.target.value, amount }
      this.$emit('change-ingredients', this.data)
    },
    inputTextAmount (index, $event) {
      const name = this.data[index].name
      this.data[index] = { id: '0', name, amount: $event.target.value }
      this.$emit('change-ingredients', this.data)
    },
    addRow () {
      this.data.push({ id: '0', name: '', amount: '' })
    },
    delRow () {
      this.data.pop()
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

.recipe_material_amount {
  width: 50%;
  margin: 5px;
}

.recipe_material_button {
  margin-top: 20px;
  margin-left: 5px;
}

</style>
}
