<template>
  <div>
    <section class="main-content is-gapless">
      <aside>
        <div id="menu-contents">
          <p class="logotitle">
            <img src="~/assets/twinte-sponsor-title.png" alt="Twin:te_Logo">
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
        </div>
      </aside>

      <div class="container nuxt-contents">
        <section class="section">
          <header class="header">
            <img src="~/assets/twinte-sponsor-title.png" alt="Twin:te_Logo">
            <div class="has-text-right">
              <button
                @click="login()"
                v-if="!state"
                exact-active-class="is-active"
                class="button is-primary is-outlined has-text-weight-bold"
              >
                ログイン
              </button>
              <button @click="logout" v-else class="button is-primary is-outlined has-text-weight-bold">
                ログアウト
              </button>
            <!-- <p>{{ state }}</p> -->
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
          </header>
          <main>
            <nuxt />
          </main>
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
$tab: 960px; // タブレット
$sp: 560px;  // スマホ
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

.main-content{
   display: flex;
}

.nuxt-contents{
  min-height: 100vh;
  width:auto;
}

// サイドメニュー設定
$menu-color: #1A1D32;
aside{
  width:15vw;
  // サイズ設定
  @include tab {
    width:25vw;
  };
  @include sp {
    display: none;// テストコード
  };

  background-color: $menu-color;
  #menu-contents{
    position: sticky;
    top: 0;
  }
  a{
    box-sizing:border-box;
    margin-right:10%;
    border-radius: 0px 5px 5px 0px;
  }
  .logotitle{
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
}

$sp-header-height: 10vh;
header{
  @include sp {
    display: flex;
    justify-content: center;
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:$sp-header-height;
    background-color: $menu-color;
  };

  img{
    display: none;
    @include sp {
      display: block;
      height:70%;
      margin:0;
    }
  }
}

main{
    @include sp {
      margin-top:$sp-header-height;
  };
}

</style>
