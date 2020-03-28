<template lang="pug">
  .ForecastDay
    h1.ForecastDay-day {{weekday}}
    h2.ForecastDay-description {{description}}
    .ForecastDay-icon
      img(
        :alt="description"
        :src="iconUrl"
      )
    h3.ForecastDay-temperature {{temperature}}
    h4.ForecastDay-range H: {{minTemperature}} | L: {{maxTemperature}}

</template>

<script>
import { formatTemperature, getWeekday } from '@/utils'

export default {
  name: 'Forecast',

  props: {
    date: {
      default: '',
      required: false,
      type: String
    },

    description: {
      default: '',
      required: false,
      type: String
    },

    icon: {
      default: '',
      required: false,
      type: String
    },

    maxTemp: {
      default: 0,
      required: false,
      type: Number
    },

    minTemp: {
      default: 0,
      required: false,
      type: Number
    },

    temp: {
      default: 0,
      required: false,
      type: Number
    }
  },

  data () {
    return {
      iconUrl: `http://openweathermap.org/img/wn/${this.icon}@2x.png`,
      maxTemperature: formatTemperature(this.maxTemp),
      minTemperature: formatTemperature(this.minTemp),
      temperature: formatTemperature(this.temp),
      weekday: getWeekday(this.date)
    }
  }
}
</script>

<style lang="stylus">
.ForecastDay
  background transparent
  padding 32px 0
  text-align center
  transition all .75s ease
  width 33%

  &:not(:last-child)
    border-right 1px dashed #b2b2b2

  &:hover
    background #f2f2f2
    transition all .5s ease

  &-day
    font-size 1.25rem
    margin 0
    text-transform uppercase

  &-description
    color #ccc
    font-size .75rem
    margin 0 0 8px
    text-transform uppercase

  &-temperature
    font-size 2rem
    margin 0 0 8px

  &-range
    color #333
    font-size .75rem
    margin 0 0 8px
    text-transform uppercase
</style>
