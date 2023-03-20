<template>
  <NavigationComponent />
  <router-view />
  <FooterComponent />
  <div class="z-0 inset-0 absolute h-full w-screen bg-scroll animate-gradient bg-full bg-gradient-to-br from-[#1d1d1d] to-[#2d2d2d]"></div>
</template>

<script>
import '@/main.css'
import NavigationComponent from '@/components/NavigationComponent'
import FooterComponent from '@/components/FooterComponent'
export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent,
  }
}
</script>

<style>
</style>
