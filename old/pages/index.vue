<template>
  <div>
    <h1 class="title pagetitle">
      寄付のお願い
    </h1>

    <p>
      いつもTwin:teをご利用いただきありがとうございます。
      Twin:teはおかげさまで2021年2月で2周年を迎え、筑波大学生の過半数に利用していただいている状況となりました。
    </p>
    <p>
      当初よりTwin:teは「<span class="has-text-weight-bold">広告なしで無料の筑波大学生専用時間割アプリ</span>」という構想で開発していますが、
      Twin:teの運用にはどうしても資金が必要です。
    </p>
    <p>当初と比較してユーザー数が増え、それに伴って運営に必要な資金も増えています。</p>
    <div class="has-text-centered">
      <img src="~/assets/twinte-cost.png" alt="Twin:te_Cost">
    </div>
    <p>
      また、Twin:te の開発は現在も続いておりますが、メンテナンスや機能の追加等で
      主要メンバーの時間的負担も大きくなっています。
      Twin:te 主要メンバーが負担できる時間的・金銭的なコストにも限度があります。
    </p>
    <p>
      そのような経緯があり、またありがたいことに「<span class="has-text-weight-bold">Twin:teに寄付をしたい</span>」との声を多数いただいておりますので、
      このような場を設けさせていただきました。
    </p>
    <p>
      寄付は何もお金に関することだけではありません。<br>我々にとってありがたいものは、
      <ul class="has-text-primary has-text-weight-bold">
        <li>金銭的に寄付してもらう</li>
        <li>コントリビュータとして開発に携わってもらう</li>
        <li>たくさんの人に使ってもらえるように拡散してもらう</li>
      </ul>
      ことです。
    </p>
    <p>
      このページでは「金銭的に寄付」していただける方に向けてご案内しておりますので、皆様が納得できる金額や方法で寄付してもらえれば幸いです。
      また、コントリビュータとして開発に携わってくださる方は、<a href="https://github.com/twin-te">Twin:teのGitHubレポジトリ</a>をご覧ください。
    </p>
    <p>
      Twin:teを長期間運用するためには皆さまのご協力が必要です。
      1回きりではなくサブスクリプションとして登録・寄付していただけると、今後長期的にTwin:teを運用することが可能になります。
    </p>
    <h2 class="title">
      寄付金の利用とお礼について
    </h2>
    <p>
      寄付金はTwin:teの維持費・広告費に用いられます。
      特に運営には欠かせないサーバーの費用やアプリ公開にかかる費用などの維持費に使われます。
      また、その他今後のTwin:teの運営に必要な資金に当てさせていただきます。
    </p>
    <p>
      希望する場合、寄付していただいた方のお名前とリンク（マイページで登録できます）を寄付者一覧のページに記載いたします。<br>
      また、総額3000円以上寄付していただいた方には返礼品をお送りする予定です。寄付後、info@twinte.netまでマイページの表示名と寄付金額とともにメールでご連絡ください。
    </p>
    <h2 class="title">
      安全性について
    </h2>
    <p>
      Twin:teは決済処理の全てを<a href="https://stripe.com/jp">Stripe</a>に委託しております。<br>
      そのため、Twin:teが寄付された方々のクレジットカード情報等を取得・保存することは一切ありません。<br>
      Twin:teが取得できる情報はStripeから提供された情報（メールアドレス・寄付金額など）です。
      メールアドレス等の個人情報の取り扱いについては<a href="https://www.twinte.net/policy/">プライバシーポリシー</a>をご覧ください。
    </p>
    <div class="has-text-centered" style="margin-top:3rem;">
      <b-button to="/register" type="is-primary" tag="nuxt-link" style="width:50%;">
        寄付ページへ
      </b-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style  lang="scss" scoped>
li {
  list-style-position: inside;
  margin: 1rem;
}
p {
  margin-bottom: 1rem;
}
img {
  width: 75%;
  @media (max-width: 560px) {
    width: 100%;
  }
}
</style>
