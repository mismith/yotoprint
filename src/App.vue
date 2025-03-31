<script setup>
import BaseCard from './components/BaseCard.vue'
</script>

<template>
  <main
      class="grid h-[11in] w-[8.5in] grid-cols-3 items-center justify-items-center gap-[0.125in] border-gray-300 bg-white p-[0.125in] not-print:m-4 not-print:mx-auto not-print:border"
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
