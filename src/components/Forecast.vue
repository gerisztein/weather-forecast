<template lang="pug">
  .Forecast
    h1.Forecast-title Next 3 days
    .Forecast-container
      ForecastDay(
        v-for="day in forecast"
        :key="day.dt"
        :date="day.dt_txt"
        :description="day.weather[0].description"
        :icon="day.weather[0].icon"
        :maxTemp="day.main.temp_max"
        :minTemp="day.main.temp_min"
        :temp="day.main.temp"
      )
</template>

<script>
import ForecastDay from './ForecastDay'

export default {
  name: 'Forecast',

  components: {
    ForecastDay
  },

  props: {
    forecast: {
      default: () => [],
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="stylus">
.Forecast
  padding 16px

  &-title
    border-bottom 5px solid #efefef
    display inline-block
    margin-bottom 32px
    padding 0 48px 0 12px

  &-container
    display flex
    flex-flow row
</style>
