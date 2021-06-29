<template>
  <div class="center grid" id="user-location">
     <vs-row>
      <vs-col vs-type="flex" justify="center" align="center" w="12">
        <FormLocation />
      </vs-col>
     </vs-row>
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