<template>
  <ul class="z-50 relative">
    <li class="transform-gpu transition list-none ml-4 text-white hover:text-main hover:scale-105" v-for="link in links" :key="link.title">
      <router-link v-bind:to="link.addr">{{ link.title }}</router-link>
    </li>
  </ul>
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
        { title: 'Zespół', addr: './zespol' },
        { title: 'O nas', addr: '/o-nas' },
        { title: 'Media', addr: '/media' },
        { title: 'Kontakt', addr: './kontakt' },
      ]
    }
  }
}
</script>

<style>
</style>