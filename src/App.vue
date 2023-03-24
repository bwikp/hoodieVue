<script setup>
import { ref, computed } from 'vue'
import TheNav from './components/TheNav.vue';
import TheProduct from './components/TheProduct.vue'
import PopUp from './components/PopUp.vue';
import { HOODIES } from './assets/js/hoodies'
let priceRef = ref(false)
let productList = ref(HOODIES)
console.log(productList)
console.log(priceRef.value)
const priceFilter = () => {
  priceRef.value = !priceRef.value
  if (priceRef.value == true) {
    productList.value = productList.value.filter((product) => product.price < 100)

  } else {
    productList.value = HOODIES
  }
}

const activeFilter = () => {
  if (priceRef.value == true) {
    return "background-color : green"
  }
  if (priceRef.value == false) {
    return "background-color : #d9376e"
  }
}

let PopBoolean = ref(true)
let active = computed(activeFilter)
const closeOpen = () => {
  PopBoolean.value = !PopBoolean.value

  console.log(PopBoolean.value)
}
</script>
<template>
  <TheNav @cart="closeOpen"></TheNav>
  <div id="filters" class="px-4 mt-4 flex space-x-2">
    <span
      class="inline-block whitespace-nowrap rounded-[0.27rem] cursor-pointer bg-tertiary-contrast px-[0.65em] pt-[0.35em] pb-[0.30em] text-center align-baseline text-[0.75em] leading-none text-card-background-light">
      brand
    </span>
    <span
      class="inline-block whitespace-nowrap rounded-[0.27rem] cursor-pointer bg-tertiary-contrast px-[0.65em] pt-[0.35em] pb-[0.30em] text-center align-baseline text-[0.75em] leading-none text-card-background-light">
      Dedicated
    </span>
    <span @click="priceFilter" :style="active"
      class="inline-block whitespace-nowrap rounded-[0.27rem] cursor-pointer bg-tertiary-contrast px-[0.65em] pt-[0.35em] pb-[0.30em] text-center align-baseline text-[0.75em] leading-none text-card-background-light">
      &#60;100€
    </span>
  </div>
  <PopUp @closeCart="closeOpen" :cartPop="PopBoolean"></PopUp>
  <TheProduct v-for="item in productList" :produit="item"></TheProduct>
</template>
<style scoped></style>
