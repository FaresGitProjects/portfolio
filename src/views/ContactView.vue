<template>
  <div class="homePage">
    <ContactBody />
  </div>
</template>

<script>
// @ is an alias to /src
// import PageHeader from '@/components/PageHeader.vue'
import ContactBody from '@/components/ContactBody.vue'

export default {
  name: 'ContactView',
  components: {
    ContactBody
  }
}
</script>
