// @ts-check

const Guide = [
  {
    text: 'Mengapa Slidev',
    link: '/guide/why',
  },
  {
    text: 'Memulai',
    link: '/guide/',
  },
  {
    text: 'Pemasangan',
    link: '/guide/install',
  },
  {
    text: 'Sintaks Markdown',
    link: '/guide/syntax',
  },
  {
    text: 'Navigasi',
    link: '/guide/navigation',
  },
  {
    text: 'Animasi',
    link: '/guide/animations',
  },
  {
    text: 'Mengekspor',
    link: '/guide/exporting',
  },
  {
    text: 'Hosting Statis',
    link: '/guide/hosting',
  },
  {
    text: 'Rekam Presentasi',
    link: '/guide/recording',
  },
  {
    text: 'Mode Penampil',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Menggambar & Anotasi',
    link: '/guide/drawing',
  },
  {
    text: 'Integrasi Editor',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const Theme = [
  {
    text: 'Gunakan Tema',
    link: '/themes/use',
  },
  {
    text: 'Galeri Tema',
    link: '/themes/gallery',
  },
  {
    text: 'Buat Tema',
    link: '/themes/write-a-theme',
  },
]

const Translations = [
  {
    text: 'Bahasa Indonesia',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
  {
    text: 'Kustomisasi',
    link: '/custom/',
  },
  {
    text: 'Struktur Direktori',
    link: '/custom/directory-structure',
  },
  {
    text: 'Fonts',
    link: '/custom/fonts',
  },
  {
    text: 'Highlighter',
    link: '/custom/highlighters',
  },
  {
    text: 'Konfigurasi Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Konfigurasi Vite',
    link: '/custom/config-vite',
  },
  {
    text: 'Konfigurasi Windi CSS',
    link: '/custom/config-windicss',
  },
  {
    text: 'Konfigurasi Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'Konfigurasi KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Konfigurasi Mermaid',
    link: '/custom/config-mermaid',
  },
  {
    text: 'Konfigurasi Shortcuts',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Konteks Global Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Layer Global',
    link: '/custom/global-layers',
  }
]

const Resources = [
  {
    text: 'Pameran',
    link: '/showcases',
  },
  {
    text: 'Sumber Belajar',
    link: '/resources/learning',
  },
  {
    text: 'Sampul Pilihan',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
    text: 'Petunjuk',
    children: Guide,
  },
  {
    text: 'Tema',
    children: Theme,
  },
  {
    text: 'Kustomisasi',
    children: Customizations,
  },
  {
    text: 'Bawaan',
    children: [
      {
        text: 'Komponen',
        link: '/builtin/components',
      },
      {
        text: 'Tata Letak',
        link: '/builtin/layouts',
      },
    ],
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Slidev',
  description: 'Slide Presentasi untuk Pengembang',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentation slides for developers' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Sarankan perubahan pada halaman ini',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:en']
      }
    },

    nav: [
      {
        text: 'Petunjuk',
        items: Guide,
      },
      {
        text: 'Tema',
        items: Theme,
      },
      {
        text: 'Kustomisasi',
        items: Customizations,
      },
      {
        text: 'Sumber',
        items: Resources,
      },
      {
        text: 'Bahasa Indonesia',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
