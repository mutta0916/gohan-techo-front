<template>
  <div>
    <header>
      <button v-show="isMobile" class="hamburger" @click="isActiveMenu = !isActiveMenu" />
      <transition name="fade">
        <nav v-show="!isMobile || isActiveMenu">
          <div class="container">
            <ul class="navbar">
              <div class="left_navbar">
                <li>
                  <NuxtLink to="/menuApp" @click.native.prevent="trigger">
                    ごはん手帳
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/createRecipeApp" @click.native.prevent="trigger">
                    料理作成
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/menuApp" @click.native.prevent="trigger">
                    献立表
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/recipeListApp" @click.native.prevent="trigger">
                    料理一覧表
                  </NuxtLink>
                </li>
              </div>
              <!-- <div class="light_navbar">
                <li>
                  <NuxtLink to="/" @click.native.prevent="trigger">
                    サインアウト
                  </NuxtLink>
                </li>
              </div> -->
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
      isActiveMenu: false,
      paramCount: 0
    }
  },
  computed: {
    isMobile () {
      return this.windowWidth < 768
    }
  },
  watch: {
    $route (to, from) {
      this.paramCount = Object.keys(from.query).length
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
      }
      this.$router.push({ path: event.target.pathname })
      if (this.paramCount > 0 && event.target.pathname === '/createRecipeApp') {
        // 料理一覧画面からの遷移時かつ、料理作成画面選択時はリロードする
        // 同一コンポーネント仕様の場合、インスタンス再作成が行われないため
        location.reload()
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
    justify-content: space-between;
  }
  .left_navbar {
    display: flex;
  }
}
</style>
