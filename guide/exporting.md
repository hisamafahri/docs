# Mengekspor

## PDF

> Mengeksor ke PDF atau PNG mengandalkan [Playwright](https://playwright.dev) untuk rendering. Anda akan perlu untuk memasang [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) untuk menggunakan fitur ini.
> Jika anda mengekspor di lingkungan CI, [panduan CI playwright](https://playwright.dev/docs/ci) akan berguna.

Pasang `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Lalu, ekspor slide anda ke PDF menggunakan perintah berikut:

```bash
$ slidev export
```

Setelah beberapa detik, slide anda akan siap di `./slides-exports.pdf`.

### Mengekspor Langkah Klik

> Tersedia sejak v0.21

Secara default, Slidev mengekspor satu halapamn per slide dengan animasi klik dinonaktifkan. Jika anda ingin mengekspor slide dengan beberapa langkah ke dalam beberapa halaman, tambahkan opsi `--with-clicks`.

```bash
$ slidev export --with-clicks
```

## PNG

Saat menambahkan opsi `--format png`, Slidev akan mengekspor gambar PNG untuk setiap slide daripada sebuah PDF.

```bash
$ slidev export --format png
```

## Aplikasi Satu Halaman (Single-Page Application/SPA)

Lihat [Hosting Statis](/guide/hosting).
