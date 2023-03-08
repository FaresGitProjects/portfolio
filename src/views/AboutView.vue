<template>
  <div class="aboutPage">
    <AboutBody />
  </div>
</template>

<script>
// @ is an alias to /src
// import PageHeader from '@/components/PageHeader.vue'
import AboutBody from '@/components/AboutBody.vue'

export default {
  name: 'AboutView',
  components: {
    AboutBody
  }
}
</script>

<style scoped>



/* .aboutPage {
  height: 100%;
  border: black 5px solid;
} */

</style>