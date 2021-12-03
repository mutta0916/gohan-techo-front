<template>
  <div>
    <header>
      <nav>
        <div class="container">
          <ul class="navbar">
            <li>
              <NuxtLink to="/">
                ごはん手帳
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                料理作成
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                献立表
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                料理一覧表
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                User
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                Profile
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                Sign Out
              </NuxtLink>
            </li>
          </ul>
          <button id="mobile-menu" class="hamburger" />
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.nav_inner {
  /* TODO:開発後は背景色を削除 */
  background-color: #bad7f5;
  padding: 12px 12px 0 12px;
  font-size: 20px;
}
</style>
