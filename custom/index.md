# Kustomisasi

Slidev is fully customizable, from styling to tooling configurations. It allows you to configure the tools underneath ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)
Slidev sangat mudah dikustomisasi, dari *style* hingga kofigurasi alat. Slidev memungkinkan anda untuk mengatur peralatan di baliknya ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), dll.)

## Konfigurasi Frontmatter

Anda dapat mengatur Slidev di *frontmatter* di slide pertama anda, dan di bawah ini menunjukkan nilai *default* untuk setiap opsi.

```yaml
---
# id tema atau nama paket
theme: 'default'
# judul slide anda, akan secara otomatis mengambil dari slide pertama jika tidak diatur
title: ''
# titleTemplate untuk laman web, `%s` akan diganti dengan judul halaman
titleTemplate: '%s - Slidev'

# mengaktifkan pengunduhan pdf di SPA build, dapat juga berupa url kustom
download: true
# highlighter sintaks, dapat berupa 'prism' atau 'shiki'
highlighter: 'prism'
# menampilkan nomor baris di blok kode
lineNumbers: false
# mengaktifkan editor monaco, secara default hanya di mode pengembangan
monaco: 'dev'

# memaksa skema warna untuk slide, dapat berupa 'auto', 'light', atau 'dark'
colorSchema: 'auto'
# mode router untuk vue-router, dapat berupa 'history' atau 'hash'
routerMode: 'history'
# rasio aspek untuk slide
aspectRatio: '16/9'
# lebar sebenarnya untuk kanvas, unit dalam px
canvasWidth: 980

# favicon, dapat berupa file lokal atau url
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# font akan diimpoer secara otomatis dari Google Fonts
# perlajari lebih lanjut di: https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# fronmatter default akan diaplikasikan di seluruh slide
defaults:
  layout: 'default'
  # ...

# informasi untuk slide anda, dapat berupa string markdown
info: |
  ## Slidev
  My first [Slidev](http://sli.dev/) presentations!
---
```

Kunjungi [definisi tipe](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) untuk opsi lebih lanjut.

## Struktur Direktori

Slidev menggunakan konvensi struktur direktori untuk meminimalisir konfigurasi di permukaan dan membuat fungsi ekstensi  lebih fleksibel fan intuitif.

Rujuk ke bagian [Struktur Direktori](/custom/directory-structure).

## Alat Konfigurasi

- [Highlighter](/custom/highlighters)
- [Konfigurasi Vue](/custom/config-vue)
- [Konfigurasi Vite](/custom/config-vite)
- [Konfigurasi Windi CSS](/custom/config-windicss)
- [Konfigurasi Monaco](/custom/config-monaco)
- [Konfigurasi KaTeX](/custom/config-katex)
- [Konfigurasi Mermaid](/custom/config-mermaid)
