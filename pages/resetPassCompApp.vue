<template>
  <div id="app">
    <div class="content_wrapper">
      <h1>パスワード設定完了</h1>
      <p class="message">
        パスワードの再設定が完了しました。
      </p>
      <NuxtLink to="/" class="link">
        ログイン画面へ
      </NuxtLink>
    </div>
  </div>
</template>

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

.message {
  margin-bottom: 50px;
}

.link {
  height: auto;
  padding: 10px 10px;
  width: 30%;
  background-color: #f3d2c1;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
  text-decoration: none;
  color: black;
}

.link:hover {
  opacity: 0.5;
}
</style>
