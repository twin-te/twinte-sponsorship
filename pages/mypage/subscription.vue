<template>
  <section class="section">
    <div class="is-mobile">
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
  </section>
</template>

<script>

export default {
  name: 'HomePage',
  middleware: 'authenticated',
  components: {

  },
  data () {
    return {
      history: null,
      login: true
    }
  },
  mounted () {
    this.$axios.$get('/payment/subscriptions')
      .then(response => (this.history = response))
  },
  methods: {
    deletePlan (planId) {
      if (window.confirm('このサブスクリプションを消去しますか？')) {
        this.$axios.$delete('/payment/subscriptions/' + planId).then(location.reload())
      }
    } }
}
</script>
