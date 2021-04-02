<template>
  <section>
    <div style="margin-bottom:2rem;">
      <h1 class="title pagetitle">
        返礼品一覧
      </h1>
      <p>
        寄付合計金額が以下に記載の値段を超える方はそれぞれの返礼品を申し込むことができます。<br>
        返礼品をご希望の場合は、マイページに記載のID・合計金額・希望する返礼品を記載の上<a href="mailto:info@twinte.net?subject=返礼品について">info@twinte.net</a>までご連絡ください。
      </p>
    </div>
    <div class="card">
      <div>
        <h1 class="title">
          3000円 Twin:teオリジナルステッカー
        </h1>
      </div>

      <div class="img-wrapper">
        <img src="~/assets/twinte-sticker1.jpg" alt="Twin:teステッカー">
      </div>
      <p>
        Twin:teのロゴのステッカーです！シールになっているので好きなところに張れますよ！
      </p>
    </div>
    <div class="card">
      <div>
        <h1 class="title">
          10000円 Twin:teオリジナルUSB
        </h1>
      </div>

      <div class="img-wrapper">
        <img src="~/assets/Twinte-usb.jpg" alt="Twin:teステッカー">
      </div>
      <p>
        オリジナルキャラクター「コロン」とロゴが描かれたオリジナルUSBです！<br>
        裏面に描かれるコロンは三種類から選択することができます！<br>
        メールを送る際にどのコロンか選択してくださいね♪<br>
        大容量・高速なので、普段使いにも良しOSインストーラーとしても良し、キーホルダーにしても良しです！<br>
        仕様：USB3.0 32GB<br>
        ※使用したことによって起こった損害に関してTwin:teは一切の責任を負いません。
      </p>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {

    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.img-wrapper{
  width:100%;
}

img {
  width:100%;
  max-width: 400px;
}

.title{
    border-left: 5px solid #00c0c0;
    padding-left: 1rem;
}
.title.pagetitle{
    border: initial;
    padding-left: initial;
}
</style>
