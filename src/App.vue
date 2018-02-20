<template>
  <div id="app">
    <button class="nav__toggle" type="button">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  $color-primary: red;

  .nav {
    &__toggle {
      position: fixed;
      top: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border: 1px solid $color-primary;
      background: none;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
