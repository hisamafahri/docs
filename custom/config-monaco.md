# Konfigurasi Monaco

<Environment type="client" />

Buat `./setup/monaco.ts` dengan isi:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

Baca lebih lanjut tentang [konfigurasi Monaco](https://github.com/Microsoft/monaco-editor).

## Penggunaan

Untuk menggunakan Monaco di slide anda, tambahkan `{monaco}` ke baris kode anda:

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

Menjadi

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Mengekspor

Secara default, Monaco HANYA akan bekerja di mode `dev`. Jika anda ingin itu tersedia di hasil ekspor SPA, atur formatter anda:

```yaml
---
monaco: true # default "dev"
---
```

## Instalasi Otomatis Types

Saat menggunakan TypeScript dengan Monaco, types untuk dependensi akan terpasang secara otomatis ke sisi klien.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

Di contoh di atas, pastikan `vue` dan `@vueuse/core` terpasang secara lokal sebagai dependensi/*devDependencies*, Slidev akan mengatur sisanya agar types berfungsi di editor secara otomatis.

## Konfigurasi Tema

Tema diatur oleh Slidev berdasarkan tema gelap/terang. Jika anda ingin mengubahnya, anda dapat menambahkan id tema ke fungsi pengaturan:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

Jika anda ingin memuat tema kustom:

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> Jika anda embuat tema kustom untuk Slidev, gunakan `import()` dinamis di dalam fungsi pengaturan untuk mendapatkan hasil *tree-shaking* dan *code-splitting* yang lebih baik.
