<template>
  <div>
    <section class="main-content columns is-gapless">
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
aside{
  background-color: $menu-color;
}

.menu-list{
    a{
      color: #ffffff;
    }
}
</style>
