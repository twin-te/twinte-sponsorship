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
              @click="login()"
              v-if="!state"
              exact-active-class="is-active"
              class="button"
            >
              ログイン
            </button>
            <button @click="logout" v-else class="button">
              ログアウト
            </button>
            <!-- <p>{{ state }}</p> -->
          </div>
        </section>
        <section class="section">
          <nuxt />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
    login () {
      this.$swal({
        title: 'どのアカウントでログインしますか?',
        html: `
      <div>
          <a href="https://api.twinte.net/v1/auth/google?redirect-to=https://sponsorship.twinte.net">
            <img
              width="250"
              src="authing/sign-in-with-google.png"
              alt="sign in with google"
            >
          </a>
        </div>
        <div>
          <a href="https://api.twinte.net/v1/auth/apple?redirect-to=https://sponsorship.twinte.net">
            <img
              width="250"
              src="/authing/sign-in-with-apple.png"
              alt="sign in with apple"
            >
          </a>
        </div>
        <div>
          <a href="https://api.twinte.net/v1/auth/twitter?redirect-to=https://sponsorship.twinte.net">
            <img
              width="250"
              src="/authing/sign-in-with-twitter.png"
              alt="sign in with twitter"
            >
          </a>
        </div>
      `,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: '閉じる'
      })
    },
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
