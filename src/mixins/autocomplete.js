// https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service

export const autocomplete = {
  mounted() {
    new window.google.maps.places.Autocomplete(
      document.getElementById('autocomplete')
    )
  }
}
