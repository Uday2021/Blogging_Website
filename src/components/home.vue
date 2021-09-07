<template>
<div>
<navbar />
<banner />
<container />
<footers />
</div>
</template>

<script>
import navbar from './navbar.vue'
import banner from './banner.vue'
import container from './container.vue'
import footers from './footer.vue'
export default {
  components:{
    navbar,
    banner,
    container,
    footers
  },
  
};
</script>

<style scoped>


</style>
