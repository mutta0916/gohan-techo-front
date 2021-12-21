<template>
  <div class="input_wrapper">
    <input id="password-field" name="password" :type="type">
    <button class="btn_showOrHide" @click="showOrHide">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'password'
    }
  },
  computed: {
    btnText () {
      return (this.type === 'password' ? '表示' : '非表示')
    }
  },
  methods: {
    showOrHide () {
      this.type = (this.type === 'password' ? 'text' : 'password')
    }
  }
}
</script>

<style scoped>
.btn_showOrHide {
  width: 25%;
  color: #35373d;
  background-color: #8bd4ddd3;
  border: none;
  border-radius: 5px;
}

.input_wrapper {
  display: flex;
  flex-flow: row;
  width: 100%;
  height: auto;
}

input {
  padding: 0;
  width: 75%;
  height: auto;
}
</style>
}
