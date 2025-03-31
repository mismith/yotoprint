<script setup>
import { ref } from 'vue'

function getFileAsUrl(file) {
  return URL.createObjectURL(file)
}

const file = ref(null)
</script>

<template>
  <article
    class="w-[2.125in] h-[3.375in] rounded-[10px] border-dashed print:border-transparent border-gray-300 relative bg-cover bg-center bg-no-repeat [print-color-adjust:exact!important] [-webkit-print-color-adjust:exact!important] box-content"
    :class="{ 'not-print:bg-gray-100 border': !file }"
    :style="{ backgroundImage: file ? `url(${getFileAsUrl(file)})` : 'none' }"
  >
    <div
      v-if="!file"
      class="print:hidden absolute inset-0 flex items-center justify-center text-center text-gray-500 text-sm"
    >
      Pick an image
    </div>
    <input
      type="file"
      class="absolute inset-0 opacity-0 size-full cursor-pointer z-10"
      accept="image/*"
      @input="file = $event.target.files[0]"
    />
  </article>
</template>
