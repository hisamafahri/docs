# Konfigurasi Windi CSS

<Environment type="node" />

Markdown secara alami mendukung *embedded HTML markups*. Anda dapat mengatur *style* konten anda sesuai keinginan anda. Agar lebih nyaman, kami memiliki [Windi CSS](https://github.com/windicss/windicss) secara bawaan, sehingga anda dapat mengatur gaya/style markup secara langsung menggunakan kelas.

Contohnya:

```html
<div class="grid pt-4 gap-4 grids-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

[Attributify Mode](https://windicss.org/posts/v30.html#attributify-mode) di [Windi CSS v3.0](https://windicss.org/posts/v30.html) diaktifkan secara default.

## Konfigurasi

Untuk mengkonfigurasi Windi CSS, buat `setup/windicss.ts` dengan isi sebagai berikut untuk memperluas konfigurasi bawaan:

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

Pelajari lebih lanjut tentang [konfigurasi Windi CSS](https://windicss.org/guide/configuration.html)
