<template>
  <section class="w-full h-full">
    <article class="w-full h-full grid">
      <h1 class="text-4xl font-bold">Rejestracja</h1>
      <p class="mb-1.5">Wypełnij formularz, aby zapisać swoją drużynę na Knury Streetball 2023.</p>
    </article>
    <FormComponent/>
  </section>
</template>

<script>
import FormComponent from '@/components/routes/event/streetball/FormComponent.vue';

export default {
  name: 'RegisterComponent',
  components: {
    FormComponent,
  },
}
</script>

<style scoped>

</style>