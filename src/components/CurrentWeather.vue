<template lang="pug">
  .CurrentWeather
    h1.CurrentWeather-title Now

    .CurrentWeather-details
      .CurrentWeather-icon
        img(
          :alt="description"
          :src="iconUrl"
        )
      .CurrentWeather-info
        .CurrentWeather-location(v-text="location")
        .CurrentWeather-description(v-text="description")
        .CurrentWeather-temperature(v-text="temperature")
        .CurrentWeather-feel feels like {{realFeelTemperature}}
        .CurrentWeather-max H: {{maxTemperature}} L: {{minTemperature}}
</template>

<script>
import { formatTemperature, getIconUrl } from '@/utils'

export default {
  name: 'CurrentWeather',

  props: {
    city: {
      default: '',
      required: false,
      type: String
    },

    country: {
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

    realFeel: {
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
      iconUrl: getIconUrl(this.icon),
      realFeelTemperature: formatTemperature(this.realFeel),
      location: `${this.city}, ${this.country}`,
      maxTemperature: formatTemperature(this.minTemp),
      minTemperature: formatTemperature(this.maxTemp),
      temperature: formatTemperature(this.temp)
    }
  }
}
</script>

<style lang="stylus">
.CurrentWeather
  margin-bottom 32px
  padding 16px

  &-title
    border-bottom 5px solid #efefef
    display inline-block
    font-size 2rem
    margin-bottom 32px
    padding 0 48px 0 12px

  &-details
    align-items top
    display flex

  &-info
    margin-left 32px

  &-description
    font-size: .75rem
    margin-bottom 8px
    text-transform uppercase

  &-location
    font-size 1.5rem

  &-temperature
    font-size 2rem
    font-weight 900
    margin-bottom 8px
</style>
