<template lang="pug">
  .home
    template(v-if="!isLoading && filteredData")
      CurrentWeather(
        :city="filteredData.city.name"
        :country="filteredData.city.country"
        :description="filteredData.today.weather[0].description"
        :icon="filteredData.today.weather[0].icon"
        :maxTemp="filteredData.today.main.temp_max"
        :minTemp="filteredData.today.main.temp_min"
        :realFeel="filteredData.today.main.feels_like"
        :sunrise="filteredData.city.sunrise"
        :sunset="filteredData.city.sunset"
        :temp="filteredData.today.main.temp"
      )

      Forecast(:forecast="filteredData.list")

    template(v-else)
      h1 Loading...

</template>

<script>
import CurrentWeather from '@/components/CurrentWeather.vue'
import Forecast from '@/components/Forecast.vue'
import { getForecastByCity, getForecastByCoords } from '@/api'
import { filterData } from '@/utils'

export default {
  name: 'Home',

  components: {
    CurrentWeather,
    Forecast
  },

  data () {
    return {
      filteredData: [],
      isLoading: true
    }
  },

  computed: {
    city () {
      return this.$route.query.city || ''
    }
  },

  watch: {
    city: {
      handler () {
        if (this.city.trim()) {
          this.fetchForecastByCity(this.city.toLowerCase())
        } else {
          this.getCoords()
        }
      },
      immediate: true
    }
  },

  methods: {
    fetchForecastByCity (city) {
      this.isLoading = true

      getForecastByCity(city)
        .then(this.handleSuccess)
        .catch(this.handleError)
    },

    fetchForecastByCoords ({ coords }) {
      const { latitude, longitude } = coords
      this.isLoading = true

      getForecastByCoords(latitude, longitude)
        .then(this.handleSuccess)
        .catch(this.handleError)
    },

    getCoords () {
      if (navigator.geolocation && !this.city) {
        navigator.geolocation.getCurrentPosition(this.fetchForecastByCoords)
      }
    },

    handleError (err) {
      console.error('Oops...', err)
      this.isLoading = false
    },

    handleSuccess (data) {
      this.isLoading = false
      this.filteredData = filterData(data)
    }
  }
}
</script>
