# Konfigurasi Shortcuts

> Tersedia sejak v0.20

<Environment type="client" />

Buat `./setup/shortcuts.ts` dengan isi:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

Dengan pengaturan ini, anda dapat menyediakan pengaturan kusto untuk *shortcuts* di bagian [navigasi](/guide/navigation#bilah-navigasi). Konfigurasi di atas mengikat animasi atau slide berikutnya ke <kbd>enter</kbd> dan animasi atau slide sebelumnya ke <kbd>backspace</kbd>.

Fungsi konfigurasi menerima sebuah objek dengan beberapa metode navigasi, dan mengembalikan sebuah *array* yang mengandung beberapa konfigurasi *shortcut*. Rujuk ke definisi tipe untuk detail lebih lanjut.

Rujuk ke [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) untuk detail lebih lanjut tentang event tekan.
