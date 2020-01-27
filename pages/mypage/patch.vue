<template>
  <div>
    <b-field label="Name">
      <b-input v-model="name" placeholder="NAME" />
    </b-field>
    <b-field label="link">
      <b-input placeholder="URL" type="url" />
    </b-field>
    <b-button @click="clickMe">
      更新
    </b-button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
