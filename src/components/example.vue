<template>
    <section class="main">
        <h1>Hello Vue!!!</h1>
        <p>{{message}}</p>
    </section>
</template>

<script>
  export default {
    name: "example",
    data () {
      return {
        message: null
      }
    },
    created() {
      this.message = `It's vue-app`
    }
  }
</script>

<style lang="stylus" scoped>

</style>