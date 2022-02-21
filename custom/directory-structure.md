# Struktur Direktori

Slidev menggunakan beberapa aturan struktur untuk mengurangi konfigurasi di permukaan dan untuk membuat fungsionalitas ekstensi fleksibel dan intuitif.

Struktur dasarnya adalah:

```bash
your-slidev/
  ├── components/       # komponen kustom
  ├── layouts/          # tata letak kustom
  ├── public/           # aset statis
  ├── setup/            # pengaturan / hooks kustom
  ├── styles/           # style kustom
  ├── index.html        # injeksi ke index.html
  ├── slides.md         # entri slide utama
  └── vite.config.ts    # perluasan konfigurasi vite
```

Seluruhnya bersifat opsional.

## Komponen (Components)

Konvensi: `./components/*.{vue,js,ts,jsx,tsx,md}`

Komponen di dalam direktori dapat digunakan secara langsung di slide Markdown dengan nama komponen sama dengan nama file.

Contohnya:

```bash
your-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# Slide Saya

<MyComponent :count="4"/>

<!-- kedua jenis penamaan berfungsi -->

<hello-world foo="bar">
  Slot
</hello-world>
```

Fitur ini diberdayakan oleh [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components), pelajari lebih lanjut di sana.

Slidev juga menyediakan beberapa [komponen bawaan](/builtin/components) untuk anda gunakan.

## Tata Letak (Layouts)

Konvensi: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

Anda dapat menggunakan nama file apapun untuk tata letak anda. Lalu anda dapat merujuk tata letak anda di *YAML header* menggunakan nama file tersebut.

```yaml
---
layout: my-cool-theme
---
```

Jika tata letak yang anda sediakan memiliki nama yang sama dengan tata letak atau tema bawaan, tata letak kustom anda akan lebih diutamakan dibandingkan dengan tata letak atau tema bawaan. Urutan prioritasnya adalah: `lokal > tema > bawaan`.

Di komponen tat letak, gunakan `<slot/>` untuk konten slide. Contohnya:

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## Public

Konvensi: `./public/*`

Aset di direktori ini akan disediakan di *root path* `/` saat pengembangan, dan disalin ke *rott* direktori dist apa adanya. Pelajari lebih lanjut tentanf [direktori `public` Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

## Style

Konvensi: `./style.css` | `./styles/index.{css,js,ts}`

File yang mengikuti konvensi ini akan disuntikkan ke *root* aplikasi. Jika anda perlu untuk mengimpor beberapa entri css, anda dapat membuar struktur di bawah ini dan mengatur urutan impor anda sendiri.

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

Style akan diproses oleh [Windi CSS](http://windicss.org/) dan [PostCSS](https://postcss.org/), sehingga anda dapat menggunakan *css nesting* dan [at-directives](https://windicss.org/features/directives.html) secara langsung. Misalnya:

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[Pelajari lebih lanjut tentang sintaksnya](https://windicss.org/features/directives.html).

## `index.html`

Konvensi: `index.html`

File `index.html` menyediakan kemampuan untuk memasukkan tag meta dan/atau *scripts* ke `index.html` utama.

Misalnya, file `index.html` kustom di bawah ini:

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

File `index.html` akhir akan menjadi:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Tata Letak Global

Konvensi: `global-top.vue` | `global-bottom.vue`

Pelajari lebih lanjut: [Tata Letak Global](/custom/global-layers)

