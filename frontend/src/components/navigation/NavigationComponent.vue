<template>
  <nav v-if="phone" class="fixed bottom-0 z-50 w-screen h-fit max-h-24 bg-main flex justify-center transform-gpu transition duration-700 ease-out translate-y-[100%]">
    <ul class="w-2/3 grid grid-cols-4">
      <li v-for="(link) in this.links" :key="link.title" class="relative list-none text-white">
        <router-link v-bind:to="link.addr">
          <IconComponent :icon="link.icon" :title="link.title" translate="translate-y-[100.5%]"/>
        </router-link>
      </li>
    </ul>
  </nav>
  <nav v-else class="fixed z-50 w-12 h-screen bg-main transform-gpu transition duration-700 ease-out -translate-x-[100%]">
    <ul class="grid grid-cols-1">
      <li v-for="(link, i) in this.links" :key="link.title" class="relative list-none text-white">
        <router-link v-bind:to="link.addr" @mouseenter="removeClass(i, '-translate-x-[100.5%]')" @mouseleave="addClass(i, '-translate-x-[100.5%]')">
          <IconComponent :icon="link.icon" :title="link.title" translate="-translate-x-[100.5%]"/>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconComponent from "@/components/utils/IconComponent.vue";
import {links} from "@/assets/links";

export default {
  name: "NavComponent",
  components: {IconComponent},
  data() {
    return {
      phone: false,
      links: links,
    }
  },
  methods: {
    addClass(i, translate) {
      document.querySelectorAll('.nav-moved')[i].classList.add(translate);
    },
    removeClass(i, translate) {
      document.querySelectorAll('.nav-moved')[i].classList.remove(translate);
    },
  },
  mounted() {
    if (window.screen.width < 720) {
      this.phone = true;
      setTimeout(() => document.querySelector('nav').classList.remove('translate-y-[100%]'), 1);
      return;
    }
    setTimeout(() => document.querySelector('nav').classList.remove('-translate-x-[100%]'), 1);
  },
}
</script>

<style>
</style>