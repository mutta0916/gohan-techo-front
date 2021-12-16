<template>
  <div id="app">
    <div class="content_wrapper">
      <h1>アカウント作成</h1>
      <div class="content_main">
        <p>
          <label for="name-field">ニックネーム</label><br>
          <input id="name-field" type="text" name="name">
        </p>
        <p>
          <label for="email-field">メールアドレス</label><br>
          <input id="email-field" type="email" name="email">
        </p>
        <p>
          <label for="password-field">パスワード</label><br>
          <input id="password-field" type="password" name="password">
        </p>
        <p>
          <label for="reenter-password-field">パスワード(再入力)</label><br>
          <input id="reenter-password-field" type="password" name="password">
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content_wrapper {
  max-width: 1000px;
  margin: 15px auto;
  padding: 0 30 0 30px;
  text-align: center;
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
</style>
