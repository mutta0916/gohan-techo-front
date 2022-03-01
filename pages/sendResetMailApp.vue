<template>
  <div id="app">
    <div class="content_wrapper">
      <h1>パスワード再設定</h1>
      <div class="content_main">
        <p>
          アカウント作成時に使用したメールアドレスを入力してください。
        </p>
        <p>
          <input id="email-field" type="email" name="email" placeholder="メールアドレスを入力してください。">
        </p>
      </div>
      <input type="submit" value="送信" class="button_send">
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

.button_send {
  padding: 10px 0;
  width: 25%;
  background-color: #f3d2c1;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
}

.button_send:hover {
  opacity: 0.5;
}
</style>
