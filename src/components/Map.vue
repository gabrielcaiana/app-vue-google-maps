<template>
  <section id="map"> {{ location }}</section>
</template>

<script>
export default {
  props: {
   location: Object
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
  background: red;
}
</style>
