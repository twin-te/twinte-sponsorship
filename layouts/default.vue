<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link v-if="!state" class="button" to="login">
            <strong>login</strong>
          </nuxt-link>
          <button @click="logout" v-else class="button">
            logout
          </button>
          <h1 class="is-praimary">
            {{ state }}
          </h1>
        </div>
      </b-navbar-item>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
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
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
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
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        },
        {
          title: 'サブスク登録',
          icon: 'lightbulb',
          to: { name: 'register' }
        },
        {
          title: '一回きりの寄付',
          icon: 'lightbulb',
          to: { name: 'onetime' }
        },
        {
          title: '寄付の履歴',
          icon: 'lightbulb',
          to: { name: 'mypage' }
        },
        {
          title: 'サブスク登録状況と消去',
          icon: 'lightbulb',
          to: { name: 'mypage-subscription' }
        },
        {
          title: 'ユーザー情報更新',
          icon: 'lightbulb',
          to: { name: 'mypage-patch' }
        },
        {
          title: 'ログイン',
          icon: 'lightbulb',
          to: { name: 'login' }
        }

      ]
    }
  },
  computed: {
    state () {
      return this.$store.getters.authorized
    },
    nickname () {
      return this.$store.state.nickname
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
