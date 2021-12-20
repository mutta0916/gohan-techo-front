<template>
  <div id="app">
    <div class="content_wrapper">
      <h1>ごはん手帳</h1>
      <div class="login">
        <h2>ログイン</h2>
        <div class="content_main">
          <p>
            <label for="email-field">メールアドレス</label><br>
            <input id="email-field" type="email" name="email">
          </p>
          <p>
            <label for="password-field">パスワード</label><br>
            <input id="password-field" type="password" name="password">
          </p>
        </div>
        <input type="submit" value="ログイン" class="button_login" @click="login">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home'
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
  color: white;
  margin: 30px;
  font-size: 40px;
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
  width: 25%;
  background-color: #f3d2c1;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
  opacity: 1;
}

.button_login:hover {
  opacity: 0.5;
}
</style>
