<template>
    <div>
      <CardLocation />
      <Map />
    </div>
</template>

<script>
  export default {
    components: {
      CardLocation:() => import('@/components/CardLocation'),
      Map:() => import('@/components/Map')
    }
  }
</script>