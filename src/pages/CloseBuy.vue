<template>
  <div class="ui grid">
    <div class="six wide column red">
      <CardLocation />
    </div>
    <div class="ten wide column blue"></div>
  </div>
</template>

<script>
  export default {
    components: {
      CardLocation: () => import('@/components/CardLocation'),
    }
  }
</script>