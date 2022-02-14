# Konfigurasi Vue

<Environment type="client" />

Slidev menggunakan [Vue 3](https://v3.vuejs.org/) untuk me-render aplikasi di bagian klien. Anda dapat memperluas aplikasi dengan menambahkan plugin atau konfigurasi kustom.

Buat fail `./setup/main.ts` dengan isi:

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

Ini juga dapat digunakan sebagai awalan utama untuk aplikasi Slidev untuk melakukan beberapa inisialisasi sebelum aplikasi mulai.

Pelajari lebih lanjut: [API Aplikasi Vue](https://v3.vuejs.org/api/application-api.html#component).
