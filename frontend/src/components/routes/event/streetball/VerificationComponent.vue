<template>
  <section class="w-full h-full">
    <article class="w-full h-fit grid place-content-start mb-1.5">
      <h1 class="text-2xl font-bold">Zarejestrowano!</h1>
      <p>
        Twoja drużyna została pomyślnie zarejestrowana na turniej.
        Pamiętaj o wypełnieniu zgód na udział.
        Link do zgody znajduje się w wiadomości Email lub pod poniższym przyciskiem.
      </p>
      <section class="w-full h-fit grid place-items-end">
        <div class="w-fit h-fit flex flex-row">
          <ButtonComponent :id="1" bgColor="secd" text="Pobierz .PDF" textColor="main" textWeight="bold" link="/pliki/zgoda_streetball_2023.pdf"/>
        </div>
      </section>
    </article>
  </section>
</template>

<script>
import {sendForm} from '@/methods/Post';
import ButtonComponent from '@/components/utils/ButtonComponent';

export default {
  name: 'RegisterComponent',
  components: {
    ButtonComponent,
  },
  props: [ 'token' ],
  mounted() {
    sendForm('events/streetball/verify', {token:this.token,verified:false}, async callback => {
      console.log(await callback.json());
    });
  }
}
</script>

<style scoped>

</style>