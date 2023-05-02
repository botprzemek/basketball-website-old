<template>
  <NavigationComponent/>
  <section class="content z-10 min-h-screen h-full flex flex-col relative select-none">
    <main class="flex w-full h-full p-12 box-border">
      <router-view/>
    </main>
    <SpinnerComponent/>
  </section>
</template>

<script>
import '@/main.css';
import NavigationComponent from '@/components/navigation/NavigationComponent';
import SpinnerComponent from '@/components/utils/SpinnerComponent';

export default {
  components: {
    NavigationComponent,
    SpinnerComponent,
  },
  mounted() {
    if (window.screen.width >= 720) document.querySelector('.content').classList.add('ml-8');
  }
}
</script>

<style>
</style>