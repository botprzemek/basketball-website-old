<template>
  <section class="w-full h-fit flex flex-col sm:flex-row flex-grow gap-3 mb-12 sm:mb-3">
    <section class="w-full h-fit grid gap-3 grid-rows sm:grid-cols-[3fr_repeat(2,_8fr)_2fr]">
      <div class="w-full h-full bg-main grid place-content-center text-2xl sm:text-sm p-2 sm:p-none">
        <p class="text-lg font-bold">{{ name }}</p>
      </div>
      <section class="w-full h-fit px-3 py-2 border-secd border-[1px]">
        <input @input="passData" :id="`firstname-${id}`" v-model="player.firstName"
               class="w-full bg-transparent text-secd text-sm placeholder-secd mt-0.5 focus:outline-0"
               maxlength="24"
               minlength="3" :name="`firstname-${id}`"
               pattern="[a-zA-ZZĄĆĘŁŃÓŚŹŻąćęłńóśźż]{3,24}" placeholder="Imię" required type="text">
      </section>
      <section class="w-full h-fit px-3 py-2 border-secd border-[1px]">
        <input @input="passData" :id="`lastname-${id}`" v-model="player.lastName"
               class="w-full bg-transparent text-secd text-sm placeholder-secd mt-0.5 focus:outline-0"
               maxlength="24"
               minlength="3" :name="`lastname-${id}`"
               pattern="[a-zA-ZZĄĆĘŁŃÓŚŹŻąćęłńóśźż]{3,24}" placeholder="Nazwisko" required type="text">
      </section>
      <section class="w-full h-fit px-3 py-2 border-secd border-[1px]">
      <input @input="passData" :id="`age-${id}`" v-model="player.age"
             class="w-full bg-transparent text-secd text-sm placeholder-secd mt-0.5 focus:outline-0"
             maxlength="2"
             minlength="2" :name="`age-${id}`"
             size="2" max="2" pattern="[0-9]{1,2}" placeholder="Wiek" required type="number">
      </section>
    </section>
    <div class="z-20 w-full h-10 sm:w-10 sm:h-10 sm:aspect-square bg-secd">
      <img v-if="!player.validation" :src="require(`@/assets/icon/x.svg`)" alt="Validation icon" class="p-0.5 w-full h-full">
      <img v-else :src="require(`@/assets/icon/check.svg`)" alt="Validation icon" class="p-0.5 w-full h-full">
    </div>
  </section>
</template>

<script>
import {validateInputs} from '@/methods/Validate';

export default {
  name: "PlayerComponent",
  props: [
    "name",
    "id"
  ],
  data() {
    return {
      validation: false,
      player: {
        firstName: null,
        lastName: null,
        age: null,
      }
    }
  },
  methods: {
    passData() {
      this.validation = validateInputs('player', {
        firstName: this.player.firstName,
        lastName: this.player.lastName,
        age: this.player.age,
      });
      const newPlayer = this.player;
      newPlayer.validation = this.validation;
      this.$emit('passPlayer', newPlayer);
    }
  },
  mounted() {
    const oldPlayer = JSON.parse(localStorage.getItem(`player-${this.id}`));
    if (oldPlayer === null) return;
    Object.keys(oldPlayer).forEach(key => {
      if (oldPlayer[key] !== null) this.player[key] = oldPlayer[key];
    });
  }
}
</script>

<style>
</style>