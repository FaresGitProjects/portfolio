<template>
  <div
    class="messagebox text-md absolute z-10 ml-2 min-h-max w-1/4 max-[870px]:hidden"
    :class="justify"
  >
    <h1 class="title mb-4 text-2xl whitespace-nowrap">
      <Transition>
        <span v-if="showHello && firstRender" class="hello font-bold">{{greeting}}.</span>
        <span v-else 
              class="elsehello font-bold"
              :class="{ 'opacity-0': firstRender, 'opacity-1': !firstRender}">{{greeting}}.</span>
      </Transition>
      <Transition>
        <span v-if="showName && firstRender" 
              class="ImFares font-semibold"> {{intro}}.</span>
        <span v-else 
              class="elsename font-semibold"
              :class="{ 'opacity-0': firstRender, 'opacity-1': !firstRender}"> {{intro}}.</span>
      </Transition>
    </h1>

    <Transition>
      <p v-if="showParagraph && firstRender" class="paragraph">
        {{ msg }}
      </p>
      <p v-else 
        class="elsepara"
        :class="{ 'opacity-0': firstRender, 'opacity-1': !firstRender}">
        {{ msg }}
      </p>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    msg: String,
    greeting: String,
    intro: String,
    justify: String,
    animate: Boolean,
  },
  data() {
    return {
      showHello: false,
      showName: false,
      showParagraph: false,
      firstRender: this.animate? !JSON.parse(sessionStorage
                                 .getItem('firstRender')) : false,
      delay: 1000,
    };
  },
  mounted() {
    console.log("shall", this.firstRender)
    if(this.firstRender) {
      setTimeout(() => {
        document.querySelector(".elsehello").style.display = "none";
        this.showHello = true;
      }, this.delay);
      setTimeout(() => {
        document.querySelector(".elsename").style.display = "none";
        this.showName = true;
      }, 3 * this.delay);
      setTimeout(() => {
        document.querySelector(".elsepara").style.display = "none";
        this.showParagraph = true;
      }, 5 * this.delay);
      sessionStorage.setItem('firstRender', this.firstRender)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  border: 1px solid black;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-from {
  opacity: 0;
}

.v-enter-to .v-leave-to {
  opacity: 1;
}
</style>
