<template>
  <nav class="animate-navigation fixed z-50 w-12 h-screen bg-main transform-gpu transition duration-700 ease-out translate-y-[100%]">
    <ul class="grid grid-cols-1">
      <li class="relative list-none text-white" v-for="(link, index) in links" :key="link.title">
        <router-link @mouseenter="removeClassesFromElement('.nav-moved', index, '-translate-x-[100.5%]')" @mouseleave="addClassesFromElement('.nav-moved', index, '-translate-x-[100.5%]')" v-bind:to="link.addr">
          <div class="nav-moved absolute left-0 bg-secd h-full grid place-content-center transform-gpu transition duration-700 ease-in-out -translate-x-[100.5%]">
            <span class="text-main font-bold px-3 whitespace-nowrap">{{ link.title }}</span>
          </div>
          <div class="w-full h-auto flex justify-center items-center my-1 py-1">
            <div class="aspect-square w-1/2 h-1/2 rounded-full">
              <img :src="require(`@/assets/icon/${link.icon}.svg`)" class="p-0.5 w-full h-full" alt="Menu element icon">
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavComponent',
  methods: {
    scroll(id) {
      window.location.pathname !== '/' ? this.$router.push('/') : document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"});
    },
    addClassesFromElement(element, index, ...classes) {
      document.querySelectorAll(element)[index].classList.add(classes);
    },
    removeClassesFromElement(element, index, ...classes) {
      document.querySelectorAll(element)[index].classList.remove(classes);
    },
  },
  props: {
    title: String,
    addr: String,
  },
  data() {
    return {
      links: [
        { title: 'Start', addr: './', icon: 'home' },
        { title: 'Aktualności', addr: '/aktualnosci', icon: 'news' },
        { title: 'Eventy', addr: '/eventy', icon: 'events' },
        { title: 'Zespół', addr: '/zespol', icon: 'team' },
        { title: 'Zrzutka', addr: '/zrzutka', icon: 'fundraising' },
        { title: 'O nas', addr: '/o-nas', icon: 'about' },
        { title: 'Media', addr: '/media', icon: 'media' },
        { title: 'Kontakt', addr: '/kontakt', icon: 'contact' },
      ]
    }
  },
  mounted() {
    setTimeout(() => document.querySelector('.animate-navigation').classList.remove('translate-y-[100%]'));
  }
}
</script>

<style>
</style>