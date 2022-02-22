# Animasi

## Klik Animasi

### `v-click`

Untuk menerapkan "animasi klik" untuk elemen, Anda dapat menggunakan direktif `v-click` atau komponen `<v-click>`

```md
# Halo

<!-- Penggunaan komponen: ini tidak akan terlihat sampai Anda menekan "berikutnya" -->
<v-click>

Halo Dunia

</v-click>

<!-- Penggunaan direktif: ini tidak akan terlihat sampai Anda menekan "berikutnya" untuk kedua kalinya -->
<div v-click class="text-xl p-2">

Hai!

</div>
```

### `v-after`

Penggunaan `v-after` mirip dengan `v-click` tetapi akan membuat elemen terlihat ketika `v-click` sebelumnya dipicu.

```md
<div v-click>Halo</div>
<div v-after>Dunia</div>
```

Saat Anda mengklik tombol "berikutnya", `Halo` dan `Dunia` akan muncul bersamaan.

### `v-click-hide`

Sama seperti `v-click` tetapi alih-alih membuat elemen muncul, itu membuat elemen tidak terlihat setelah diklik.

```md
<div v-click-hide>Halo</div>
```

### `v-clicks`

`v-clicks` hanya disediakan sebagai komponen. Ini adalah singkatan untuk menerapkan direktif `v-click` ke semua elemen turunannya. Ini sangat berguna ketika bekerja dengan daftar.

```md
<v-clicks>

- Butir 1
- Butir 2
- Butir 3
- Butir 4

</v-clicks>
```

Item akan terlihat setiap kali Anda mengklik "berikutnya".

### Jumlah Klik Kustom

Secara default, Slidev menghitung berapa banyak langkah yang diperlukan sebelum pergi ke slide berikutnya. Anda dapat mengganti setelan ini dengan meneruskan opsi `clicks` frontmatter:

```yaml
---
# 10 klik di slide ini, sebelum lanjut ke slide berikutnya
clicks: 10
---
```

### Penyusunan

Melewati indeks klik ke arahan Anda, Anda dapat menyesuaikan urutan pengungkapan

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- urutannya dibalik -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- terlihat setelah 3 klik -->
<v-clicks at="3">
  <div>Hai</div>
</v-clicks>
```

### Transisi Elemen

Saat Anda menerapkan direktif `v-click` ke elemen Anda, itu akan melampirkan nama kelas `slidev-vclick-target` ke dalamnya. Saat elemen disembunyikan, nama kelas `slidev-vclick-hidden` juga akan dilampirkan. Sebagai contoh:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Teks</div>
```

Setelah klik, itu akan menjadi

```html
<div class="slidev-vclick-target">Teks</div>
```

Secara default, transisi *opacity* yang halus diterapkan ke kelas-kelas tersebut:

```css
// default

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Anda dapat menimpanya untuk menyesuaikan efek transisi di lembar gaya kustom Anda.

Misalnya, Anda dapat mencapai transisi penskalaan dengan:

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Untuk menentukan animasi hanya untuk slide atau tata letak tertentu

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

Pelajari lebih lanjut tentang [kustomisasi style](/custom/directory-structure#style).

## Gerak

Slidev memiliki [@vueuse/motion](https://motion.vueuse.org/) bawaan. Anda dapat menggunakan direktif `v-motion` ke elemen apa pun untuk menerapkan gerakan pada elemen tersebut. Sebagai contoh

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

Teks `Slidev` akan berpindah dari `-80px` ke posisi aslinya saat inisialisasi.

> Catatan: Slidev mempramuat slide berikutnya untuk performa, yang berarti animasi mungkin dimulai sebelum Anda menavigasi ke halaman. Untuk membuatnya berfungsi dengan baik, Anda dapat menonaktifkan pramuat untuk slide tertentu
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Atau kendalikan siklus hidup elemen dengan `v-if` untuk mendapatkan kontrol yang lebih detail
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

Mode belajar: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Preset](https://motion.vueuse.org/presets.html)

## Transisi Halaman

> Dukungan bawaan untuk slide BELUM tersedia dalam versi saat ini. Kami berencana untuk menambahkan dukungan untuk mereka di versi utama berikutnya. Sebelum itu, Anda masih dapat menggunakan gaya dan pustaka khusus untuk melakukannya.