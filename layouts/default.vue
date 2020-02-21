<template>
  <div>
    <section class="main-content columns is-gapless">
      <aside class="column is-2 section">
        <p class="title">
          <img src="~/assets/Twintelogo-white.png" alt="Twin:te_Logo">
          SPONSOR
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
          title: '寄付のお願い',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          to: { name: 'inspire' }
        },
        {
          title: '寄付・サブスク登録',
          to: { name: 'register' }
        },
        {
          title: 'マイページ',
          to: { name: 'mypage' }
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
  p{
    color:#ffffff;
  }
  a{
    margin-right:10%;
    font-family: Roboto;
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
    width:60%;
  }
}

.nuxt-contents{
  min-height: 100vh;
}

</style>
