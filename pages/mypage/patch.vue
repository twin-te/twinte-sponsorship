<template>
  <div>
    <b-field label="Name">
      <b-input v-model="nickname" placeholder="NAME" />
    </b-field>
    <b-field label="link">
      <b-input v-model="link" placeholder="URL" type="url" />
    </b-field>
    <b-button @click="updateUserInfo()">
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
  methods: {
    updateUserInfo () {
      this.$axios.patch('/payment/users/me', {
        nickname: this.nickname,
        link: this.link
      }, {
        withCredentials: true
      }
      ).then(alert('正常に更新できました。'))
        .then(this.$router.push('/'))
    }
  }
}
</script>

<style scoped>
</style>
