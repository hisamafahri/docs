# Konfigurasi Vite

<Environment type="node" />

Slidev didukung dengan [Vite](http://vitejs.dev/) dibaliknya. Hal ini berarti anda dapat memanfaatkan sistem plugin luar biasa Vite untuk mengkustomisasi slide lebih jauh lagi.

Fail `vite.config.ts` akan bermanfaat bila anda memilikinya.

Slidev memiliki plugin berikut ini sudah terkonfigurasi sebelumnya:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

Pelajari lebih lanjut tentang [pre-configurations di sini](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Mengkonfigurasi Plugin Internal

> Tersedia sejak v0.21

Untuk mengkonfigurasi daftar plugin bawaan di atas, buat fail `vite.config.ts` dengan isi sebaai berikut. Harap dicatat bahwa Slidev memiliki beberapa opsi yang telah diatur sebelumnya untuk plugin-plugin tersebut, konfigurasi ini akan mengubah beberapa diantarnya, yang dapat berpotensi menyebabkan aplikasi rusak/tidak berjalan sebagaimana mestinya. Harap anggap inin sebagai **fitur lanjutan**, pastikan anda tau apa yang anda lakukan sebelum melanjutkan.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

Lihat [type declarations](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) untuk opsi lainnya.
