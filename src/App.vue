<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <Sidebar />
    <main
      class="py-0 px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px] my-0 mx-auto w-full max-w-[1600px] min-h-screen bg-[#0A192F]"
    >
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>
