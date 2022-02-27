# Menggunakan Tema

Mengubah tema di Slidev sangat mudah. Yang perlu Anda lakukan adalah menambahkan opsi `theme:` di frontmatter Anda.

```yaml
---
theme: seriph
---
```

Anda dapat memulai server, yang akan meminta Anda untuk menginstal tema secara otomatis

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

atau pasang secara manual melalui

```bash
$ npm install @slidev/theme-seriph
```

Dan itu saja, nikmati tema barunya! Untuk detail lebih lanjut tentang penggunaan, Anda dapat merujuk ke README tema.

Ingin membagikan tema Anda? Pelajari tentang [cara membuat tema](/themes/write-a-theme).

## Meng-*eject* Tema

Jika anda ingin kontrol penuh atas tema saat ini, anda dapat meng-*eject* tema ke sistem file lokal dan mengubahnya sesuai keinginan, dengan perintah berikut:

```bash
$ slidev theme eject
```

Ini akan mengeluarkan tema yang Anda gunakan saat ini ke `./theme`, dan mengubah frontmatter Anda menjadi:

```yaml
---
theme: ./theme
---
```

Ini juga dapat membantu jika Anda ingin membuat tema berdasarkan tema yang sudah ada. Jika ya, ingatlah untuk menyebutkan tema asli dan penulisnya :)

## Tema Lokal

As you probably found out from the previous section, you can have a local theme for your project. By having a **relative path** in your theme field.
Seperti yang mungkin Anda ketahui dari bagian sebelumnya, Anda dapat memiliki tema lokal untuk proyek Anda. Dengan memiliki **relative path** di bidang tema Anda.

```yaml
---
theme: ./path/to/theme
---
```

Rujuk ke bagian [bagaimana membuat tema](/themes/write-a-theme) untuk detail lebih lanjut.
