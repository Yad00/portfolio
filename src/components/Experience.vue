<template>
  <section
    class="py-[60px] min-[480px]:py-[80px] md:py-[100px] px-0 my-0 mx-auto max-w-[700px]"
    id="experience"
  >
    <h2
      class="flex items-center relative mt-[10px] mb-10 mx-0 w-full text-[clamp(26px,_5vw,_32px)] whitespace-nowrap font-semibold text-[#ccd6f6] leading-[1.1] font-sans after:content-[''] after:block after:relative after:-top-[1px] after:ml-[10px] after:h-[1px] after:bg-[#233554] after:w-full after:sm:ml-5 after:md:w-[200px] after:lg:w-[300px]"
    >
      My Work Experiences
    </h2>
    <div class="max-[599px]:hidden min-[700px]:min-h-[340px]">
      <va-tabs
        v-model="value"
        grow
        color="#64ffda"
        class="max-[600px]:block text-[#8892b0]"
      >
        <template #tabs>
          <va-tab
            v-for="tab in tabs"
            :key="tab.title"
            :name="tab.title"
            color="#64ffda"
          >
            {{ tab.title }}
          </va-tab>
        </template>

        <div class="w-full h-auto py-[10px] px-[5px] mt-8">
          <h3
            class="mb-[2px] text-[#ccd6f6] font-sans text-[22px] font-medium leading-[1.3]"
          >
            {{ currentTab.content.workTitle }}
          </h3>
          <p class="mb-6 text-[#a8b2d1] font-mono text-[13px] leading-[1.3]">
            {{ currentTab.content.date }}
          </p>
          <div>
            <ul
              class="p-0 m-0 list-none text-lg leading-[1.3] text-[#8892b0] font-sans"
            >
              <li
                class="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
              >
                {{ currentTab.content?.details[0] }}
              </li>
              <li
                class="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
              >
                {{ currentTab.content?.details[1] }}
              </li>
              <li
                class="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
              >
                {{ currentTab.content?.details[2] }}
              </li>
              <li
                class="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
              >
                {{ currentTab.content?.details[3] }}
              </li>
            </ul>
          </div>
        </div>
      </va-tabs>
    </div>

    <div class="min-[600px]:hidden">
      <va-tabs
        v-model="value"
        color="#64ffda"
        grow
        class="max-[600px]:block text-[#8892b0]"
      >
        <template #tabs>
          <va-tab
            v-for="tab in tabs"
            :key="tab.title"
            :name="tab.title"
            color="#64ffda"
          >
            {{ tab.title }}
          </va-tab>
        </template>

        <div class="w-full h-auto py-[10px] px-[5px] mt-8">
          <h3
            class="mb-[2px] text-[#ccd6f6] font-sans text-[22px] font-medium leading-[1.3]"
          >
            {{ currentTab.content.workTitle }}
          </h3>
          <p class="mb-6 text-[#a8b2d1] font-mono text-[13px] leading-[1.3]">
            {{ currentTab.content.date }}
          </p>
          <div>
            <ul
              class="p-0 m-0 list-none text-lg leading-[1.3] text-[#8892b0] font-sans"
            >
              <li
                class="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
              >
                {{ currentTab.content?.details[0] }}
              </li>
              <li
                class="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
              >
                {{ currentTab.content?.details[1] }}
              </li>
              <li
                class="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
              >
                {{ currentTab.content?.details[2] }}
              </li>
              <li
                class="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-3 before:font-mono"
              >
                {{ currentTab.content?.details[3] }}
              </li>
            </ul>
          </div>
        </div>
      </va-tabs>
    </div>
  </section>
</template>

<script>
const TABS = [
  {
    title: 'Asty',
    content: {
      workTitle: 'Full-Stack Developer',
      date: 'January 2022 - April 2023',
      details: [
        'Developed and maintained scalable full-stack applications using technologies such as React.Js, Node.js, and MongoDB.',
        'Implemented responsive and intuitive user interfaces utilizing HTML, CSS, and JavaScript frameworks, resulting in enhanced user experiences.',
        'Designed and optimized back-end APIs and database schemas for efficient data retrieval and manipulation.',
        'Conducted thorough testing, debugging, and performance optimization to ensure the stability and reliability of the applications.',
      ],
    },
  },
  {
    title: 'KurdistanVending',
    content: {
      workTitle: 'Backend Developer',
      date: 'August 2021 - November 2021',
      details: [
        'Developed and implemented robust API endpoints to enable seamless communication between multiple vending machines, ensuring efficient and secure data exchange.',
        'Integrated Fastpay API into our vending machine system, enabling seamless QR code-based transactions and enhancing the overall user experience.',
        'Implemented a customer data database for vending machine transactions, enabling effective tracking of purchase histories and providing valuable insights into consumer behavior.',
        'Monitored and analyzed server logs and performance metrics to identify and resolve issues, ensuring optimal application performance and uptime.',
      ],
    },
  },
];

export default {
  data: () => ({
    tabs: TABS,
    value: TABS[0].title,
  }),

  computed: {
    currentTab() {
      return this.tabs.find(({ title }) => title === this.value);
    },
  },
};
</script>
