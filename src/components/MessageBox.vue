<template>
  <div
    class="messagebox text-md absolute z-10 ml-2 min-h-max w-1/4 max-[870px]:hidden"
  >
    <h1 class="title mb-4 text-2xl font-semibold">
      <Transition>
        <span v-if="showHello" class="hello">Hello.</span>
        <span v-else class="elsehello opacity-0">Hello.</span>
      </Transition>
      <Transition>
        <span v-if="showName" class="ImFares"> I'm Fares.</span>
        <span v-else class="elsename opacity-0"> I'm Fares.</span>
      </Transition>
    </h1>

    <Transition>
        <p v-if="showParagraph" class="paragraph" >
        I'm an aspiring software engineer with a particular interest in web
        development. I've developed several full-stack websites using an array of
        technologies and have accumulated hundreds of hours of experience. Enjoy
        touring my portfolio!
        </p>
        <p v-else class="elsepara opacity-0" >
        I'm an aspiring software engineer with a particular interest in web
        development. I've developed several full-stack websites using an array of
        technologies and have accumulated hundreds of hours of experience. Enjoy
        touring my portfolio!
        </p>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  data() {
    return {
      showHello: false,
      showName: false,
      showParagraph: false,
      delay: 1000,
    };
  },
  mounted() {
    setTimeout(() => {
      document.querySelector('.elsehello').style.display = 'none';
      this.showHello = true;
    }, this.delay);
    setTimeout(() => {
      document.querySelector('.elsename').style.display = 'none';
      this.showName = true;
    }, 3 * this.delay);
    setTimeout(() => {
      document.querySelector('.elsepara').style.display = 'none';
      this.showParagraph = true;
    }, 5 * this.delay);
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
  opacity: .0;
}

.v-enter-to
.v-leave-to {
  opacity: 1;
}
</style>
