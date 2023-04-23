<template>
  <NavigationComponent/>
  <section class="min-h-screen h-full pl-12 flex flex-col">
    <main class="flex w-full h-full">
      <router-view/>
    </main>
    <FooterComponent/>
    <SpinnerComponent/>
  </section>
</template>

<script setup>
import '@/main.css';
import NavigationComponent from '@/components/navigation/NavigationComponent';
import FooterComponent from '@/components/footer/FooterComponent';
import SpinnerComponent from '@/components/utils/SpinnerComponent';
</script>

<style>
</style>
