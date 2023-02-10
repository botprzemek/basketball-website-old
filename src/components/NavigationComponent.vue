<template>
  <ul class="z-50 relative">
    <li class="transform-gpu transition list-none ml-4 text-white hover:text-main hover:scale-105" v-for="link in links" :key="link.title">
      <router-link v-bind:to="link.addr">{{ link.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavComponent",
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
        { title: 'Start',
          addr: './',
        },
        {
          title: 'Panel',
          addr: './panel',
        },
        {
          title: 'O nas',
          addr: './zespol',
        },
        {
          title: 'Sklep',
          addr: './sklep',
        },
        {
          title: 'Discord',
          addr: '/discord',
        },
        {
          title: 'FAQ',
          addr: './faq',
        },
      ]
    }
  }
}
</script>

<style>
</style>