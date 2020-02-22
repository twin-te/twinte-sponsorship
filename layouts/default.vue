<template>
  <div>
    <section class="main-content columns is-gapless">
      <aside class="column is-2 section">
        <p class="title">
          <img src="~/assets/Twintelogo-sponsor.png" alt="Twin:te_Logo">
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10 nuxt-contents">
        <section class="header section">
          <div class="right">
            <button
              @click="isComponentModalActive = true"
              exact-active-class="is-active"
              class="button"
            >
              ログイン
            </button>
            <button @click="logout" class="button">
              ログアウト
            </button>
            <p>{{ state }}</p>
          </div>
          <b-modal
            :active.sync="isComponentModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal
          >
            <login-alert />
          </b-modal>
        </section>
        <section class="section">
          <nuxt />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import LoginAlert from '~/components/LoginAlert.vue'
export default {
  components: {
    LoginAlert
  },
  data () {
    return {
      items: [
        {
          title: '寄付のお願い',
          to: { name: 'index' }
        },
        {
          title: '寄付・サブスク登録',
          to: { name: 'register' }
        },
        {
          title: 'マイページ',
          to: { name: 'mypage' }
        }
      ],
      isComponentModalActive: false
    }
  },
  computed: {
    state () {
      return this.$store.getters.authorized
    }
  },
  mounted () {
    this.$store.dispatch('login')
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
$menu-color: #1A1D32;
@import "~assets/scss/style.scss"; // これ書かないと読み込まれないのなんで、、、

aside{
  background-color: $menu-color;
  a{
    box-sizing:border-box;
    margin-right:10%;
    border-radius: 0px 5px 5px 0px;
  }
}

.title{
  margin:auto;
  padding-top:1rem;
  padding-bottom:1rem;
  text-align: center;
  width:80%;
  img{
    min-width:10vw;
    width:60%;
  }
}

.nuxt-contents{
  min-height: 100vh;
}

.header {
  padding-bottom: 0;
  padding-top: 1rem;
  .button {
  border-color: $primary;
  color: $primary
}
.right {
  text-align: right
}
}
</style>
