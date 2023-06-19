<template>
  <nav
    class="bg-[rgba(10,_25,_47,_0.85)] grid grid-cols-[0.5fr_5fr_1fr] md:grid-cols-[1fr_5fr_1fr_5fr_1fr] top-0 z-10 h-[100px] w-full sticky md:backdrop-blur-[10px]"
  >
    <h2
      class="text-2xl block font-bold self-center col-start-2 col-end-3 text-[#94ffed]"
    >
      Yad Araz
    </h2>
    <ul
      class="hidden md:flex md:flex-row md:justify-around md:items-center md:col-start-4 md:col-end-5 md:font-bold md:text-[#ccd6f6]"
    >
      <li class="list-item">
        <a
          href="#about"
          class="text-[0.9rem] cursor-pointer duration-200 ease-in-out font-mono underline decoration-[#94ffed] hover:decoration-2 hover:text-slate-100"
          >About me</a
        >
      </li>
      <li class="list-item">
        <a
          href="#experience"
          class="text-[0.9rem] cursor-pointer duration-200 ease-in-out font-mono underline decoration-[#94ffed] hover:decoration-2 hover:text-slate-100"
          >Experience</a
        >
      </li>
      <li class="list-item">
        <a
          href="#projects"
          class="text-[0.9rem] cursor-pointer duration-200 ease-in-out font-mono underline decoration-[#94ffed] hover:decoration-2 hover:text-slate-100"
          >Projects</a
        >
      </li>
      <li class="list-item">
        <a
          href="#contact"
          class="text-[0.9rem] cursor-pointer duration-200 ease-in-out font-mono underline decoration-[#94ffed] hover:decoration-2 hover:text-slate-100"
          >Contact</a
        >
      </li>
    </ul>

    <ul
      :class="`fixed h-[100vh] w-[60vw] z-11 right-0 top-0 bg-[#112240] text-[#ccd6f6] gap-20 flex flex-col justify-center items-center shadow-2xl duration-200 ease-out md:hidden ${
        is_expanded ? 'translate-x-[0vw]' : 'translate-x-[100vw]'
      }`"
    >
      <li class="list-item">
        <a
          href="#about"
          class="text-xl cursor-pointer duration-200 ease-in-out font-mono underline decoration-[#94ffed] hover:decoration-2 hover:text-slate-100"
          >About me</a
        >
      </li>
      <li class="list-item">
        <a
          href="#experience"
          class="text-xl cursor-pointer duration-200 ease-in-out font-mono underline decoration-[#94ffed] hover:decoration-2 hover:text-slate-100"
          >Experience</a
        >
      </li>
      <li class="list-item">
        <a
          href="#projects"
          class="text-xl cursor-pointer duration-200 ease-in-out font-mono underline decoration-[#94ffed] hover:decoration-2 hover:text-slate-100"
          >Projects</a
        >
      </li>
      <li class="list-item">
        <a
          href="#contact"
          class="text-xl cursor-pointer duration-200 ease-in-out font-mono underline decoration-[#94ffed] hover:decoration-2 hover:text-slate-100"
          >CONTACT</a
        >
      </li>
    </ul>

    <div
      class="col-start-3 col-end-4 self-center justify-self-center md:hidden"
    >
      <button @click="ToggleMenu">
        <span
          :class="`material-icons text-[#94ffed] text-4xl duration-200 ease-out ${
            is_expanded ? '-rotate-180' : ''
          }`"
        >
          {{ is_expanded ? 'close' : 'menu' }}
        </span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const is_expanded = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>
