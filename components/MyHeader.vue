<template>
  <div>
    <header>
      <button id="mobile-menu" class="hamburger" />
      <nav>
        <div class="container">
          <ul class="navbar">
            <li>
              <NuxtLink to="/createRecipeApp">
                ごはん手帳
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/createRecipeApp">
                料理作成
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/createRecipeApp">
                献立表
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/recipeListApp">
                料理一覧表
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/createRecipeApp">
                User
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/createRecipeApp">
                Profile
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/createRecipeApp">
                Sign Out
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.hamburger {
  margin: 5px;
  border: none;
  width: 50px;
  height: 50px;
  background: url(../assets/hamburger.svg);
  background-size: contain;
}

.navbar {
  display: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 23px;
}

.navbar li a {
  display: block;
  padding: 15px 10px;
  text-decoration: none;
  color: #575a63;
}

.navbar li a:hover {
  opacity: 0.7;
}

@media only screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }
  .navbar {
    display: flex !important;
  }
}
</style>
