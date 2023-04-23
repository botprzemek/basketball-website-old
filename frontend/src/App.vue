<template>
  <NavigationComponent/>
  <section class="min-h-screen h-full pl-12">
    <main>
      <router-view/>
    </main>
    <FooterComponent/>
  </section>
</template>

<script>
import '@/main.css';
// import lottie from 'lottie-web';
import NavigationComponent from '@/components/NavigationComponent';
import FooterComponent from '@/components/FooterComponent';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent,
  },
}
</script>

<style>
</style>
