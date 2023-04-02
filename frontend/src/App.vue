<template>
  <div class="animation z-[999] relative w-screen h-screen"></div>
  <NavigationComponent />
  <main class="z-30 w-screen min-h-[80vh] relative grid place-content-center select-none">
    <router-view />
  </main>
  <FooterComponent />
  <div class="z-10 inset-0 absolute h-full w-screen bg-scroll animate-gradient bg-full bg-gradient-to-bl from-[#1d1d1d] to-[#2d2d2d]"></div>
</template>

<script>
import '@/main.css';
import lottie from 'lottie-web';
import NavigationComponent from '@/components/NavigationComponent';
import FooterComponent from '@/components/FooterComponent';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent,
  },
  mounted() {
    document.querySelector('body').style.overflowY = 'hidden';
    lottie.loadAnimation({ container: document.body.querySelector('.animation'), renderer: 'svg', loop: false, autoplay: true, useSubFrames: true, path: 'data.json' });
    setInterval(() => document.querySelector('body').style.overflowY = 'unset', 3500);
  }
}
</script>

<style>
</style>
