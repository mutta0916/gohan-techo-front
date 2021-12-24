<template>
  <div>
    <header>
      <button v-show="isMobile" class="hamburger" @click="isActiveMenu = !isActiveMenu" />
      <transition name="fade">
        <nav v-show="!isMobile || isActiveMenu" class="global-nav">
          <div class="container">
            <ul class="navbar">
              <li>
                <NuxtLink to="/createRecipeApp" event="" @click.native.prevent="trigger">
                  ごはん手帳
                </NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink to="/createRecipeApp" event="" @click.native.prevent="trigger">
                  料理作成
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/menuApp" event="" @click.native.prevent="trigger">
                  献立表
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/recipeListApp" event="" @click.native.prevent="trigger">
                  料理一覧表
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/createRecipeApp" event="" @click.native.prevent="trigger">
                  サインアウト
                </NuxtLink>
              </li> -->
            </ul>
          </div>
        </nav>
      </transition>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      windowWidth: window.innerWidth,
      isActiveMenu: false
    }
  },
  computed: {
    isMobile () {
      return this.windowWidth < 768
    }
  },
  mounted () {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  methods: {
    trigger (event) {
      if (this.isMobile) {
        this.isActiveMenu = false
        this.$router.push({ path: event.target.pathname })
      } else {
        this.$router.push({ path: event.target.pathname })
      }
    }
  }
}
</script>

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
  display: flex;
  flex-flow: column;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 768px) {
  .navbar {
    display: flex;
    flex-flow: row;
  }
}
</style>
