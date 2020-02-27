<template>
  <form action="">
    <div class="card" style="width: auto">
      <section class="modal-card-body">
        <h1 class="title">
          登録情報の変更
        </h1>
        <b-field label="お名前">
          <b-input v-model="nickname" placeholder="お名前・ユーザーネーム" required />
        </b-field>
        <b-field label="リンク">
          <b-input v-model="link" placeholder="サイトのURL" type="url" required />
        </b-field>
        <b-button @click="updateUserInfo" :disabled="isdisabled" type="is-primary" expanded>
          更新
        </b-button>
      </section>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      nickname: '',
      link: ''
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
  methods: {
    updateUserInfo () {
      this.$emit('edited', this.nickname, this.link)
      this.$parent.close()
    }
  }
}
</script>
