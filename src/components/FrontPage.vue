<template>
  <div>
    <div class="title__pre">
      Hello my name is:
    </div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data () {
    return {
      name: 'Bjørn Nyborg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
