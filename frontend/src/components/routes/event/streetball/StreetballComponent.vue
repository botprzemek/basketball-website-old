<template>
  <section class="w-full h-full">
    <article class="w-full h-full grid">
      <h1 class="text-4xl font-bold">Knury Streetball 2023</h1>
      <p>
        Formularz rejestracyjny dostępny jest pod poniższym linkiem.
      </p>
      <section class="w-full h-fit grid place-items-end">
        <div class="w-fit h-fit flex flex-row">
          <ButtonComponent :id="1" bgColor="secd" text="Rejestracja" textColor="main" textWeight="bold" link="/eventy/streetball/rejestracja"/>
        </div>
      </section>
    </article>
  </section>
</template>

<script setup>
import ButtonComponent from '@/components/utils/ButtonComponent';
</script>

<style>
</style>