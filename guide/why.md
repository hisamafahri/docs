# Mengapa Slidev

Ada banyak pembuat slide WYSIWYG yang kaya fitur dan serba guna seperti [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) dan [Apple Keynote](https://www.apple.com/keynote/). Mereka bekerja cukup baik untuk membuat slide yang bagus dengan animasi, bagan, dan banyak hal lainnya, sekaligus sangat intuitif dan mudah dipelajari. Jadi mengapa repot-repot membuat Slidev?

Slidev bertujuan untuk memberikan fleksibilitas dan interaktivitas bagi pengembang (*developer*) untuk membuat presentasi mereka lebih menarik, ekspresif, dan atraktif dengan menggunakan alat dan teknologi yang sudah mereka kenal.

Saat bekerja dengan editor WYSIWYG, mudah terganggu oleh opsi *style*. Slidev memperbaikinya dengan memisahkan konten dan visual. Ini memungkinkan Anda untuk fokus pada satu hal pada satu waktu, sementara juga dapat menggunakan kembali tema dari komunitas. Slidev tidak berusaha untuk menggantikan pembuat dek slide lainnya sepenuhnya. Sebaliknya, ini berfokus pada katering untuk komunitas pengembang.

## Slidev

![](/screenshots/cover.png)

Berikut adalah beberapa fitur paling keren dari Slidev:

## Berbasis Markdown

Slidev menggunakan format markdown yang diperluas untuk menyimpan dan mengatur slide Anda dalam satu file teks biasa. Ini memungkinkan Anda fokus membuat konten. Dan karena konten dan gaya dipisahkan, ini juga memungkinkan untuk beralih di antara tema yang berbeda dengan mudah.

Pelajari lebih lanjut tentang [Sintaks Markdown Slidedev](/guide/syntax).

## Bertema

Tema untuk Slidev dapat dibagikan dan diinstal menggunakan paket npm. Anda kemudian menerapkannya hanya dengan satu baris konfigurasi.

Lihat [galeri tema](/themes/gallery) atau [pelajari cara menulis tema](/themes/write-a-theme).

## Ramah Pengembang

Slidev menyediakan dukungan kelas satu untuk *snippet* kode untuk pengembang. Slidev mendukung [Prism](https://prismjs.com/) dan [Shiki](https://github.com/shikijs/shiki) untuk mendapatkan sintaks *highlighter* yang *pixel-perfect*, sembari tetap dapat memodifikasi kode kapan saja waktu. Dengan [Monaco editor](https://microsoft.github.io/monaco-editor/) secara bawaan, Slidev juga memberdayakan Anda untuk melakukan live coding/demonstrasi dalam presentasi Anda dengan pelengkapan otomatis, *type hovering*, dan bahkan dukungan pemeriksaan jenis TypeScript .

Pelajari lebih lanjut tentang [highlighter](/custom/highlighters) dan [konfigurasi Monaco](/custom/config-monaco).

## Cepat

Slidev didukung oleh [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) dan [Windi CSS](https://windicss.org/), yang memberi Anda pengalaman menulis yang paling indah. Setiap perubahan yang Anda buat akan tercermin pada slide Anda **secara instan**.

Temukan selengkapnya tentang [tech stack](/guide/#tech-stack) Slidev.

## Interaktif & Ekspresif

Anda dapat menulis komponen Vue khusus dan menggunakannya langsung di dalam file markdown Anda. Anda juga dapat berinteraksi dengannya di dalam presentasi untuk mengekspresikan ide Anda dengan cara yang lebih menarik dan intuitif.

## Dukungan Perekaman

Slidev menyediakan perekaman dan tampilan kamera bawaan. Anda dapat membagikan presentasi Anda dengan tampilan kamera di dalam, atau merekam dan menyimpannya secara terpisah untuk layar dan kamera Anda. Semua dengan sekali jalan, tidak diperlukan alat tambahan.

Pelajari lebih lanjut tentang merekam [di sini](/guide/recording).

## Portabel

Ekspor slide Anda ke PDF, PNG, atau bahkan Aplikasi Satu Halaman (*Single-Page Application*/SPA) yang dapat dihosting dengan satu perintah, dan bagikan di mana saja.

Baca lebih lanjut di bagian [mengekspor dokumen](/guide/exporting).

## *Hackable*

Didukung oleh teknologi web, apa pun yang dapat dilakukan di aplikasi web juga dimungkinkan dengan Slidev. Misalnya, WebGL, API *request*, iframe, atau bahkan berbagi langsung. Terserah imajinasi Anda!

## Cobalah

Bermain-main dengan Slidev akan memberi tahu Anda lebih dari seribu kata. Anda hanya berjarak satu perintah:

```bash
$ npm init slidev
```

Atau lihat pratinjau singkatnya:

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
