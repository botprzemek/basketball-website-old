<template>
  <section class="z-10 w-full h-full relative grid select-none mx-4">
    <FormComponent />
  </section>
</template>

<script>
import FormComponent from '@/components/routes/event/register/FormComponent.vue';

export default {
  name: 'RegisterComponent',
  components: {
    FormComponent,
  },
}
</script>

<style scoped>

</style>