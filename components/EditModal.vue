<template>
  <form action="">
    <div class="card" style="width: auto">
      <section class="modal-card-body">
        <h1 class="title">
          ユーザー情報の更新
        </h1>
        <b-button @click="deleteUserInfo" type="is-primary">
          ユーザ情報の削除
        </b-button>
        <b-field label="表示名" custom-class="has-text-primary">
          <b-input v-model="nickname" placeholder="お名前・ユーザーネーム" required rounded />
        </b-field>
        <b-field label="リンク" custom-class="has-text-primary">
          <b-input v-model="link" placeholder="サイトのURL" type="url" rounded />
        </b-field>
        <b-button @click="updateUserInfo" :disabled="isdisabled" type="is-primary" expanded>
          更新する
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
      return /^https?:\/\/.+/.test(this.link) || this.link === ''
    }
  },
  methods: {
    updateUserInfo () {
      this.$emit('edited', this.nickname, this.link)
      this.$parent.close()
    },
    deleteUserInfo () {
      this.$emit('edited', '', '')
      this.$parent.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  border: none;
  padding-left: 0
}
.input {
  border-radius: 1rem
}
</style>
