# Komponen

## Komponen Bawaan

> The documentations of this section is still working in progress. Before that, you can take a look at the [source code](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) directly.
> Dokumentasi bagian ini masih dalam masa pengerjaan. Oleh karena itu, anda dapat melihat [kode sumber](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) secara langsung.

### `TOC`

Tambahkan daftar isi (*table of content*)

Judul dan level judu secara otomatis diambil dari elemen judul pertama pada setiap slide. Anda dapat mengubah perilaku otomatis ini untuk sebuah slide dengan menggunakan sintaks *front matter*:

```yml
---
title: Judul slide yang keren
level: 2
---
```

Atau jika anda ingin slide untuk tidak terdaftar di daftar isi, anda dapat menggunakan:

```yml
---
hideInToc: true
---
```

#### Penggunaan
~~~md
<Toc />
~~~

Parameter:

* `columns` (`string | number`, default: `1`): Jumlah kolom yang ditampilkan
* `maxDepth` (`string | number`, default: `Infinity`): Tingkat kedalaman maksimum judul untuk ditampilkan
* `minDepth` (`string | number`, default: `1`):  Tingkat kedalaman minimum judul untuk ditampilkan
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Tampilkan semua item
  * `'onlyCurrentTree'`: Tampilkan hanya item yang ada di *tree* saat ini (item aktif, *parent item*, dan sub-item dari item aktif)
  * `'onlySiblings'`: Tampilkan hanya item yang ada di *tree* saat ini dan yang setingkat

## Komponen Kustom

Buat direktori `components/` di *root* projek anda, dana tambahkan komponen Vue kustom anda di dalamnya, lalu anda dapat menggunakannya dengan nama yang sama di dalam fail markdown anda!

Baca lebih lanjut di bagian [Kustomisasi](/custom/directory-structure#components).

## Komponen Bawaan Tema

Tema dapat menyediakan tema. Harap baca dokumentasi yang bersangkutan untuk melihat komponen yang disediakan.

Baca lebih lanjut di bagian [struktur direktori](/custom/directory-structure).
