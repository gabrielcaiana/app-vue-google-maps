export const autocomplete = {
  mounted() {
    new window.google.maps.places.Autocomplete(
      document.getElementById('autocomplete')
    )
  },
}
