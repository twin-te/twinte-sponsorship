<template>
  <section class="section">
    <h1 class="title">
      ありがとうございました!
    </h1>
    <h2 class="kind">
      <nav v-if="$route.query.type === 'onetime'">
      1回きりの寄付
      </nav>
      <nav v-else-if="$route.query.type === 'subscription'">
      サブスクリプション寄付（継続寄付）
      </nav>
    </h2>
    <p class="has-text-centered has-text-primary price">
      ¥{{ $route.query.amount }}
    </p>
    <p>
      以上の金額が寄付されました。
      <br>
      <nuxt-link to="/mypage">
        マイページ
      </nuxt-link>からユーザー情報の編集や寄付の履歴が確認できます。
    </p>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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
