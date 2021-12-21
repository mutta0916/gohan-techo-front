<template>
  <div id="app">
    <div class="content_wrapper">
      <h1>パスワード設定</h1>
      <div class="content_main">
        <p>
          新しいパスワードを入力してください。
        </p>
        <p>
          <label for="password-field">パスワード</label><br>
          <input-password />
        </p>
      </div>
      <input type="submit" value="設定" class="button_reset">
    </div>
  </div>
</template>

<script>
import inputPassword from '../components/InputPassword.vue'

export default {
  components: {
    'input-password': inputPassword
  }
}
</script>

<style scoped>
.content_wrapper {
  max-width: 700px;
  margin: 15px auto;
  padding: 0 30 0 30px;
  text-align: center;
  height: 80vh;
}

h1 {
  letter-spacing: 10px;
}

.content_main {
  width: 50%;
  text-align: left;
  margin: 30px auto;
}

input {
  width: 100%;
  height: auto;
  margin: 5px 0;
}

.button_reset {
  padding: 10px 0;
  width: 25%;
  background-color: #f3d2c1;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
}

.button_reset:hover {
  opacity: 0.5;
}
</style>
