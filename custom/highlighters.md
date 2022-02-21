# Highlighter

Slidev memiliki dua *highlighter* sintaks bawaan yang dapat anda pilih:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** adalah salah satu *highlighter* sintaks paling populer. *Higlighting* dilakukan dengan menambahkan kelas token ke kode dan diwarnai menggunakan CSS. Anda dapat menelusuri [tema resmi](https://github.com/PrismJS/prism-themes), atau membuat/menyesuaikannya sendiri dengan sangat mudah menggunakan [`prism-theme-vars`](https://github.com/antfu/prisma-tema-vars).

**Shiki**. Di sisi lain, Shiki adalah *highlighter* sintaks yang didukung tata bahasa TextMate. Ini menghasilkan token berwarna, jadi tidak diperlukan CSS tambahan. Karena memiliki dukungan tata bahasa yang hebat, warna yang dihasilkan sangat akurat, seperti yang akan Anda lihat di VS Code. Shiki juga hadir dengan [beberapa tema bawaan](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Kelemahan dari Shiki adalah ia juga membutuhkan tema TextMate (kompatibel dengan tema VS COde) untuk melakukan penyorotan, yang bisa sedikit lebih sulit untuk disesuaikan.

Tema Slidev pada umumnya mendukung Prism dan Shiki, akan tetapi bergantung pada tema yang anda gunakan, mungkin hanya akan mendukung salah satu darinya.

Saat anda memiliki pilihan, pertukarannya oada dasarnya hanyalah:

- **Prism** lebih mudah dikustomisasi
- **Shiki** *highlighting* lebih akurat

Secara *default*, Slidev menggunakan Prism. Anda dapat menggantinya dengan memondifikasi *frontmatter* anda:

```yaml
---
highlighter: shiki
---
```

## Konfigurasi Prism

Untuk mengkonfigurasi Prism anda, anda hanya perlu mengimpor tema css atau menggunakan [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) untuk mengkonfigurasi tema mode terang dan gelap. Rujuk ke dokumentasi terkait untuk detail lebih lanjut.

## Konfigurasi Shiki

<Environment type="node" />

Buat file `./setup/shiki.ts` dengan isi:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Rujuk ke [dokumentasi Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) untuk nama tema yang tersedia.

Atau jika anda ingin menggunakan tema anda sendiri:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```
