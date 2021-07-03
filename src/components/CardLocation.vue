<template>
  <section id="card-location" class="ui two column centered grid">
    <div class="column">
      <form class="ui segment large form">
        <div class="ui message red" v-show="error">{{ error }}</div>
        <div class="ui segment">
          <div class="field">
            <div class="ui right icon input large" :class="{ loading: spinner }">
              <input
                v-model="address"
                type="text"
                placeholder="Enter your address"
                id="autocomplete"
              />
              <i class="dot circle link icon" @click="locatorButtonPressed"></i>
            </div>
          </div>
          <button class="ui button">Go</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import LocationApi from '@/services/api'
import { autocomplete } from '@/mixins/autocomplete'

const api = new LocationApi()

export default {
  data: () => ({
    address: '',
    error: '',
    spinner: false
  }),

  mixins: [autocomplete],

  methods: {
    locatorButtonPressed() {
      this.spinner = true
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            )
          },

          error => {
            this.error = error.message
            this.spinner = false
          }
        )
      } else {
        this.error = 'Your browser does not support geolocation API'
        this.spinner = false
      }
    },

    async getAddressFrom(lat, long) {
      try {
        const response = await api.get(lat, long)
        if (response.status === 200 && response.data.results.length > 0) {
          this.address = response.data.results[0].formatted_address
          this.spinner = false
        } else {
          this.error = response.data.error_message
          this.spinner = false
        }
      } catch (err) {
        this.error = err
        this.spinner = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#card-location {
  z-index: 1;
  position: relative;
  top: 1rem;
}

.ui.button,
.dot.circle.icon {
  background-color: #ff5a5f;
  color: white;
}
</style>
