<template>
  <div
    class="pageheader flex border-b-2 border-solid border-l-gray-300 border-r-gray-300 border-b-zinc-400 p-1 pb-3 text-center text-xl font-bold text-blue-900 shadow-md drop-shadow-md"
  >
    <router-link
      to="/"
      id="home"
      class="btn home grow text-right hover:cursor-pointer"
      v-bind:class="{ 'home-active': activePage === 'home' }"
    >
      <h1>Home</h1>
    </router-link>

    <router-link
      to="/about"
      id="about"
      class="btn about grow hover:cursor-pointer"
      v-bind:class="{ 'about-active': activePage === 'about' }"
    >
      <h1>About Me</h1>
    </router-link>

    <router-link
      to="/contact"
      id="contact"
      class="btn contact grow text-left hover:cursor-pointer"
      v-bind:class="{ 'contact-active': activePage === 'contact' }"
    >
      <h1>Contact</h1>
    </router-link>
  </div>
</template>

<script>
import { store } from "@/main.js";

export default {
  name: "PageHeader",
  data() {
    return {
      // activePage: store.getters.getActivePage,
    };
  },
  // created() {
  //   console.log("activePage:", this.activePage)
  // },
  computed: {
    activePage() {
      console.log("Computed:", this.activePage);
      return store.getters.getActivePage;
    },
  },
  methods: {
    // updatePage() {
    //   this.$store.commit('updatePage')
    //   console.log("store updated")
    // }
  },
  // toggleActive(e) {
  //   const currentId = e.currentTarget.id;
  //   if (currentId !== this.activePage) {
  //     const activeElement = document.getElementById(this.activePage);
  //     const activeClass = this.activePage + "-active";
  //     activeElement.classList.remove(activeClass);
  //     const newActiveClass = currentId + "-active";
  //     e.currentTarget.classList.add(newActiveClass);
  //     this.activePage = currentId;
  //   }
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  background: linear-gradient(
    to right,
    rgb(245, 245, 245) 50%,
    rgb(13, 148, 136) 90%
  );
  background-size: 200% 100%;
  background-position: left;
  transition: all 0.3s ease;
  padding-right: 10px;
}
.home:hover,
.home-active {
  background-position: right;
  color: rgb(255, 255, 255);
}
.contact {
  background: linear-gradient(
    to left,
    rgb(245, 245, 245) 50%,
    rgb(13, 148, 136) 90%
  );
  background-size: 200% 100%;
  background-position: right;
  transition: all 0.3s ease;
  padding-left: 10px;
}
.contact:hover,
.contact-active {
  background-position: left;
  color: rgb(255, 255, 255);
}
.about {
  background: linear-gradient(
    to bottom,
    rgb(245, 245, 245) 50%,
    rgb(13, 148, 136) 90%
  );
  background-size: 100% 200%;
  margin: 0 10px;
  transition: all 0.3s ease;
}
.about:hover,
.about-active {
  background-position: bottom;
  color: rgb(255, 255, 255);
}
.pageheader > .btn {
  border-radius: 16px;
  border: 1.75px solid rgb(179, 178, 178);
}
</style>
