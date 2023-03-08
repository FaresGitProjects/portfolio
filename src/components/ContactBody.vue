<template>
  <div
    class="contactbody mt-14 flex h-full flex-col items-center justify-items-center sm:mt-10 sm:flex-row"
  >
    <div
      class="center-container order-1 m-auto mb-10 flex min-w-min flex-col px-10 pb-4 sm:order-2 sm:w-1/3 sm:px-0"
    >
      <div class="about-title">
        <h1 class="text-center text-xl font-bold">Contact Information</h1>
      </div>
      <br />
      <div class="m-auto about-paragraph text-xl">
        <h1 class="mb-3">contact.fares.mohamed@gmail.com</h1>
        <h1 class="mb-3 text-center">(646)207-3988</h1>
        <h1 class="mb-8 text-center">New York, NY</h1>

        <div class="portfolio-list mb-5">
          <div
            class="m-auto h-28 w-28 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-l-teal-600 hover:border-r-teal-600"
            v-on:mouseover="hoverDisplay"
            v-on:mouseleave="leaveExit"
          >
            <a
              class="flex h-full w-full"
              id="linked-id"
              href="https://www.linkedin.com/in/fares-mo/"
              target="_blank"
            >
              <font-awesome-icon
                class="linkedin-icon m-auto h-1/2 w-1/2"
                icon="fa-brands fa-linkedin"
              />
            </a>
          </div>
        </div>
        <div id="mail-id" class="portfolio-list ">
          <div
            class="m-auto h-28 w-28 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-b-teal-600 hover:border-t-teal-600"
            v-on:mouseover="hoverDisplay"
            v-on:mouseleave="leaveExit"
          >
            <a
              class="flex h-full w-full"
              href="mailto:contact.fares.mohamed@gmail.com"
              target="_blank"
            >
              <font-awesome-icon
                class="mail-icon m-auto h-1/2 w-1/2 black"
                icon="fa-envelope"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactBody",
  components: {},
};
</script>

<style scoped>
.linkedin-icon {
  color: #0A66C2
}

</style>