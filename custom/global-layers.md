# Layer Global

> Tersedia sejak v0.17

Layer global memungkinkan anda untuk memiliki komponen kustom yang **tetap** di seluruh slide. Hal ini dapat berguna untuk *footer*, animasi antar slide, efek global, dll.

Slidev menyediakan dua lapis untuk penggunaan ini, buat `global-top.vue` atau `global-bottom.vue` di *root* projek anda dan Slidev akan menghubungkannya secara otomatis.

Hubungan layer:

- Global Atas (`global-top.vue`)
- Slide
- Global Bawah (`global-bottom.vue`)

## Contoh

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Nama Anda</footer>
</template>
```

Teks `Nama anda` akan muncul di semua slide.

Untuk mengaktifkannya secara kondisional, anda dapat menambahkannya dengan [Vue Konteks Global](/custom/vue-context).

```html
<!-- menyembunyikan *footer* dari halaman 4 -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Nama Anda
  </footer>
</template>
```

```html
<!-- menyembunyikan *footer* dari layer "cover" -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Nama Anda
  </footer>
</template>
```

```html
<!-- contoh halaman *footer* -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```
