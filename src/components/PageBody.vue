<template>
  <div class="pagebody flex">
    <div
      class="pic-bg 
      mx-auto mt-10 
      flex h-72 w-72 
      flex-wrap 
      items-center 
      justify-center 
      rounded-full
      border-t-gray-300
      border-b-gray-300
      border-l-gray-900 
      border-r-gray-900 
      shadow-3xl md:mt-16"
    >
      <img
        class="h-64 w-64 rounded-full"
        src="@/assets/images/Profile-Pic.jpg"
        alt="Image of Fares"
      />
      <MessageBox
        :msg="msg"
        :greeting="greeting"
        :intro="intro"
        :animate="true"
        class="-translate-x-80 -translate-y-8"
      />

      <MessageBox
        :msg="data.msg2"
        :greeting="data.greeting2"
        :intro="data.intro2"
        :justify="'text-right'"
        class="msgbox2 translate-x-80 translate-y-8"
      />

      <div
        class="portfolio-list absolute pt-24 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          class="github absolute flex h-28 w-28 -translate-x-52 translate-y-28 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-8 hover:border-l-teal-600 hover:border-t-teal-600"
          v-on:mouseover="hoverDisplay"
          v-on:mouseleave="leaveExit"
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
          v-on:mouseover="hoverDisplay"
          v-on:mouseleave="leaveExit"
          class="bitter absolute flex h-28 w-28 translate-x-52 translate-y-28 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-t-teal-600 hover:border-r-teal-600"
        >
          <font-awesome-icon
            class="m-auto h-1/2 w-1/2 rounded-full text-red-500"
            icon="fa-solid fa-crow"
          />
        </div>
        <div
          class="fakazon absolute h-28 w-28 -translate-x-28 translate-y-52 cursor-pointer rounded-full border-gray-300 duration-150 ease-out hover:border-l-teal-600 hover:border-b-teal-600"
          v-on:mouseover="hoverDisplay"
          v-on:mouseleave="leaveExit"
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
          v-on:mouseover="hoverDisplay"
          v-on:mouseleave="leaveExit"
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
  data() {
    return {
      greeting: "Hello",
      intro: " I'm Fares",
      msg: " Welcome to my personal website. I'm an aspiring software \
      engineer with an avid interest in web development. Here, I showcase thousands\
        of hours of software development expreience across academic coursework,\
        personal projects and ongoing commercial endeavors. Enjoy the tour!",
      delay: 1000,

      data: {},

      Bitter: {
        greeting2: "Bitter",
        intro2: " A Bad Twitter",
        msg2: "A parody of the soon-to-be defunct circus of\
        chaos that is the Twitter platform. Bitter invites you\
        to divulge, spew and cough up whatever maddening thoughts\
        are swirling to the surface of your mind! Let the world in \
        on the volcanic festivity that is your thoughts and impulses!",
      },
      RateMyPartner: {
        greeting2: "RateMyPartner",
        intro2: " Indexing Love",
        msg2: "What started out as a parody turned aspirational commercial \
        goal. RateMyPartner (RMP), is a lofty goal inspired by RateMyProfessor.\
        Essentially, it seeks to be a semi-comical social media site whereby lovers\
        can \"rate\" their partners by commenting on the progress made in their relationship.\
        The ultimate objective being to improve relationship quality by sharing experiences.\
        "
      },
      Fakazon: {
        greeting2: "Fake Amazon",
        intro2: " Humble Origins",
        msg2: "One of the first projects I've ever made. It's a rather intersting \
        mimic as it features fully functional financial payments, shopping cart tracking \
        and database management. The site is powered by React.js and firebase. ",
      },
      Github: {
        greeting2: "GitHub",
        intro2: " The Entire History of Me",
        msg2: 'My GitHub features additonal websites and plenty of non-web-dev programming\
        feats. There\'s a bit going on there, but it mainly demonstrates my adeptness in\
        my core tech stack, C#, C++, Java, Python and MySQL. Some notable projects are \
        Shout-Box, Malloc, C# server-side code and CLAT. For better insight into my web \
        development abilities, see my "about" page!',
      },
      activeList: {},
      activeElement: {},
    };
  },
  methods: {
    hoverDisplay(e) {
      var msgbox2 = document.querySelector(".msgbox2");
      var boxList = msgbox2.classList;
      var hoverList = e.currentTarget.classList;

      // console.log("Hover-e", e.currentTarget);
      // console.log("Hover-msg", msgbox2);

      this.activeList = boxList;
      if (hoverList.contains("bitter")) {
        this.data = this.Bitter;
        boxList.add("show");
      } else if (hoverList.contains("github")) {
        this.data = this.Github;
        boxList.add("show");
      } else if (hoverList.contains("fakazon")) {
        this.data = this.Fakazon;
        boxList.add("show");
      } else if (hoverList.contains("ratemypartner")) {
        this.data = this.RateMyPartner;
        boxList.add("show");
      }
    },
    leaveExit() {
      this.activeList.add("hide");
      this.activeList.remove("hide");
      this.activeList.remove("show");
      this.activeList = {};
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   >
.msgbox2 {
  opacity: 0;
  transform: translateY(1rem) translateX(20rem);
  transition: all .5s ease-out;
}
.msgbox2.show {
  transform: translateY(-2rem) translateX(20rem);
  opacity: 1;
  transition: transform .5s ease-out;
}
.msgbox2.hide {
  transform: translateY(-0rem) translateX(20rem);
  opacity: 0;
  transition: all .3s ease-out;
}
.portfolio-list > div {
  border-width: 8px;
}

.fade-left {
  animation: fade-out-left .3s ease-in-out;
}
@keyframes fade-out-left {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateX(-5%);
  }
}
</style>
