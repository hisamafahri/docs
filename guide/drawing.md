# Menggambar & Anotasi

> Tersedia sejak v0.23

Kami menambahkan [drauu](https://github.com/antfu/drauu) secara bawaan untuk menggambar dan anotasi yang dapat meningkatkan presentasi lebih baik lagi.

Untuk memulai, klik ikon <carbon-pen class="inline-icon-btn"/> di baris alat (*toolbar*) dan mulai menggambar. Ini juga tersedia di [Mode Penampil](/guide/presenter-mode). Gambar dan anotasi yang anda buat akan **disinkronisasi** secara langsung otomatis di seluruh bagian.

<Tweet id="1424027510342250499" />

## Penggunaan dengan Pena Stylus

Saat menggunakan pena stylus di tablet (misal, iPad dengan Apple Pencil), Slidev dapat secara cerdas mendeteksi tipe input. Anda dapat secara langsung menggambar di slide anda dengan pena tersebut tanpa mengubahnya ke mode menggambar, dengan kontrol jari atau tetikus tetap di navigasi.

## Gambar Tetap

Konfigurasi frontmatter berikut ini memungkinkan anda untuk mempertahankan gambar anda sebagai SVG secara langsung di `.slidev/drawings` dan mempertahankannya di file ekspor atau situs yang di-host.

```md
---
drawings: 
  persist: true
---
```

## Menonaktifkan Gambar

Seluruhnya:

```md
---
drawings: 
  enabled: false
---
```

Hanya di Pengembangan:

```md
---
drawings: 
  enabled: dev
---
```

Hanya di Mode Penampil:

```md
---
drawings: 
  presenterOnly: true
---
```

## Sinkronisasi Gambar

Secara defaulr, Slidev menyingkronisasi gambar anda di seluruh bagian. Jika anda membagikan slide anda dengan orang lain, anda mungkin ingin menonaktifkan sinkronisasi dengan:

```md
---
drawings: 
  syncAll: false
---
```

Dengan konfigurasi ini, hanya gambar dari bagian mode penampil yang dapat di-sinkronisasi dengan yang lainnya.