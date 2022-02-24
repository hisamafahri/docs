# Memulai

## Ringkasan

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> adalah pembuat dan penyaji slide berbasis web. Ini dirancang untuk pengembang untuk fokus pada penulisan konten di Markdown sementara juga memiliki kekuatan komponen HTML dan Vue untuk memberikan tata letak dan desain piksel yang sempurna dengan demo interaktif yang disematkan di presentasi Anda.

Ini menggunakan file Markdown yang kaya fitur untuk menghasilkan slide yang indah dengan pengalaman memuat ulang instan, bersama dengan banyak integrasi bawaan seperti pengkodean langsung, ekspor PDF, rekaman presentasi, dan sebagainya. Karena didukung oleh web, Anda dapat melakukan apa saja dengan Slidev - kemungkinannya tidak terbatas.

Anda dapat mempelajari lebih lanjut tentang alasan di balik proyek di bagian [Mengapa Slidev](/guide/why).

### Fitur-fitur

- 📝 [**Berbasis Markdown**](/guide/syntax.html) - gunakan editor dan alur kerja favorit anda.
- 🧑‍💻 [**Ramah Pengembang**](/guide/syntax.html#code-blocks) - sintaks *highlighter* bawaan, pengkodean langsung, dll.
- 🎨 [**Bertema**](/themes/gallery.html) - tema dapat dibagikan dan digunakan dengan paket npm
- 🌈 [**Bergaya**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) utilitas sesuai permintaan, lembar gaya tertanam yang mudah digunakan
- 🤹 [**Interaktif**](/custom/directory-structure.html#components) - menyematkan komponen Vue dengan mulus
- 🎙 [**Mode Penampil**](/guide/presenter-mode.html) - gunakan jendela lain, atau bahkan ponsel Anda untuk mengontrol slide Anda
- 🎨 [**Menggambar**](/guide/drawing.html) - menggambar dan membubuhi keterangan pada slide Anda
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - dukungan persamaan matematika LaTeX bawaan
- 📰 [**Diagram**](/guide/syntax.html#diagrams) - membuat diagram dengan deskripsi tekstual
- 🌟 [**Ikon**](/guide/syntax.html#icons) - akses ke ikon dari set ikon mana pun secara langsung
- 💻 [**Editor**](/guide/editors.html) - editor terintegrasi, or [ekstensi untuk VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Rekaman**](/guide/recording.html) - perekaman internal dan tampilan kamera
- 📤 [**Portable**](/guide/exporting.html) - ekspor ke PDF, PNG, atau bahkan SPA (single-page appllication) yang dapat dihosting
- ⚡️ [**Cepat**](https://vitejs.dev) - reload instan didukung oleh [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - menggunakan plugin Vite, komponen Vue, atau paket npm apa pun

### Tech Stack

Slidev dimungkinkan dengan menggabungkan alat dan teknologi ini.

- [Vite](https://vitejs.dev) - Perkakas frontend yang sangat cepat
- [Vue 3](https://v3.vuejs.org/) diberdayakan dengan [Markdown](https://daringfireball.net/projects/markdown/syntax) - Fokus pada konten sambil memiliki kekuatan komponen HTML dan Vue kapan pun dibutuhkan
- [Windi CSS](https://github.com/windicss/windicss) - Kerangka kerja CSS utilitas pertama sesuai permintaan, style slide Anda sesuai keinginan
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Dukungan cuplikan kode kelas atas dengan kemampuan pengkodean langsung
- [RecordRTC](https://recordrtc.org) - Perekaman dan tampilan kamera bawaan
- Keluarga [VueUse](https://vueuse.org) -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), dll.
- [Iconify](https://iconify.design/) - Koleksi set ikon
- [Drauu](https://github.com/antfu/drauu) - Dukungan gambar dan anotasi
- [KaTeX](https://katex.org/) - Render matematika LaTeX
- [Mermaid](https://mermaid-js.github.io/mermaid) - Diagram tekstual

### Membuat Presentasi Pertama Anda

<br>

#### Coba *Online*

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### Buat Secara Lokal

Dengan NPM:

```bash
$ npm init slidev
```

Dengan Yarn:

```bash
$ yarn create slidev
```

Ikuti petunjuknya dan mulailah membuat slide Anda sekarang! Untuk detail lebih lanjut tentang sintaks Markdown, baca [panduan sintaks](/guide/syntax).

### Antarmuka Baris Perintah (*Command Line Interface*)

Dalam proyek di mana Slidev diinstal, Anda dapat menggunakan biner `slidev` dalam skrip npm Anda.

```json
{
  "scripts": {
    "dev": "slidev", // memulai dev server
    "build": "slidev build", // buat production SPA
    "export": "slidev export" // ekspor slide ke PDF
  }
}
```

Jika tidak, Anda dapat menggunakannya dengan [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Jalankan `slidev --help` untuk opsi lain yang tersedia.

### Sintaks Markdown

Slidev membaca file `slides.md` Anda di bawah root proyek Anda dan mengubahnya menjadi slide. Setiap kali Anda membuat perubahan, konten slide akan segera diperbarui. Sebagai contoh:

~~~md
# Slidev

Hello World

---

# Halaman 2

Langsung gunakan blok kode untuk highlighting

//```ts
console.log('Hello, World!')
//```

---

# Halaman 3
~~~

Baca lebih lanjut tentang sintaks Slidev Markdown di [panduan sintaks](/guide/syntax).
