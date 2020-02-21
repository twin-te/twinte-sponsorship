<template>
  <div>
    <h1 class="title">
      寄付・サブスク登録
    </h1>

    <div class="card">
      <h1 class="title">
        1回きりの決済による寄付
      </h1>
      <p>
        1回の決済による単発の寄付です。 <br>
        スライダーを動かして金額を設定し、「寄付する」ボタンを押すと、決済ページへ移動します。
      </p>
      <p class="has-text-centered has-text-primary price">
        ¥{{ value }}
      </p>
      <b-field>
        <b-slider v-model="value" :min="100" :max="10000" />
      </b-field>
      <p class="has-text-primary">
        ご協力いただく金額で、Twin:teを<span style="font-weight:bold">{{ Math.round((Math.floor(value*0.964) / 4000)*100)/100 }}ヶ月</span>運営することができます。
      </p>
      <p style="color:#9A9A9A">
        ※手数料を差し引くとTwin:teには{{ Math.floor(value*0.964) }}円寄付されます。
      </p>
      <div class="buttons">
        <b-button v-on:click="registerOneTime(value)" type="is-primary" expanded>
          寄付する
        </b-button>
      </div>
      <p v-if="$store.state.login">
        {{ $store.state.statement }}
      </p>
    </div>

    <div class="card">
      <h1 class="title">
        サブスクリプション（毎月のお支払い）の登録
      </h1>
      <p>
        毎月決済が行われるサブスクリプションです。
        月ごとにお支払いいただく金額を下記から選択し、「登録する」ボタンを押すと、決済ページへ移動します。
      </p>
      <p style="font-weight:bold">
        このサブスクリプションは<nuxt-link to="/mypage">マイページ</nuxt-link>よりいつでもご解約いただけます。
      </p>
      <div style="margin:2rem 0 2rem 0;">
        <div class="field">
          <b-radio
            v-model="radio"
            native-value="plan_GZwD2T1hVZVNZd"
          >
            月200円寄付
          </b-radio>
        </div>
        <div class="field">
          <b-radio
            v-model="radio"
            native-value="plan_GZwDaJIQA5yPex"
          >
            月500円寄付
          </b-radio>
        </div>
        <div class="field">
          <b-radio
            v-model="radio"
            native-value="plan_GZwD0M4vQGFRPH"
          >
            月1000円寄付
          </b-radio>
        </div>
      </div>

      <div class="buttons">
        <b-button v-on:click="registerSubscription(radio)" type="is-primary" expanded>
          寄付する
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value: 500,
      radio: 'plan_GZwD2T1hVZVNZd'
    }
  },
  methods: {
    registerSubscription (plan) {
      const stripe = window.Stripe('pk_test_BiJShQLk2tTyKXCJof20dplQ00blaeB3yf') // public key
      this.$axios.$post('/payment/checkout-session/subscription', {
        plan_id: plan
      }, {
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        const sessionId = response.sessionId
        stripe.redirectToCheckout({
          sessionId
        }).then(function (result) {
        // 失敗時のみ呼び出される
        })
      })
    },
    registerOneTime (amount) {
      const stripe = window.Stripe('pk_test_BiJShQLk2tTyKXCJof20dplQ00blaeB3yf') // public key
      this.$axios.$post('/payment/checkout-session/onetime', {
        amount
      }, {
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        const sessionId = response.sessionId
        stripe.redirectToCheckout({
          sessionId
        }).then(function (result) {
        // 失敗時のみ呼び出される
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.price{
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 72px;
}

.buttons{
  margin-top: 1rem;
}
</style>
