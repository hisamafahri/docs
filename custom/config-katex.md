# Konfigurasi KaTeX

<Environment type="node" />

Buat `./setup/katex.ts` dengan isi:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

Dengan pengaturan ini, anda dapat menyediakan pengaturan kustom untuk [KaTex Options](https://katex.org/docs/options.html). Rujuk ke definisi tipe dan dokumentasi untuk lebih detail.
