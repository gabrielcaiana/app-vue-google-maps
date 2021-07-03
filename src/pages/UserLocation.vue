<template>
  <div>
    <CardLocation @latLng="getLatLng($event)" />
    <Map :location="location" />
  </div>
</template>

<script>
export default {
  components: {
    CardLocation: () => import('@/components/CardLocation'),
    Map: () => import('@/components/Map'),
  },

  data: () => ({
    location: null,
  }),

  methods: {
    getLatLng(event) {
      this.location = event
    },
  },
}
</script>
