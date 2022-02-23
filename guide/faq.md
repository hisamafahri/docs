# FAQ

## Grid (Kisi)

Karena Slidev berdasarkan pada Web, anda dapat mengaplikasikan tata letak kisi sesuai keinginan anda. [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), atau bahkan [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/), anda dapat kontrol penuh.

Karena kita menyediakan [Windi CSS](https://windicss.org/) secara bawaan, berikut salah satu cara sederhana untuk referensi anda:

```html
<div class="grid grid-cols-2 gap-4">
<div>

Kolom pertama

</div>
<div>

Kolom kedua

</div>
</div>
```

Lebih dalam lagi, anda dapat mengkustomisasi ukuran setiap kolom seperti:

```html
<div class="grid grid-cols-[200px,1fr,10%] gap-4">
<div>

Kolom pertama (200px)

</div>
<div>

Kolom kedua (auto fit)

</div>
<div>

Kolom ketiga (10% width to parent container)

</div>
</div>
```

Pelajari lebih lanjut di [Windi CSS Grids](https://windicss.org/utilities/grid.html).

## Pemosisian

Slide didefinisikan dengan ukuran tetap (default `980x552px`) dan akan diskalakan sesuai dengan ukuran layar. Anda dapat secara aman menggunakan posisi absolute di slide anda karena mereka akan diskalakan sesuai dengan layar.

Misalnya:

```html
<div class="absolute left-30px bottom-30px">
Ini adalah footer rata kiri-bawah
</div>
```

Untuk mengubah ukuran kanvas yang sebenarnya, anda dapat menambahkan opsi `canvasWidth` di frontmatter pertama:

```yaml
---
canvasWidth: 800
---
```

## Ukuran Font

Jika anda merasa ukuran font di slide anda terlalu kecil, anda dapat mengaturnya melalui beberapa cara:

### Mengganti Style Lokal

Anda dapat mengganti style untuk setiap slide dengan menggunakan tag `<style>`.

```md
# Halaman 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Halaman 2

Halaman ini tidak akan terpengaruh.
```

Pelajari Lebih Lanjut: [Embedded Styles](/guide/syntax.html#embedded-styles)

### Mengganti Style Global

Anda dapat menyediakan style global khusus dengan membuat `./style.css`, misalnya:

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

Pelajari Lebih lanjut: [Style Global](/custom/directory-structure.html#style)

### Menskalakan Canvas

Mengubah ukuran kanvas yang sebenarnya akan menskalakan seluruh konten (teks, gambar, komponen, dll) dan seluruh slide.

```yaml
---
# default: 980
# karena kavas mengecil, ukuran visual akan menjadi lebih besar
canvasWidth: 800
---
```

### Menggunakan Transform

Kami menyediakan komponen bawaan `<Transform />`, yang merupakan *thin wrapper* dari properti *transform* CSS.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
