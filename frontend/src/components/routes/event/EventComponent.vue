<template>
  <section class="w-full h-full">
    <div class="w-full h-fit bg-main p-6">
      <router-link to="/eventy/streetball" class="w-full h-fit">
        <h1 class="text-4xl font-bold">Knury Streetball 2023</h1>
        <p>
          Twoja drużyna została pomyślnie zarejestrowana na turniej.
          Pamiętaj o wypełnieniu zgód na udział.
          Link do zgody znajduje się w wiadomości Email lub pod poniższym przyciskiem.
        </p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventComponent',
}
</script>

<style>
</style>