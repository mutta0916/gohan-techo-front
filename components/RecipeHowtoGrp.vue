<template>
  <div>
    <ol>
      <li v-for="(row, index) in data" :key="index">
        <input
          v-if="index === 0"
          placeholder="手順を入力してください。"
          :value="row.howto"
          type="text"
          class="recipe_howto"
          @input="inputText(index, $event)"
        >
        <input v-else :value="row.howto" type="text" class="recipe_howto" @input="inputText(index, $event)">
      </li>
    </ol>
    <input type="submit" value="行を追加" @click="addRow">
    <input type="submit" value="行を削除" @click="delRow">
  </div>
</template>

<script>
export default {
  props: {
    howtos: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      data: this.howtos
    }
  },
  methods: {
    inputText (index, $event) {
      this.data[index] = { id: '0', howto: $event.target.value }
      this.$emit('change-howto', this.data)
    },
    addRow () {
      this.data.push({ id: '0', howto: '' })
    },
    delRow () {
      this.data.pop()
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
