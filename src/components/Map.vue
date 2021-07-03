<template>
  <section id="map"></section>
</template>

<script>
export default {
  props: {
    location: Object,
  },

  watch: {
    location: function(val, old) {
      if (val !== old) {
        this.showUserLocationOnTheMap(val)
      }
    },
  },

  methods: {
    showUserLocationOnTheMap(location) {
      let map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new window.google.maps.LatLng(location.lat, location.lng),
      })

      new window.google.maps.Marker({
        position: new window.google.maps.LatLng(location.lat, location.lng),
        map: map,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #cecece;
}
</style>
