# Sintaks Markdown

Slide ditulis dalam **satu file markdowna** (secara default `./slides.md`).

Anda dapat menggunakan [fitur markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) seperti biasa, dengan dukungan tambahan dari HTML dan Komponen Vue. Penataan gaya menggunakan [Windi CSS](https://windicss.org) juga didukung. Gunakan `---` di baris baru untuk memisahkan slide Anda.

~~~md
# Slidev

Hello, World!

---

# Halaman 2

Langsung gunakan blok kode untuk hignlighting

//```ts
console.log('Hello, World!')
//```

---

# Halaman 3

Anda dapat langsung menggunakan komponen Windi CSS dan Vue untuk menata dan memperkaya slide Anda.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## Frontmatter & Tata Letak

Tentukan tata letak dan metadata lainnya untuk setiap slide dengan mengonversi pemisah menjadi [blok frontmatter](https://jekyllrb.com/docs/front-matter/). Setiap frontmatter dimulai dengan tanda hubung tiga dan diakhiri dengan tanda hubung lainnya. Teks di antaranya adalah objek data dalam format [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Sebagai contoh:

~~~md
---
layout: cover
---

# Slidev

Ini adalah halaman sampul.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---​

# Halaman 2

Ini adalah halaman dengan tata letak `center` dan gambar latar belakang.

---

# Halaman 3

Ini adalah halaman default tanpa metadata tambahan.
~~~

Rujuk ke bagian [kustomisasi](/custom/) untuk detail lebih lanjut.

## Blok Kode

Salah satu alasan utama saya membangun Slidev adalah membuat kode saya terlihat tepat di slide. Jadi seperti yang Anda harapkan, Anda dapat menggunakan blok kode dengan Markdown untuk *highlight* kode Anda.

~~~ts
//```ts
console.log('Hello, World!')
//```
~~~

Kami mendukung [Prism](http://prismjs.com) dan [Shiki](https://github.com/shikijs/shiki) sebagai highlighter sintaks. Rujuk ke bagian [highlighter](/custom/highlighters) untuk detail lebih lanjut.

### Highlight Baris

Untuk menyorot baris tertentu, cukup tambahkan nomor baris di dalam tanda kurung `{}`. Nomor baris dimulai dari 1.

~~~ts
//```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Untuk mengubah highlight dalam beberapa langkah, Anda dapat menggunakan `|` untuk memisahkannya. Sebagai contoh:

~~~ts
//```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Ini pertama-tama akan menyorot `a: Ref<number> | number` dan `b: Ref<number> | number`, lalu `return computed(() => unref(a) + unref(b))` setelah satu klik, dan terakhir, seluruh blok. Pelajari lebih lanjut di [panduan animasi](/guide/animations).

### Editor Monaco

Kapan pun Anda ingin melakukan beberapa modifikasi dalam presentasi, cukup tambahkan `{monaco}` setelah id bahasa — itu mengubah blok menjadi editor Monaco berfitur lengkap!

~~~ts
//```ts {monaco}
console.log('HelloWorld')
//```
~~~

Pelajari lebih lanjut di bagian [konfigurasi Monaco](/custom/config-monaco).

## *Embedded Styles*

Anda dapat menggunakan tag `<style>` di Markdown secara langsung untuk mengganti gaya untuk **slide saat ini**.

```md
# Ini Merah

<style>
h1 {
  color: red
}
</style>

---

# Slide selanjutnya tidak terpengaruh
```

Tag `<style>` di Markdown selalu bersifat [scoped](https://vue-loader.vuejs.org/guide/scoped-css.html). Untuk mengganti style secara global, lihat [bagian kustomisasi](/custom/directory-structure#style).

Didukung oleh [Windi CSS](https://windicss.org), Anda dapat langsung menggunakan *nested css* dan [directives](https://windicss.org/features/directives.html) (misal: `@apply`)

```md
# Slidev

> Hello `world`

<style>
blockquote {
  code {
    @apply text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Aset Statis

Seperti halnya yang anda lakukan di markdown, Anda dapat menggunakan gambar yang menunjuk ke url *remote* atau lokal.

Untuk aset *remote*, plugin [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) bawaan akan meng-*cache*-kannya ke penyimpanan sehingga saat aplikasi pertama kali dijalankan aplikasi akan memuat secara instan bahkan untuk gambar berukuran besar.

```md
![Gambar Remote](https://sli.dev/favicon.png)
```

Untuk aset lokal, letakkan di [folder `public`](/custom/directory-structure.html#public) dan rujuk dengan **awalan garis miring**.

```md
![Gambar Lokal](/pic.png)
```

Jika anda ingin menerapkan ukuran dan *style* kustom, anda dapat mengubahnya menjadi tag `<img>`.

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## Catatan

Anda juga dapat mengambik catatan untuk setiap slide. Catatan akan muncul di [Mode Penampil](/guide/presenter-mode.md) untuk referensi anda selama presentasi.

Di Markdown, blok komentar terakhi di setiap slide akan dianggap sebagai catatan.

~~~md
---
layout: cover
---

# Halaman 1

Ini halaman sampul.

<!-- Ini catatan -->

---

# Halaman 2

<!-- Ini BUKAN catatan karena mendahului konten slide -->

Halaman kedua

<!--
Ini catatan lainnya
-->
~~~

## Ikon

Slideve memungkinkan anda untuk mengakses hampir seluruh set ikon sumber-terbuka populer **secara langsung** di markdown anda. Didukung oleh [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) dan [Iconify](https://iconify.design/).

Penamaan mengikuti konvensi [Iconify](https://iconify.design/) `{collection-name}-{icon-name}`. Misalnya:

- `<mdi-account-circle />` - <mdi-account-circle /> from [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> from [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> from [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> from [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> from [SVG Logos](https://github.com/gilbarbara/logos)
- Dan lainnya...

Jelajahi dan cari semua ikon yang tersedia dengan [Icônes](https://icones.js.org/).

### Mengubah Style Ikon

Anda dapat mengubah style ikon layaknya elemen HTML lainnya. Misalnya:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Slot

> Tersedia sejak v0.18

Beberapa tata letak dapat menyediakan beberapa poin kontribusi menggunakan [slot nama Vue](https://v3.vuejs.org/guide/component-slots.html).

Misalnya, di [tata letak `two-cols`](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue), anda dapat memiliki dua kolom kiri (slot `default`) dan kanan (slot `kanan`) secara berdampingan.

```md
---
layout: two-cols
---

<template v-slot:default>

# Kiri

Ini akan muncul di kiri

</template>
<template v-slot:right>

# Kanan

Ini akan muncul di kanan

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Left</h3>
<p>This shows on the left</p>
</div>
<div>
<h3>Right</h3>
<p>This shows on the right</p>
</div>
</div>

Kami juga menyediakan sintaks singkatan gula `::name::` untuk nama slot. Contoh berikut bekerja persis sama dengan yang sebelumnya.

```md
---
layout: two-cols
---

# Kiri

Ini akan muncul di kiri

::right::

# Kanan

Ini akan muncul di kanan
```

Anda juga dapat secara eksplisit menspesifikasi slot *default* dan membuat urutan khusus.

```md
---
layout: two-cols
---

::right::

# Kanan

Ini akan muncul di kanan

::default::

# Kiri

Ini akan muncul di kiri
```

## Konfigurasi

Semua konfigurasi yang diperlukan dapat didefinisikan di file Markdown. Misalnya:

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

This is the cover page.
```

Pelajari lebih lanjut tentang [konfigurasi frontmatter](/custom/#konfigurasi-frontmatter).

## LaTeX

Slidev mendukung LaTeX secara bawaan, didukung dengan [KaTeX](https://katex.org/).

<Tweet id="1392246507793915904" />

### Inline

Kelilingi LaTeX Anda dengan satu `$` di setiap sisi untuk rendering *inline*.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Blok

Gunakan dua (`$$`) untuk rendering blok. Mode ini menggunakan simbol yang lebih besar dan memusatkan hasilnya.

```md
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

Pelajari lebih lanjut: [Demo](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

## Diagram

Anda juga dapat membuat diagram/grafik dari deskripsi tekstual di Markdown Anda, didukung oleh [Mermaid](https://mermaid-js.github.io/mermaid).

Blok kode yang ditandai sebagai `mermaid` akan diubah menjadi diagram, misalnya:

~~~md
//```mermaid
sequenceDiagram
  Alice->John: Halo John, bagaimana kabarmu?
  Note over Alice,John: Sebuah interaksi biasa
//```
~~~

Anda selanjutnya dapat meneruskan objek opsi ke sana untuk menentukan penskalaan dan tema. Sintaks objek adalah literal objek JavaScript, Anda perlu menambahkan tanda kutip (`'`) untuk string dan menggunakan koma (`,`) di antara kunci.

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Teks] --> C{Keputusan}
C -->|Satu| D[Hasil 1]
C -->|Dua| E[Hasil 2]
//```
~~~

Pelajari lebih lanjut: [Demo](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Masukan Jamak

> Tersedia sejak v0.15

Anda dapat membagi `slides.md` menjadi beberapa file dan mengaturnya sesuai keinginan.

`slides.md` :

```md
# Halaman 1

Ini halaman normal

---
src: ./subpage2.md
---

<!-- halaman ini akan dimuat dari './subpage2.md' -->
Konten dalam baris akan diabaikan
```

`subpage2.md` :

```md
# Halaman 2

Halaman ini dari file lain
```

### Penggabungan Frontmatter

Anda dapat memberikan frontmatter dari entri utama dan halaman markdown eksternal. Jika ada kunci yang sama di dalamnya, kunci dari **entri utama memiliki prioritas lebih tinggi**. Sebagai contoh:

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# Sampul

Halaman sampul
```

Mereka akan berakhir menjadi setara dengan halaman berikut:

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# Sampul

Halaman sampul
```

### Penggunaan Ulang Halaman

Dengan dukungan multi-entri, penggunaan kembali halaman dapat dilakukan dengan mudah. Sebagai contoh:

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# gunakan ulang
src: ./content.md
---
```
