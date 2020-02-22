<template>
  <section class="header">
    <div class="right">
      <nuxt-link
        to="mypage"
        exact-active-class="is-active"
        class="button"
      >
        マイページ
      </nuxt-link>
    </div>
  </section>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "~assets/scss/style.scss"; // これ書かないと読み込まれないのなんで、、、
.button {
  border-color: $primary;
  color: $primary
}
.right {
  text-align: right
}
</style>
