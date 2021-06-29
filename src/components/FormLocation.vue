<template>
  <section class="ui two column centered grid">
    <div class="column">
      <form class="ui segment large form">
        <div class="ui message red" v-if="error">{{ error }}</div>
        <div class="ui segment">
          <div class="field">
            <div class="ui right icon input large">
              <input
                v-model="address"
                type="text"
                placeholder="Enter your address"
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

const api = new LocationApi()

export default {
  data: () => ({
    address: '',
    error: '',
  }),
  methods: {
    locatorButtonPressed() {
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
          }
        )
      } else {
        this.error = 'Your browser does not support geolocation API'
      }
    },

    async getAddressFrom(lat, long) {
      try {
        const response = await api.get(lat, long)
        if (response.status === 200 && response.data.results.length > 0) {
          this.address = response.data.results[0].formatted_address
        } else {
          this.error = response.data.error_message
        }
      } catch (err) {
        this.error = err
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ui.button,
.dot.circle.icon {
  background-color: #ff5a5f;
  color: white;
}
</style>
