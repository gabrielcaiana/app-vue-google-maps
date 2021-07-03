// https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service

export const autocomplete = {
  mounted() {
    let autocomplete = new window.google.maps.places.Autocomplete(
      this.$refs['autocomplete']
    )

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace()

      this.$emit('latLng', {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      })
    })
  },
}
