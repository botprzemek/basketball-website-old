<template>
  <section v-if="loading" class="w-full h-full">
    <article class="w-full h-fit grid place-content-stretch mb-1.5">
      <h1 class="text-2xl sm:text-4xl font-bold">Ładuję...</h1>
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
  <section v-else class="w-full h-full">
    <article class="w-full h-fit grid place-content-stretch mb-1.5">
      <h1 class="text-2xl sm:text-4xl font-bold">Zarejestrowano!</h1>
      <p>
        Twoja drużyna została pomyślnie zarejestrowana na turniej.
        Pamiętaj o wypełnieniu zgód na udział.
        Link do zgody znajduje się pod poniższym przyciskiem.
      </p>
      <section class="w-full h-fit grid place-items-end">
        <div class="w-fit h-fit flex flex-row">
          <a class="w-full sm:w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-secd text-lg sm:text-2xl text-center sm:text-left" href="/files/zgoda_knury_streetball_2023.pdf" download>
            <p class="text-main font-bold">Zgoda</p>
          </a>
        </div>
      </section>
    </article>
  </section>
</template>

<script>
import {sendForm} from '@/methods/Post';
import ButtonComponent from '@/components/utils/ButtonComponent';

//zgoda_streetball_2023.pdf

export default {
  name: 'RegisterComponent',
  components: {
    ButtonComponent,
  },
  props: [ 'token' ],
  data() {
    return {
      loading: true,
      error: false,
    }
  },
  mounted() {
    sendForm('events/streetball/verify', {token:this.token,verified:false}, async callback => {
      if (callback.ok) {
        this.loading = false;
        return;
      }
      this.error = true;
      console.log(await callback.json());
    });
  }
}
</script>

<style scoped>

</style>