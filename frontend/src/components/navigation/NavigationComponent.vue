<template>
  <nav class="fixed z-50 w-12 h-screen bg-main transform-gpu transition duration-700 ease-out -translate-x-[100%]">
    <ul class="grid grid-cols-1">
      <li v-for="(link, i) in this.links" :key="link.title" class="relative list-none text-white">
        <router-link v-bind:to="link.addr" @mouseenter="removeClass(i)" @mouseleave="addClass(i)">
          <IconComponent :icon="link.icon" :title="link.title"/>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconComponent from "@/components/utils/IconComponent.vue";
import {links} from "@/assets/Links";

export default {
  name: "NavComponent",
  components: {IconComponent},
  data() {
    return {
      links: links,
    }
  },
  methods: {
    addClass(i) {
      document.querySelectorAll('.nav-moved')[i].classList.add('-translate-x-[100.5%]');
    },
    removeClass(i) {
      document.querySelectorAll('.nav-moved')[i].classList.remove('-translate-x-[100.5%]');
    },
  },
  mounted() {
    setTimeout(() => document.querySelector('nav').classList.remove('-translate-x-[100%]'), 1);
  },
}
</script>

<style>
</style>