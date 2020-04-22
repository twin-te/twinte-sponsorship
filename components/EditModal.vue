<template>
  <form action="">
    <div class="card" style="width: auto">
      <section class="modal-card-body">
        <h1 class="title">
          ユーザー情報の編集
        </h1>
        <b-field label="表示名" custom-class="has-text-primary">
          <b-input v-model="nickname" placeholder="お名前・ユーザーネーム" required rounded />
        </b-field>
        <b-field label="リンク" custom-class="has-text-primary">
          <b-input v-model="link" placeholder="サイトのURL" type="url" rounded />
        </b-field>
        <div class="buttons">
          <b-button @click="deleteUserInfo" type="is-danger">
            ユーザ情報の削除
          </b-button>
          <b-button @click="updateUserInfo" :disabled="isdisabled" type="is-primary">
            更新する
          </b-button>
        </div>
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
      // this.linkは空文字のままこの関数が呼び出されることがある
      const inputUrl = this.link === '' ? null : this.link
      this.$emit('edited', this.nickname, inputUrl)
      this.$parent.close()
    },
    deleteUserInfo () {
      this.$swal({
        text: 'ユーザー情報を削除しますか？',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'はい',
        cancelButtonText: 'いいえ'
      }).then(() => {
        this.$emit('edited', null, null)
        this.$parent.close()
      })
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
