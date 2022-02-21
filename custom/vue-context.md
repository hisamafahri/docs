# Konteks Global Vue

Slidev memasukkan [konteks global Vue](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev` untuk kondisi lanjutan atau kontrol navigasi.

## Penggunaan

You can access it anywhere in your markdown and Vue template, with the ["Mustache" syntax](https://v3.vuejs.org/guide/template-syntax.html#interpolations).
Anda dapat mengaksesnya di mana saja di dalam template markdown dan Vue anda, dengan [sintaks "Mustache"](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Halaman 1

Halaman saat ini: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Halaman Selanjutnya</button>
</template>
```

## Properti

### `$slidev.nav`

Objek reaktif yang memegang properti dan kontrol navigasi slide. Sebagai contoh:

```js
$slidev.nav.next() // ke langkah berikutnya

$slidev.nav.nextSlide() // ke slide berikutnya (melewati v-clicks)

$slidev.nav.go(10) // ke slide #10
```

```js
$slidev.nav.currentPage // nomor slide saat ini

$slidev.nav.currentLayout // id tata letak saat ini

$slidev.nav.clicks // jumlah klik saat ini
```

For more properties available, refer to the [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts) exports.
Untuk properti yang tersedia, rujuk ke ekspor [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

### `$slidev.configs`

Objek reaktif yang menyimpan [konfigurasi di frontmatter pertama](/custom/#frontmatter-configures) yang diurai dari `slides.md` anda. Sebagai contoh:

```yaml
---
title: Slidev Pertama Saya!
---
```

```
{{ $slidev.configs.title }} // 'Slidev Pertama Saya!'
```

### `$slidev.themeConfigs`

Objek reaktif yang menyimpan konfigurasi tema yang diurai.

```yaml
---
title: Slidev Pertama Saya!
themeConfig:
  primary: #213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```
