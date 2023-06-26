<template>
  <section
    :class="`max-w-[900px] py-[60px] px-0 my-0 mx-auto text-[#8892b0] min-[480px]:py-[80px] md:py-[100px] ${
      shown ? 'animate-fadeIn animate-goUp' : 'opacity-0'
    }`"
    id="about"
    ref="scrollRef"
  >
    <h2
      class="flex items-center relative mt-[10px] mb-10 mx-0 w-full text-[clamp(26px,_5vw,_32px)] whitespace-nowrap font-semibold text-[#ccd6f6] leading-[1.1] font-sans after:content-[''] after:block after:relative after:-top-[1px] after:ml-[10px] after:h-[1px] after:bg-[#233554] after:w-full after:sm:ml-5 after:md:w-[200px] after:lg:w-[300px]"
    >
      About Me
    </h2>
    <div class="block md:grid md:grid-cols-[3fr_2fr] md:gap-[50px]">
      <div>
        <div>
          <p class="mx-0 mt-0 mb-4">
            Hello! I'm Yad, a passionate fullstack developer with a talent for
            crafting captivating online experiences. My journey into web
            development started in 2014 when I stumbled upon an ad on a YouTube
            video. It showcased the ease of using tools like WordPress to create
            websites compared to coding from scratch. This discovery sparked my
            interest in website building and eventually led me to pursue coding
            as my educational path.
          </p>
          <p class="mx-0 mt-0 mb-4">
            Since then, I have been dedicated to expanding my knowledge and
            refining my skills in the field. I strive to stay up-to-date with
            the latest trends and technologies to deliver top-notch results.
          </p>
          <p class="mx-0 mt-0 mb-4">
            Join me as we embark on an exciting journey of transforming ideas
            into stunning digital realities. Together, we can create exceptional
            online experiences that leave a lasting impression.
          </p>
          <p class="m-0">
            These are some of the technologies that i work with regularly:
          </p>
        </div>
        <ul
          class="grid grid-cols-[repeat(2,_minmax(140px,_200px))] gap-y-0 gap-x-[10px] p-0 mt-5 mb-0 mx-0 overflow-hidden list-none"
        >
          <li
            class="relative mb-[10px] pl-5 font-mono text-[13px] list-none before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
          >
            JavaScript
          </li>
          <li
            class="relative mb-[10px] pl-5 font-mono text-[13px] list-none before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
          >
            ReactJs
          </li>
          <li
            class="relative mb-[10px] pl-5 font-mono text-[13px] list-none before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
          >
            NodeJs
          </li>
          <li
            class="relative mb-[10px] pl-5 font-mono text-[13px] list-none before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
          >
            VueJs
          </li>
          <li
            class="relative mb-[10px] pl-5 font-mono text-[13px] list-none before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
          >
            MongoDB
          </li>
          <li
            class="relative mb-[10px] pl-5 font-mono text-[13px] list-none before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
          >
            TypeScript
          </li>
        </ul>
      </div>
      <div
        class="mt-[50px] mb-0 mx-auto w-[70%] relative max-w-[300px] md:m-0 md:w-auto"
      >
        <div
          class="shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] block relative w-full rounded bg-[#64ffda] after:content-[''] after:block after:absolute after:w-full after:h-full after:rounded after:border-2 after:border-solid after:border-[#64ffda] after:top-5 after:left-5"
        >
          <div
            class="relative rounded mix-blend-multiply filter grayscale contrast-100 w-full max-w-full align-middle inline-block overflow-hidden"
          >
            <div class="max-w-[500px] block">
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                alt="presentation"
                class="max-w-full block static h-full m-0 p-0 w-full object-cover align-middle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
    threshold: 0.2,
  });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>
