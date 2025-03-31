<script setup>
import BaseCard from './components/BaseCard.vue'
</script>

<template>
  <main
    class="w-[8.5in] h-[11in] gap-[0.125in] p-[0.125in] grid grid-cols-3 justify-items-center items-center not-print:border border-gray-300 not-print:m-4 not-print:mx-auto"
  >
    <BaseCard v-for="card in 9" :key="card" />
  </main>
</template>

<style>
@page {
  margin: 0;
}
@media print {
  #__vue-devtools-container__ {
    display: none !important;
  }
}
</style>
