<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Lingkungan (environment):
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        Fungsi pengaturan ini hanya akan berjalan di lingkungan Node.js, Anda dapat memiliki akses ke API Node.
      </span>
      <span v-else>
        Fungsi pengaturan ini hanya akan berjalan di bagian klien. Pastikan kompatibilitas browser saat mengimpor paket.
      </span>
    </div>
  </details>
</template>
