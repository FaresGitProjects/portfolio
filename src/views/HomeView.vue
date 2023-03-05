<template>
  <div class="homePage">
    <PageBody />
  </div>
</template>

<script>
// @ is an alias to /src
// import PageHeader from '@/components/PageHeader.vue'
import PageBody from '@/components/PageBody.vue'

export default {
  name: 'HomeView',
  components: {
    PageBody
  }
}
</script>
