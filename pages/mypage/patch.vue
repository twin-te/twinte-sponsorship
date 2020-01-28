<template>
  <div>
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
    }
  }
}
</script>

<style scoped>
</style>
