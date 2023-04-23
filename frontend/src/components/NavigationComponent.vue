<template>
  <nav class="animate-nav fixed z-50 w-12 h-screen bg-main transform-gpu transition duration-700 ease-out translate-y-[100%]">
    <ul class="mt-3 grid grid-cols-1 gap-4">
      <li class="list-none ml-4 text-white" v-for="link in links" :key="link.title">
        <router-link v-bind:to="link.addr">
<!--          {{ link.title }}-->
          <div class="bg-secd w-1/2 h-auto aspect-square rounded-full"></div>
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
  },
  props: {
    title: String,
    addr: String,
  },
  data() {
    return {
      links: [
        { title: 'Start', addr: './' },
        { title: 'Aktualności', addr: '/aktualnosci' },
        { title: 'Eventy', addr: '/eventy' },
        { title: 'Zespół', addr: '/zespol' },
        { title: 'Zrzutka', addr: '/zrzutka' },
        { title: 'O nas', addr: '/o-nas' },
        { title: 'media', addr: '/media' },
        { title: 'Kontakt', addr: '/kontakt' },
      ]
    }
  },
  mounted() {
    setTimeout(() => document.querySelector('.animate-nav').classList.remove('translate-y-[100%]'));
  }
}
</script>

<style>
</style>