<template>
  <div
    class="aboutbody mt-14 flex h-full flex-col items-center justify-items-center sm:mt-10 sm:flex-row"
  >
    <!-- React.js, Vue.js 
         Tailwind  MySQL
          -->
    <!-- C#, C++
         Java Python
          -->
    <div
      class="left-container order-2 flex h-full flex-wrap justify-center sm:order-1 sm:mb-10 sm:w-1/3 sm:gap-y-10"
    >
      <div class="skill react basis-1/2">
      <div class="skill-container m-auto flex h-28 w-28 items-center justify-center">
        <img
          class="m-auto h-20 w-20"
          src="@/assets/images/react.png"
          alt="react icon"
        />
      </div>
      </div>
      <div class="skill vue basis-1/2">
      <div class="skill-container m-auto flex h-28 w-28 items-center justify-center">
        <img
          class="m-auto h-16 w-16"
          src="@/assets/images/vue.png"
          alt="vue icon"
        />
      </div>
      </div>
      <div class="skill tailwind basis-1/2">
      <div class="skill-container m-auto flex h-28 w-28 items-center justify-center">
        <img
          class="h-16 w-20"
          src="@/assets/images/tailwind.png"
          alt="tailwind icon"
        />
      </div>
      </div>
      <div class="skill mysql basis-1/2">
      <div class="skill-container m-auto flex h-28 w-28 items-center justify-center">
        <img
          class="h-16 w-16"
          src="@/assets/images/mysql.png"
          alt="mysql icon"
        />
      </div>
      </div>
    </div>

    <div
      class="center-container order-1 flex min-w-min flex-col px-10 sm:px-2 pb-4 mb-10 sm:order-2 sm:w-1/3"
    >
      <div class="about-title">
        <h1 class="text-center font-bold text-xl">Insightful Innovator, <br> Lifelong Learner.</h1>
      </div>
      <br>
      <div class="about-paragraph text-sm">
        <p class="indent-5 mb-3">
          As a dynamic and innovative Computer Science graduate from the University at Buffalo, 
          I am passionate about using my skills to solve complex problems and drive meaningful change.
          I'm an avid and voracious learner with an unrelenting passion for 
          innovation and problem-solving. To me, problems and puzzles are the 
          canvas onto which I can channel my creative and intellectual needs.
          Like an athlete who seeks both career and cope through their exertions, 
          thinking and creativity are my exercises of the mind, that lend
          me everything from my career prospects, to my place of solitude.
        </p>
        <p class="indent-5 mb-3">Through academic coursework, personal projects and commercial endeavors I've
          accumulated years of valuable experience that have prepared me to take on the
          evolving and ever-changing technology industry.
        </p>
        <p class="indent-5">
          On the left, are my core web development skills. On the right are my top 4 programming languages,
          all of which I've been using since high school!
        </p>
      </div>
    </div>

    <div
      class="right-container order-3 flex h-full flex-wrap justify-center sm:order-3 sm:mb-10 sm:w-1/3 sm:gap-y-10"
    >
      <div class="skill cs basis-1/2">
        <div class="skill-container m-auto flex h-28 w-28 items-center justify-center">
          <img class="h-20 w-20" src="@/assets/images/cs.png" alt="C# icon" />
        </div>
      </div>
      <div class="skill cpp basis-1/2">
      <div class="skill-container m-auto flex h-28 w-28 items-center justify-center">
        <img
          class="h-20 w-20"
          src="@/assets/images/cpp.png"
          alt="C++ icon"
        />
      </div>
      </div>
      <div class="skill java basis-1/2">
      <div class="skill-container m-auto flex h-28 w-28 items-center justify-center">
        <img
          class="h-16 w-16"
          src="@/assets/images/java.png"
          alt="java icon"
        />
      </div>
      </div>
      <div class="skill python basis-1/2">
      <div class="skill-container m-auto flex h-28 w-28 items-center justify-center">
        <img
          class="h-16 w-16"
          src="@/assets/images/python.png"
          alt="python icon"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBody",
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* * {
  border: 2px solid blue;
}

.aboutbody {
  border: 2px solid red;
}
.center-container {
  border: 2px solid orange;
}
.left-container {
  border-color: green;
} */

.skill-container {
  border: 8px rgb(209, 213, 219) solid;
  border-radius: 100%;
  margin-bottom: 1.25rem;
}

.react > .skill-container,
.vue   > .skill-container,
.tailwind > .skill-container,
.mysql > .skill-container,
.python > .skill-container,
.cs > .skill-container,
.java> .skill-container,
.cpp > .skill-container
{
  cursor: pointer;
  transition: all .3s ease-in;
}

.react > .skill-container:hover,
.vue   > .skill-container:hover,
.tailwind > .skill-container:hover,
.mysql > .skill-container:hover,
.python > .skill-container:hover,
.cs > .skill-container:hover,
.java> .skill-container:hover,
.cpp > .skill-container:hover
{
  transition: all ease-out reverse;
}
.vue   > .skill-container:hover {
  transform: rotate(-45deg);
  border-bottom-color: rgb(78, 190, 115);
  border-top-color: rgb(81, 84, 116);
}
.react > .skill-container:hover {
  transform: rotate(45deg);
  border-color: #61DAFC;
}
.tailwind   > .skill-container:hover {
  transform: rotate(-20deg);
  border-top-color: #18B9B9;
  border-bottom-color: #18B9B9;
}
.mysql > .skill-container:hover {
  border-right-color: #F8981C;
  border-left-color: #5b889b;
  transform: rotate(-60deg);
}
.cs   > .skill-container:hover {
  border-bottom-color: #671f7a;
  border-left-color: #953DAC;
  border-top-color: #953DAC;
  border-right-color: #822A98;
  transform: rotate(90deg);
}
.cpp > .skill-container:hover {
  
  border-color: #0080cd;
  border-bottom-color: #00549e;
  transform: rotate(720deg);
}
.java  > .skill-container:hover {
  border-top-color: #FC653A;
  
  border-bottom-color: #2F6DB7;
  transform: rotate(70deg);
}
.python > .skill-container:hover {
  transform: rotate(-30deg);
  border-bottom-color: #FFD342;
  border-right-color: #FFD342;
  border-top-color: #3773A5;
  border-left-color: #3773A5;
}

.fade-out {
  animation: fade-out-away .2s ease-in-out;
}
@keyframes fade-out-away {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(.8);
    transform: translateY(-5%);
  }
}



</style>
