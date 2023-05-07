<template>
  <section class="z-10 w-full h-full relative place-content-center select-none mx-4 mb-48">
    <article class="w-full h-full grid items-center justify-items-center sm:justify-items-start">
      <img src="@/assets/knury_logo.svg" class="aspect-square w-full sm:w-1/4 mb-2 sm:mb-0" alt="Logo">
      <h1 class="text-4xl sm:text-8xl font-bold hidden">Knury Knurów</h1>
      <p class="text-lg sm:text-2xl mb-3 text-center">
        Witaj na naszej stronie!
      </p>
      <ButtonComponent :id="1" bgColor="secd" text="Rejestracja" textColor="main" textWeight="bold" link="/eventy/streetball/rejestracja"/>
    </article>
  </section>
</template>

<script setup>
import ButtonComponent from '@/components/utils/ButtonComponent';
</script>

<style>
</style>
