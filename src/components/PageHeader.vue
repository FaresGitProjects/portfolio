<template>
  <div class="pageheader p-1
  flex 
  font-bold
  text-xl
  text-blue-900
  text-center
  drop-shadow-md

  border-b-2
  border-solid
  border-l-gray-300 
  border-r-gray-300
  border-b-zinc-400
  shadow-md
  pb-3
  ">
    <h1 id="home" class="home home-active grow text-right hover:cursor-pointer"
        v-on:click="toggleActive" >
      <span class='btn z-10' >Home</span>
    </h1>
    <h1 id="about" class="about grow hover:cursor-pointer"
        v-on:click="toggleActive">
      <span class='btn'>About Me</span>
    </h1>
    <h1 id="contact" class="contact grow text-left hover:cursor-pointer"
        v-on:click="toggleActive">
      <span class='btn'>Contact</span>
    </h1>
  </div>
</template>


<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      activePage: 'home'
    }
  },
  methods: {
    toggleActive(e) {
      const activeElement = document.getElementById(this.activePage)
      const activeClass = this.activePage + "-active";
      activeElement.classList.remove(activeClass);
      const newActiveClass = e.currentTarget.id + "-active";
      e.currentTarget.classList.add(newActiveClass);
      this.activePage = e.currentTarget.id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.home {
    background: linear-gradient(to right, rgb(245, 245, 245) 50%, rgb(13, 148, 136) 90%);
    background-size: 200% 100%;
    background-position: left;
    transition: all .3s ease;
    padding-right: 10px;
}
.home:hover, .home-active{
    background-position: right;
    color: rgb(255, 255, 255);
}
.contact {
    background: linear-gradient(to left, rgb(245, 245, 245) 50%, rgb(13, 148, 136) 90%);
    background-size: 200% 100%;
    background-position: right;
    transition: all .3s ease;
    padding-left: 10px;
}
.contact:hover, .contact-active {
    background-position: left;
    color: rgb(255, 255, 255);
}
.about {
    background: linear-gradient(to bottom, rgb(245, 245, 245) 50%, rgb(13, 148, 136) 90%);
    background-size: 100% 200%;
    margin: 0 10px;
    transition:all .3s ease;
}
.about:hover, .about-active {
    background-position: bottom;
    color: rgb(255, 255, 255);
}
.pageheader > h1 {
    border-radius: 16px;
    border: 1.75px solid rgb(179, 178, 178);
}

</style>












<!-- .pageheader > h1 {
    background: linear-gradient(to right, rgb(245, 245, 245) 50%, blue 60%);
    background-size: 200% 100%;
    background-position: left;
    margin-left:10px;
    transition:all .6s ease;
}
.pageheader > h1:hover {
    background-position: right;
    color: red;
} -->


<!-- h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 -->


<!-- .hello {
  border: solid black 3px;
} -->







    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->