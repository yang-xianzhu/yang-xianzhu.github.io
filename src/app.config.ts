import type { Metadata } from 'next'

export const DONATE = {
  link: 'https://github.com/yang-xianzhu',
  qrcode: [
    'https://cdn.jsdelivr.net/gh/Innei/img-bed@master/20191211132347.png',
    'https://cdn.innei.ren/bed/2023/0424213144.png',
  ],
}

export const CONFIG = {
  /**
   * mark this book is work in progress
   */
  wip: true,
  /**
   * public book hostname
   */
  urlBase: 'https://github.com/yang-xianzhu',
}

export const SEO = {
  title: {
    absolute: `Yzz's Blog`,
    template: `%s | ${`Yzz's Blog`}`,
  },
  metadataBase: new URL(CONFIG.urlBase),
  twitter: {
    card: 'summary_large_image',
    creator: '@__oQuery',
    site: 'https://github.com/yang-xianzhu',
  },
  openGraph: {
    type: 'book',
    authors: ['Yzz'],
    tags: ['nextjs'],
    images: [],
  },
} satisfies Metadata
