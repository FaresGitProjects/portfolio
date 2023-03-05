<template>
  <div class="pagebody flex h-screen">
    <div
      class="pic-bg mx-auto mt-10 md:mt-16 flex flex-wrap h-72 w-72 items-center justify-center rounded-full border-t-gray-300 border-b-gray-300 border-l-gray-900 border-r-gray-900 shadow-3xl"
    >
      <img
        class="h-64 w-64 rounded-full"
        src="@/assets/images/Profile-Pic.jpg"
        alt="Image of Fares"
      />
      <MessageBox class="-translate-x-80 -translate-y-8" />
      
      <div
        class="portfolio-list absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          class="shout-box absolute flex h-28 w-28 -translate-x-52 translate-y-28 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-8 hover:border-l-teal-600 hover:border-t-teal-600"
        >
          <a
            class="flex h-full w-full"
            href="https://github.com/FaresGitProjects/Shout-Box-Chat-App"
            target="_blank"
          >
            <font-awesome-icon
              class="black m-auto h-1/2 w-1/2"
              icon="fa-brands fa-github"
            />
          </a>
        </div>
        <div
          class="bitter absolute flex h-28 w-28 translate-x-52 translate-y-28 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-t-teal-600 hover:border-r-teal-600"
        >
          <font-awesome-icon
            class="m-auto h-1/2 w-1/2 rounded-full text-red-500"
            icon="fa-solid fa-crow"
          />
        </div>
        <div
          class="fakazon absolute h-28 w-28 -translate-x-28 translate-y-52 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-l-teal-600 hover:border-b-teal-600"
        >
          <a href="https://faresgitprojects.github.io/Fakazon/" target="_blank">
            <img
              class="h-full w-full rounded-full"
              src="@/assets/images/Fakazon_arrow.jpg"
            />
          </a>
        </div>
        <div
          class="ratemypartner absolute flex h-28 w-28 translate-x-28 translate-y-52 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-b-teal-600 hover:border-r-teal-600"
        >
          <a
            class="flex h-full w-full"
            href="https://faresgitprojects.github.io/RateMyPartner/"
            target="_blank"
          >
            <font-awesome-icon
              class="m-auto h-1/2 w-1/2 text-red-500"
              icon="fa-solid fa-heart"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageBox from "@/components/MessageBox.vue";

export default {
  name: "PageBody",
  components: {
    MessageBox,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio-list > div {
  border-width: 8px;
}

* {
  /* border: 1px solid blue; */
}
</style>
