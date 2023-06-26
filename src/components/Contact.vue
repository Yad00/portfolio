<template>
  <section
    :class="`max-w-[600px] mt-0 mb-[100px] mx-auto text-center ${
      shown ? 'animate-fadeIn animate-goUp' : 'opacity-0'
    }`"
    id="contact"
    ref="scrollRef"
  >
    <h2
      class="text-[clamp(40px,_5vw,_60px)] mx-0 mt-0 mb-[20px] font-semibold text-[#ccd6f6] leading-[1.1]"
    >
      Get In Touch
    </h2>
    <p class="m-0 text-center text-[#8892b0] font-sans text-xl leading-[1.3]">
      Don't hesitate to get in touch—I'm all ears! Whether you want to dive into
      brainstorming sessions, evaluate project feasibility and timelines, or
      simply seek answers to your questions, I'm here to lend an attentive ear.
      Even if it's just to drop a friendly "hello," feel free to reach out.
      Let's connect and explore the possibilities together!
    </p>
    <a
      href="mailto:yad-1999@hotmail.com"
      target="_blank"
      class="text-[#64ffda] transition ease-in-out duration-200 inline-block text-3xl font-mono leading-none cursor-pointer mt-[80px] hover:scale-110"
    >
      Yad-1999@Hotmail.com
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
    threshold: 0.3,
  });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>
