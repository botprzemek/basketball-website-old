<template>
  <NavigationComponent/>
  <section class="z-10 min-h-screen h-full pl-12 flex flex-col relative select-none">
    <main class="flex w-full h-full p-12 box-border">
      <router-view/>
    </main>
    <!--    <FooterComponent/>-->
    <SpinnerComponent/>
  </section>
</template>

<script setup>
import "@/main.css";
import NavigationComponent from "@/components/navigation/NavigationComponent";
import SpinnerComponent from "@/components/utils/SpinnerComponent";</script>

<style>
</style>
