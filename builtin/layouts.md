# Tata Letak

## Tata Letak Bawaan

> Tema dapat saja merubah tata letak, untuk mengetahui tentang penggunaan, parameter, dan contoh harap merujuk ke dokumentasi terkait.


### `center`

Menampilkan konten di tengah layar.

### `cover`

Biasa digunakan untuk menampilkan sampul halaman presentasi, dapat mengandung judul presentasi, konteks, dll.

### `default`

Tata letak paling dasar, untuk menampilkan berbagai macam konten.

### `end`

Halaman terakhir presentasi.

### `fact`

Untuk menampilkan beberapa fakta atau data yang menonjol di layar.

### `full`

Menggunakan seluruh layar untuk menampilkan konten.

### `image-left`

Menunjukkan gambar di bagian kiri layar, konten akan ditempatkan di bagian kanan layar.

#### Penggunaan

```yaml
---
layout: image-left

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `image-right`

Menunjukkan gambar di bagian kanan layar, konten akan ditempatkan di bagian kiri layar.

#### Penggunaan

```yaml
---
layout: image-right

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `image`

Menunjukkan gambar sebagai konten utama halaman.

#### Penggunaan

```yaml
---
layout: image

# the image source
image: ./path/to/the/image
---
```


### `iframe-left`

Menunjukkan situs web di bagian kiri layar, konten akan ditempatkan di bagian kanan layar.

#### Penggunaan

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

Menunjukkan situs web di bagian kanan layar, konten akan ditempatkan di bagian kiri layar.

#### Penggunaan

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

Menunjukkan situs web sebagai konten utama halaman.

#### Penggunaan

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

Untuk mengenalkan presentasi, umumnya dengan menggunakan judul presentasi, deskripsi singkat, penulis, dll.

### `none`

Tata letak tanpa *style* apapun.

### `quote`

Untuk menampilkan kutipan dengan jelas.

### `section`

Digunakan untuk menandai awal dari bagian presentasi baru.

### `statement`

Untuk membuat penegasan/pernyataan sebagai isi halaman utama.

### `two-cols`

Memisahkan konten halaman dalam dua kolom.

#### Penggunaan


```md
---
layout: two-cols
---

# Kiri

Ini akan muncul di bagian kiri

::right::

# Kanan

Ini akan muncul di bagian kanan
```

## Tata Letak Kustom

Buat direktori `components/` di *root* projek anda, dana tambahkan komponen Vue kustom anda di dalamnya.

Baca lebih lanjut di bagian [kustomisasi](/custom/directory-structure#layouts).

## Tata Letak Bawaan Tema

Tema dapat menyediakan tema. Harap baca dokumentasi yang bersangkutan untuk melihat komponen yang disediakan.
