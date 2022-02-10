# Konfigurasi Mermaid

<Environment type="client" />

Buat `./setup/mermaid.ts` dengan isi:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

Dengan pengaturan ini, anda dapat menyediakan pengaturan kustom untuk [Mermaid](https://mermaid-js.github.io/). Rujuk ke definisi tipe dan dokumentasi untuk lebih detail.
