<template>
  <div id="app">
    <div class="content_wrapper">
      <h1>ごはん手帳</h1>
      <button type="button" class="button_login" @click="login">
        おた飯利用
      </button>
      <!-- <div class="login">
        <h2>ログイン</h2>
        <div class="content_main">
          <p>
            <label for="email-field">メールアドレス</label><br>
            <input id="email-field" type="email" name="email">
          </p>
          <p>
            <label for="password-field">パスワード</label><br>
            <input-password />
          </p>
        </div>
        <button type="button" class="button_login" @click="login">
          ログイン
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
// import inputPassword from '../components/InputPassword.vue'

export default {
  // components: {
  //   'input-password': inputPassword
  // },
  layout: 'home',
  methods: {
    login () {
      this.$router.push('/createRecipeApp')
    }
  }
}
</script>

<style scoped>
.content_wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-image: url('../assets/topmenu.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

h1 {
  /* color: white; */
  margin: 30px;
  font-size: 50px;
}

.login {
  padding: 30px;
  border-radius: 15%;
  width: 20%;
  background-color: white;
  opacity: 0.8;
  color: #35373d;
}

h2 {
  letter-spacing: 10px;
  margin: 0;
}

.content_main {
  text-align: left;
  margin: 30px auto;
}

input {
  width: 100%;
  height: auto;
  margin: 5px 0;
}

.button_login {
  padding: 10px 0;
  width: 15%;
  background-color: #f3d2c1;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: bold 15px;
  opacity: 1;
}

.button_login:hover {
  opacity: 0.5;
}
</style>
