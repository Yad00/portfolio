<template>
  <section
    :class="`py-[60px] flex flex-col transition-opacity px-0 my-0 mx-auto max-w-[1000px] min-[480px]:py-[80px] md:py-[100px] ${
      shown ? 'animate-fadeIn animate-goUp' : 'opacity-0'
    }`"
    id="projects"
    ref="scrollRef"
  >
    <h2
      class="flex items-center relative mt-[10px] mb-10 mx-0 w-full text-[clamp(26px,_5vw,_32px)] whitespace-nowrap font-semibold text-[#ccd6f6] leading-[1.1] font-sans after:content-[''] after:block after:relative after:-top-[1px] after:ml-[10px] after:h-[1px] after:bg-[#233554] after:w-full after:sm:ml-5 after:md:w-[200px] after:lg:w-[300px]"
    >
      My Projects
    </h2>
    <ul
      class="list-none p-0 mt-[50px] mb-0 mx-0 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[15px] relative max-[1080px]:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
    >
      <li
        class="relative cursor-default duration-300 ease-in-out group hover:-translate-y-2"
      >
        <div
          class="flex justify-between flex-col items-start relative h-full py-8 px-7 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] bg-[#112240] overflow-auto"
        >
          <header>
            <div class="flex justify-between items-center mb-[35px]">
              <div>
                <span class="material-icons text-[#64ffda] text-4xl"
                  >source</span
                >
              </div>
              <div class="flex items-center mr-[-10px]">
                <a
                  href="https://github.com/Yad00/PicturePlate-Front"
                  target="_blank"
                  class="flex justify-center items-center py-[5px] px-[7px] relative z-[1]"
                >
                  <svg
                    fill="#a8b2d1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 72 72"
                    class="w-8 h-8 transition duration-150 ease-in hover:fill-[#94ffed]"
                  >
                    <path
                      d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"
                    />
                    github
                  </svg>
                </a>
              </div>
            </div>
            <h3
              class="mx-0 mt-0 mb-[10px] font-semibold leading-[1.1] text-[22px] text-[#ccd6f6]"
            >
              <a
                href="https://github.com/Yad00/PicturePlate-Front"
                target="_blank"
                class="static inline-block no-underline cursor-pointer text-inherit duration-150 ease-in group-hover:text-[#64ffda] before:content-[''] before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0"
                >PicturePlate
              </a>
            </h3>
            <div class="text-[#a8b2d1] text-[17px]">
              <p class="m-0">
                A single page web app that utilizes advanced artificial
                intelligence algorithms to generate visually enticing and
                appetizing images that represent various cooking recipes
              </p>
            </div>
          </header>
          <footer>
            <ul
              class="flex items-end flex-wrap p-0 mt-5 mb-0 mx-0 list-none text-[#8892b0]"
            >
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">
                React.Js
              </li>
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">
                Node.Js
              </li>
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">
                Tailwind CSS
              </li>
            </ul>
          </footer>
        </div>
      </li>
      <li
        class="relative cursor-default duration-300 ease-in-out group hover:-translate-y-2"
      >
        <div
          class="flex justify-between flex-col items-start relative h-full py-8 px-7 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] bg-[#112240] overflow-auto"
        >
          <header>
            <div class="flex justify-between items-center mb-[35px]">
              <div>
                <span class="material-icons text-[#64ffda] text-4xl"
                  >source</span
                >
              </div>
              <div class="flex items-center mr-[-10px]">
                <div
                  class="flex justify-center items-center py-[5px] px-[7px] relative z-[1]"
                >
                  <span
                    class="border border-solid border-[#8892b0] rounded-3xl inline-block py-0 px-2 text-[#8892b0] text-sm duration-150 ease-in hover:text-red-400 hover:border-red-400 font-sans"
                    >Private
                  </span>
                </div>
              </div>
            </div>
            <h3
              class="mx-0 mt-0 mb-[10px] font-semibold leading-[1.1] text-[22px] text-[#ccd6f6]"
            >
              <span
                class="static inline-block no-underline cursor-pointer text-inherit duration-150 ease-in group-hover:text-[#64ffda] before:content-[''] before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0"
                >Accounting management app / Asty
              </span>
            </h3>
            <div class="text-[#a8b2d1] text-[17px]">
              <p class="m-0">
                Software that offers a comprehensive suite of features,
                including invoicing, expense tracking, and financial reporting.
                Made to efficiently manage financial operations in one
                centralized platform.
              </p>
            </div>
          </header>
          <footer>
            <ul
              class="flex items-end flex-wrap p-0 mt-5 mb-0 mx-0 list-none text-[#8892b0]"
            >
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">
                React.Js
              </li>
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">
                Node.Js
              </li>
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">
                MongoDB
              </li>
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">
                Tailwind CSS
              </li>
            </ul>
          </footer>
        </div>
      </li>
      <li
        class="relative cursor-default duration-300 ease-in-out group hover:-translate-y-2"
      >
        <div
          class="flex justify-between flex-col items-start relative h-full py-8 px-7 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] bg-[#112240] overflow-auto"
        >
          <header>
            <div class="flex justify-between items-center mb-[35px]">
              <div>
                <span class="material-icons text-[#64ffda] text-4xl"
                  >source</span
                >
              </div>
              <div class="flex items-center mr-[-10px]">
                <a
                  href="https://github.com/Yad00/portfolio"
                  target="_blank"
                  class="flex justify-center items-center py-[5px] px-[7px] relative z-[1]"
                >
                  <svg
                    fill="#a8b2d1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 72 72"
                    class="w-8 h-8 transition duration-150 ease-in hover:fill-[#94ffed]"
                  >
                    <path
                      d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"
                    />
                    github
                  </svg>
                </a>
              </div>
            </div>
            <h3
              class="mx-0 mt-0 mb-[10px] font-semibold leading-[1.1] text-[22px] text-[#ccd6f6]"
            >
              <a
                href="https://github.com/Yad00/portfolio"
                target="_blank"
                class="static inline-block no-underline cursor-pointer text-inherit duration-150 ease-in group-hover:text-[#64ffda] before:content-[''] before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0"
                >Portfolio
              </a>
            </h3>
            <div class="text-[#a8b2d1] text-[17px]">
              <p class="m-0">
                A dynamic and immersive showcase of my expertise as a fullstack
                developer. Experience a captivating journey through my projects,
                skills, and achievements, all meticulously curated in this
                immersive digital platform.
              </p>
            </div>
          </header>
          <footer>
            <ul
              class="flex items-end flex-wrap p-0 mt-5 mb-0 mx-0 list-none text-[#8892b0]"
            >
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">Vue.Js</li>
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">
                Tailwind CSS
              </li>
            </ul>
          </footer>
        </div>
      </li>
      <li
        class="relative cursor-default duration-300 ease-in-out group hover:-translate-y-2"
      >
        <div
          class="flex justify-between flex-col items-start relative h-full py-8 px-7 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] bg-[#112240] overflow-auto"
        >
          <header>
            <div class="flex justify-between items-center mb-[35px]">
              <div>
                <span class="material-icons text-[#64ffda] text-4xl"
                  >source</span
                >
              </div>
              <div class="flex items-center mr-[-10px]">
                <div
                  class="flex justify-center items-center py-[5px] px-[7px] relative z-[1]"
                >
                  <span
                    class="border border-solid border-[#8892b0] rounded-3xl inline-block py-0 px-2 text-[#8892b0] text-sm duration-150 ease-in hover:text-red-400 hover:border-red-400 font-sans"
                    >Private
                  </span>
                </div>
              </div>
            </div>
            <h3
              class="mx-0 mt-0 mb-[10px] font-semibold leading-[1.1] text-[22px] text-[#ccd6f6]"
            >
              <span
                class="static inline-block no-underline cursor-pointer text-inherit duration-150 ease-in group-hover:text-[#64ffda] before:content-[''] before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0"
                >Vending machine API / KurdistanVending
              </span>
            </h3>
            <div class="text-[#a8b2d1] text-[17px]">
              <p class="m-0">
                Api that allows communication between vending machines and
                FastPay Api through Qr code as a method of payment.
              </p>
            </div>
          </header>
          <footer>
            <ul
              class="flex items-end flex-wrap p-0 mt-5 mb-0 mx-0 list-none text-[#8892b0]"
            >
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">PHP</li>
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">SQL</li>
              <li class="mr-[15px] font-mono text-xs leading-[1.75]">Curl</li>
            </ul>
          </footer>
        </div>
      </li>
    </ul>
    <a
      href="https://github.com/Yad00"
      target="_blank"
      class="group transition duration-200 font-mono text-sm text-[#64ffda] inline-block text-center cursor-pointer mx-auto mt-20 mb-0"
    >
      View more projects on my Github
      <span
        class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#64ffda] opacity-40"
      ></span>
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// See this file to see how the IntersectionObserver is implemented
import { onIntersect } from '../composables/onIntersect';

const observer = ref({});
const scrollRef = ref({});
let shown = ref(false);

// This is the callback being called on intersection
const onEnter = () => {
  shown.value = true;
  console.log('entered');
};

// This is the (optional) callback being called when the element no longer intersects
const onExit = () => {};
// When the component is mounted, start observing
onMounted(() => {
  /* Our observer composable is used here (onIntersect) with 
      onEnter as the callback when intersecting and 
      onExit as the callback when no longer intersecting.
      {threshold: 0.8} is the IntersectionObserver Options
  */
  observer.value = onIntersect(scrollRef.value, onEnter, onExit, false, {
    threshold: 0.1,
  });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>
