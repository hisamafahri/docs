# Membuat Tema

Untuk memulai, kami sarankan Anda menggunakan generator kami untuk membuat perancah tema pertama Anda

```bash
$ npm init slidev-theme
```

Then you can modify and play with it. You can also refer to the [official themes](/themes/gallery) as examples.

## Kapabilitas

Sebuah tema dapat berkontribusi pada poin-poin berikut:

- Gaya global
- Menyediakan konfigurasi default (font, skema warna, *highlighter*, dll.)
- Memberikan tata letak khusus atau timpa yang sudah ada
- Memberikan komponen khusus atau timpa yang sudah ada
- Memperluas konfigurasi Windi CSS
- Konfigurasikan alat seperti Monaco dan Prism

## Konvensi

Tema diterbitkan ke registri npm, dan harus mengikuti konvensi di bawah ini:

- Nama paket harus diawali dengan `slidev-theme-`, misalnya: `slidev-theme-awesome`
- Tambahkan `slidev-theme` dan `slidev` di bidang `keywords` dari `package.json` Anda

## Persiapan

Untuk menyiapkan *testing playground* untuk tema Anda, Anda dapat membuat `example.md` dengan frontmatter berikut, untuk memberi tahu Slidev bahwa Anda menggunakan direktori saat ini sebagai tema.

```md
---
theme: ./
---
```

Secara opsional, Anda juga dapat menambahkan beberapa skrip ke `packages.json` Anda:

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

Untuk mempublikasikan tema Anda, cukup jalankan `npm publish` dan Anda telah siap. Tidak diperlukan proses build (yang berarti Anda dapat langsung memublikasikan file `.vue` dan `.ts`, Slidev cukup pintar untuk memahaminya).

Poin kontribusi tema mengikuti konvensi yang sama seperti penyesuaian lokal, silakan merujuk ke [dokumen untuk konvensi penamaan](/custom/).

## Konfigurasi Default

> Tersedia sejak v0.19

Sebuah tema dapat menyediakan [konfigurasi](/custom/#frontmatter-configures) default melalui `package.json`.

```json
// package.json
{
  "slidev": {
    "default": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

Font akan diimpor secara otomatis dari [Google Font](https://fonts.google.com/).

Pelajari lebih lanjut tentang [font](/custom/fonts) dan [konfigurasi frontmatter](/custom/#frontmatter-configures).

## Metadata Tema

### Skema Warna

Secara default, Slidev menganggap tema mendukung mode terang dan mode gelap. Jika Anda hanya ingin tema Anda ditampilkan dalam skema warna yang dirancang, Anda perlu menentukannya secara eksplisit di `package.json`

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // atau "dark" atau "both"
  }
}
```

Untuk mengakses mode gelap saat membuat gaya tema, Anda dapat membungkus css khusus mode gelap di dalam kelas `dark`:

```css
/* css umum di sini */

html:not(.dark) {
  /* lcss mode terang di sini */
}

html.dark {
  /* css mode gelap di sini */
}
```

Slidev mengaktifkan kelas `dark` pada elemen `html` halaman untuk beralih skema warna.

### Highlighter

Warna highlighter sintaks juga disediakan dalam tema. Kami mendukung [Prism](https://prismjs.com/) dan [Shiki](https://github.com/shikijs/shiki). Untuk informasi lebih lanjut, lihat [dokumentasi highlight sintaks](/custom/highlighters).

Anda dapat mendukung salah satu dari mereka, atau keduanya. Lihat tema default untuk contoh konfigurasi [`./styles/code.css`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/styles/code.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts).

Juga, ingatlah untuk menentukan highlighter yang didukung di `package.json` . Anda

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // atau "prism" atau "all"
  }
}
```

### Versi Slidev

Jika tema mengandalkan fitur khusus Slidev yang baru diperkenalkan, Anda dapat mengatur versi Slidev minimal yang diperlukan agar tema Anda berfungsi dengan baik:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

Jika pengguna menggunakan versi Slidev yang lebih lama, eror akan muncul.