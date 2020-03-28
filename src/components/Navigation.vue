<template lang="pug">
  nav.Navigation
    input.Navigation-search(
      v-model="query"
      list="cities"
      placeholder="Type a city name"
      type="text"
      size="32"
    )

    datalist#cities
      option(
        v-for="city in cities"
        :key="city.id"
        v-text="city.label"
      )

    .Navigation-list
      h1 Cities

      ul(v-if="cityList.length")
        li
          router-link(to="/") Current location
        li(
          v-for="(city, index) in cityList"
          :key="city.id"
        )
          router-link(
            :to="{ name: 'Home', query: { city: city.label }}"
            v-text="city.label"
          )

      p(v-else) No cities found.
</template>

<script>
import cities from '@/utils/mock.json'
export default {
  name: 'Navigation',

  data () {
    return {
      cities,
      query: ''
    }
  },

  computed: {
    cityList () {
      return this.query.trim()
        ? this.cities.filter(({ label }) => label === this.query)
        : this.cities
    }
  },

  methods: {
    clearInput () {
      this.query = ''
    }
  }
}
</script>

<style lang="stylus">
.Navigation
  box-shadow 0 0 10px #b2b2b2
  padding 32px 16px

  &-search
    border 1px solid #ccc
    border-radius 4px
    margin 0 0 16px
    padding 8px 16px

  &-list
    h1
      border-bottom 10px solid #efefef
      display inline-block
      font-size 2rem
      margin-bottom 32px
      padding 0 24px 0 6px

    ul
      list-style none
      margin 0
      padding 0
      text-align left

    li
      cursor pointer
      padding 0 0 4px 12px

      a
        &:link, &:visited
          color #55198b
          text-decoration none
          transition all .5s ease

        &:hover
          color #c2c2c2
          transition all .5s ease

        &.router-link-exact-active
          font-weight 900
</style>
