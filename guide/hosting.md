# Hosting Statis

## Membuat Aplikasi Satu Halaman (Single Page Applications/SPA)

Anda dapat membuat slide menjadi *self-hostable SPA*:

```bash
$ slidev build
```

Aplikasi yang dihasilkan akan tersedia di `dist/` dan anda dapat meng-*host* di [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), atau apapun yang anda inginkan. Sekarang anda dapat berbagi slide Anda dengan seluruh dunia dengan satu tautan.

### Path Dasar

Untuk menyebarkan slide anda di bawah sub-rute, anda perlu menambahkan opsi `--base`. Misalnya:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Rujuk ke [dokumentasi Vite's](https://vitejs.dev/guide/build.html#public-base-path) untuk detail lebih lanjut.

### Menyediakan PDF yang dapat Diunduh

Anda dapat menyediakan PDF yang dapat diunduh pembaca SPA anda dengan konfigurasi berikut:

```md
---
download: true
---
```

Slidev akan membuat sebuah PDF file sembari membuat aplikasi, dan tombol unduh akan ditampilkan di SPA anda.

Anda dappat menyediakan url khusus ke PDF. Dalam kasus tersebut, proses render akan dilewati.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

## Contoh

Berikut adalah beberapa contoh SPA yang telah diekspor:

- [Template Pemula](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) oleh [Anthony Fu](https://github.com/antfu)

Untuk lebih banyak, Kunjung [Pameran](/showcases).

## Hosting

Kami merekomendasikan untuk menggunakan `npm init slidev@lastest` untuk merancah projek anda, yang terdiri dari file konfigurasi yang diperlukan oleh layanan hosting secara otomatis.

### Netlify

- [Netlify](https://netlify.com/)

Buat `netlify.toml` di *root* projek anda dengan isi:

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Lalu pergi ke dasbor Netlify anda, buat situs baru dengan repositori.

### Vercel

- [Vercel](https://vercel.com/)

Buat `vercel.json` di *root* projek anda dengan isi:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Lalu pergi ke dasbor Vercel anda, buat situs baru dengan repositori.

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Buat `.github/workflows/deploy.yml` dengan isi sebagai berikut untuk menyebarkan slide anda ke GitHub Pages melalui GitHub Actions.

```yaml
name: Deploy pages
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
