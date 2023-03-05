<template>
  <PageHeader msg="Welcome to Your Vue.js App" />
  <PageBody />
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageBody from './components/PageBody.vue'
import './index.css'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageBody
  }
}
</script>

<style>
/* 
* {
  border: 3px solid black;
} */
@media (max-width: 555px) {
    * {
      position: static !important;
      transform: translateX(0) !important;
      transform: translateY(0) !important;
      /* border-radius: 1% !important; */
    }
    body {
      overflow-y: scroll !important;
    }
    .portfolio-list {
      margin: 50px 0 ;
      display: flex ;
      flex-wrap: wrap;
      height: fit-content;
      width: fit-content ;
      /* border: black 2px solid !important; */
      flex-direction: row !important;
      justify-content: space-around;
      align-content: space-around;
    }
    .portfolio-list > div {
      margin: 10px 0 !important;
    }
    .pic-bg {
      display: flex;
      align-items: center;
      
    }
    .pic-bg > img {
      margin: 15px !important;
    }
    
}

body {
  overflow-y:hidden;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
