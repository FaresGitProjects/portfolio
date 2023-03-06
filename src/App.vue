<template>
  <div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <PageHeader /> 
    <router-view/>
  </div>
</template>


<script>
import PageHeader from './components/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
  }
}
</script>


<style >

@media (max-width: 555px) {
  img {
    position: static;
  }
  .pic-bg {
    position: static;
  }
  .pagebody {
    border-color: rgb(140, 140, 232) !important;
  }

  .portfolio-list {
    
    transform: translate(0, 0) !important;
    display: flex !important;
    flex-wrap: wrap;
    position: absolute !important;
    /* flex-direction: column !important; */
    /* justify-content: center !important; */
    width: 100% !important;
    height: fit-content !important;
    margin: 0 auto !important;
    top: 25rem !important;
    left: 0 !important;
    justify-content: space-evenly;
  }

  .portfolio-list > div {
    transform: translate(0, 0) !important;
    flex: 1 1 50% !important;
    flex-basis: 50%;
    box-sizing: border-box;
    max-width: 10rem;
    min-height: 10rem;
    position: relative !important;
    /* border-color: aqua !important; */
    margin-bottom: 12.5px;
  }
  
}
@media (min-height: 700px) {
  .portfolio-list > div {
    bottom: 20vh;
    width: 10vh;
    height: 10vh;
  }
  .msgbox2 {
    display: block;
  }
}
</style>
