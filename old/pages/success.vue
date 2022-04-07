<template>
  <section class="section">
    <h1 class="title">
      ありがとうございました!
    </h1>
    <h2 class="kind">
      <nav v-if="getParameter.type === 'onetime'">
        1回きりの寄付
      </nav>
      <nav v-else-if="getParameter.type === 'subscription'">
        サブスクリプション寄付（継続寄付）
      </nav>
    </h2>
    <p class="has-text-centered has-text-primary price">
      ¥{{ getParameter.amount }}
    </p>
    <p>
      以上の金額が寄付されました。
      <br>
      <nuxt-link to="/mypage">
        マイページ
      </nuxt-link>からユーザー情報の編集や寄付の履歴が確認できます。
    </p>
    <p id="share">
      <a
        :data-text="makeText()"
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-size="large"
        data-url="https://sponsorship.twinte.net"
        data-via="te_twin"
        data-hashtags="Twinte"
        data-related="te_twin"
        data-show-count="false"
      >Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
    </p>
  </section>
</template>

<script>
export default {
  computed: {
    getParameter () {
      return {
        type: this.$route.query.type,
        amount: this.$route.query.amount
      }
    }
  },
  methods: {
    makeText () {
      if (this.getParameter.type === 'subscription') {
        return 'Twin:teに月課金として' + this.getParameter.amount + '円/月の寄付登録をしました！'
      } else {
        return 'Twin:teに' + this.getParameter.amount + '円を寄付しました！'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#share{
  margin-top: 1rem;
}
.kind{
  font-style: normal;
  font-weight: bold;
}
.price{
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 72px;
}
</style>
