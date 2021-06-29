<template>
  <div>
    <FormLocation />
  </div>
</template>

<script>
  export default {
    components: {
      FormLocation:() => import('@/components/FormLocation')
    }
  }
</script>

<style lang="scss" scoped>
  #user-location {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>