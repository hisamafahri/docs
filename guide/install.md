# Pemasangan

## Template Pemula

> Slidev membutuhkan [**Node.js >=14.0**](https://nodejs.org/)

Cara terbaik untuk memulai adalah menggunakan template starter resmi kami.

Dengan NPM:

```bash
$ npm init slidev@latest
```

Dengan Yarn:

```bash
$ yarn create slidev
```

Ikuti petunjuknya dan itu akan membuka tayangan slide di http://localhost:3030/ secara otomatis untuk Anda.

Itu juga berisi pengaturan dasar dan demo singkat dengan instruksi tentang cara memulai Slidev.

## Pemasangan Manual

Jika Anda masih lebih suka menginstal Slidev secara manual atau ingin mengintegrasikannya ke dalam proyek Anda yang sudah ada, Anda dapat melakukan:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Harap diperhatikan jika Anda menggunakan [pnpm](https://pnpm.io), Anda harus mengaktifkan opsi [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) agar Slidev berfungsi dengan baik :
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Pemasangan secara Global

> Tersedia sejak v0.14

Anda dapat menginstal Slidev secara global dengan perintah berikut:

```bash
$ npm i -g @slidev/cli
```

Dan kemudian gunakan `slidev` di mana saja tanpa membuat proyek setiap saat.

```bash
$ slidev
```

Perintah ini juga akan mencoba menggunakan `@slidev/cli` lokal jika telah ditemukan di `node_modules`.

## Pemasangan di Docker

Jika Anda membutuhkan cara cepat untuk menjalankan presentasi dengan container, Anda dapat menggunakan image [docker](https://hub.docker.com/r/stig124/slidev) bawaan yang dikelola oleh [stig124](https://github.com/Stig124), atau buat *image* anda sendiri.

Rujuk ke [slidevjs/container repo](https://github.com/slidevjs/container) untuk detail lebih lanjut.
