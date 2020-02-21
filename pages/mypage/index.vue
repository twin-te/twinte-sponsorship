<template>
  <div>
    <h1>mypage.</h1>
    <div class="patch">
      <h1>登録情報の変更</h1>
      <b-field label="Name">
        <b-input v-model="nickname" placeholder="NAME" required />
      </b-field>
      <b-field label="link">
        <b-input v-model="link" placeholder="URL" type="url" required />
      </b-field>
      <b-button @click="updateUserInfo" :disabled="isdisabled">
        更新
      </b-button>
    </div>
    <div class="subsc">
      <h1>サブスク</h1>
      <div v-for="item in history" :key="item.subscription_id" v-on:click="deletePlan(item.subscription_id)">
        <b-message :title="item.plan[0].name" aria-close-label="Close message" style="margin-bottom:10px;">
          <ul>
            <li>ID:{{ item.subscription_id }}</li>
            <li>プラン:{{ item.plan[0].name }}</li>
            <li>状態：{{ item.status }} </li>
            <li>登録日：{{ item.start_at | formatDate }}</li>
          </ul>
        </b-message>
      </div>
    </div>
    <div class="rireki">
      <h1>寄付の履歴</h1>
      <div v-for="item in payments" :key="item.id" class="hoge">
        <b-message v-if="item.status==='succeeded'">
          <ul>
            <li>支払いの種類: {{ item.type | type }}</li>
            <li>支払額: {{ item.amount }}円</li>
            <li>支払日: {{ item.paid_at | formatDate }}</li>
          </ul>
        </b-message>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  filters: {
    type (value) {
      return value === 'Subscription' ? 'サブスクリプション' : '一回きり'
    }
  },
  data () {
    return {
      payments: [],
      nickname: '',
      link: '',
      history: null
    }
  },
  computed: {
    isdisabled () {
      return (this.nickname.length === 0 || !this.isURL)
    },
    isURL () {
      return /^https?:\/\/.+/.test(this.link)
    }
  },
  mounted () {
    this.$axios.get('/payment/')
      .then(response => (this.payments = response.data))
    this.$axios.$get('/payment/subscriptions')
      .then(response => (this.history = response))
  },
  methods: {
    updateUserInfo () {
      this.$axios.patch('/payment/users/me', {
        nickname: this.nickname,
        link: this.link
      }
      )
        .then(() => this.$buefy.toast.open({
          message: '正常に更新できました.',
          type: 'is-success'
        }))
        .then(() => this.$router.push('/'))
        .catch((response) => {
          console.log(response)
          this.$buefy.toast.open({
            message: '更新に失敗しました.',
            type: 'is-danger'
          })
        })
    },
    deletePlan (planId) {
      if (window.confirm('このサブスクリプションを消去しますか？')) {
        this.$axios.$delete('/payment/subscriptions/' + planId).then(location.reload())
      }
    }
  }
}
</script>

<style scoped>
.hoge {
  margin: 1em;
}
</style>
