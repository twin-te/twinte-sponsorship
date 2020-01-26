<template>
  <div>
    <h1>mypage.</h1>
    <div v-for="item in payments" :key="item.id" class="hoge">
      <b-message v-if="item.status==='succeeded'">
        <ul>
          <li>
            支払いの種類: {{ item.type | type }}
          </li>
          <li>
            支払額: {{ item.amount }}円
          </li>
          <li>支払日: {{ item.paid_at | formatDate }}</li>
        </ul>
      </b-message>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    type (value) {
      return (value === 'Subscription' ? 'サブスクリプション' : '一回きり')
    }
  },
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
