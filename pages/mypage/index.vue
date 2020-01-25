<template>
  <div>
    <h1>mypage.</h1>
    <div v-for="item in payments" :key="item.id" class="hoge">
      <b-message title="item.type">
        <ul>
          <li>
            id: {{ item.id }}
          </li>
          <li>
            支払額: {{ item.amount }}
          </li>
          <li>支払日: {{ item.paid_at }}</li>
        </ul>
      </b-message>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      payments: []
    }
  },
  mounted () {
    this.$axios.get('/payment/', {
      withCredentials: true
    }).then(response => (this.payments = response.data))
  }
}
</script>

<style scoped>
.hoge {
  margin: 1em;
}
</style>
