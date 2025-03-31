<script setup>
import { ref } from 'vue'

function getFileAsUrl(file) {
  return URL.createObjectURL(file)
}

const file = ref(null)
</script>

<template>
  <article
    class="relative box-content h-[3.375in] w-[2.125in] rounded-[10px] border-dashed border-gray-300 bg-cover bg-center bg-no-repeat [-webkit-print-color-adjust:exact!important] [print-color-adjust:exact!important] print:border-transparent"
    :class="{ 'border not-print:bg-gray-100': !file }"
    :style="{ backgroundImage: file ? `url(${getFileAsUrl(file)})` : 'none' }"
  >
    <div
      v-if="!file"
      class="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center text-sm text-gray-500 print:hidden"
    >
      Pick an image

      <div class="text-xs opacity-50">3.375in &times; 2.125in</div>
    </div>
    <input
      type="file"
      class="absolute inset-0 z-10 size-full cursor-pointer opacity-0"
      accept="image/*"
      @input="file = $event.target.files[0]"
    />
  </article>
</template>
