# Fonts

> Tersedia sejak v0.20

Anda dapat menggunakan HTML dan CSS untuk mengatur font dan *style* slide anda sesuai keinginan, Slidev juga menyediakan cara yang mudah untuk menggunakannya.

Di *frontmatter* anda, atur seperti berikut

```yaml
---
fonts:
  # teks dasar
  sans: 'Robot'
  # gunakan dengan kelas css `font-serif` dari windicss
  serif: 'Robot Slab'
  # untuk blok kode, baris kode, dll.
  mono: 'Fira Code'
---
```

Cukup itu saja.

Font akan **diimpor secara otomatis dari [Google Fonts](https://fonts.google.com/)**. Hal tersebut berarti anda dapat menggunakan font apapun yang tersedia dari Google Fonts secara langsung.

## Font Lokal

Secara *default*, Slidev berasumsi bahwa semua font diatur melalui konfigurasi `fonts` dari Google Fonts. Jika and ingin menggunakan font lokal, atur `fonts.local` untuk *opt-out* dari auto-impor.

```yaml
---
fonts:
  # seperti `font-family` di css, anda dapat menggunakan `,` untuk memisahkan beberapa font secara bersamaan
  sans: 'Helvetica Neue,Robot'
  # menandakan bahwa 'Helvetica Neue' sebagai font lokal
  local: 'Helvetica Neue'
---
```

## Ketebalan & Kemiringan

Secara *default*, Slidev mengimpot tiga ketebalan `200`,`400`, dan `600` untuk setiap font. Anda dapat mengaturnya dengan:

```yaml
---
fonts:
  sans: 'Robot'
  # default
  weights: '200,400,600'
  # mengimpor font italic (miring), default `false`
  italic: false
---
```

Konfigurasi ini berlaku untuk semua font web. Untuk kontrol lebih detail pada setiap ketebalan font, anda harus mengimpr ketebalan satu-per-satu dengan [HTML](/custom/directory-structure.html#index-html) dan CSS.

## Font Pengganti

Secara umum, anda hanya perlu mengatur "font spesial" dan Slidev akan menambahkan dan mengganti font untuk anda, misalnya:

```yaml
---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

akan menghasilkan

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Jika anda ingin menonaktifkan font pengganti, atur sebagai berikut

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## Penyedia

- Opsi: `google` | `none`
- Default: `google`

Saat ini, hanya Gogle Font yang didukung, kami merencanakan untuk menambahkan peneyedia lain di masa depan. Atur ke `none` untuk menonaktifkan fitur auto-impor secara penuh dan menganggap seluruh font adalah lokal.

```yaml
---
fonts:
  provider: 'none'
---
```


