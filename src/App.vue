<template lang="pug">
  #app
    Navigation

    router-view
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',

  components: {
    Navigation
  }
}
</script>
<style lang="stylus">
html, body
  margin 0
  padding 0

#app
  color #2c3e50
  display grid
  font-family Avenir, Helvetica, Arial, sans-serif
  grid-column-gap 5vw
  grid-template-columns 250px auto
  max-width 1024px
  min-height 100vh
  text-align left
</style>
