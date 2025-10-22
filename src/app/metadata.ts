const metadata = {
  title: 'Personal Template',
  description: 'Personal template used to more quickly build applications.',
  keywords: [
    
  ],
  authors: [{ name: 'Andrew Chupka' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicons/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        rel: 'icon',
        url: '/favicons/favicon.svg',
        type: 'image/svg+xml'
      },
    ]
  },
  manifest: '/favicons/site.webmanifest',
  openGraph: {
    title: 'Personal Template',
    description: 'Personal template used to more quickly build applications.',
    url: 'https://example.com',
    images: [
      {
        url: '/og-image.png', // Place this image in your /public folder
        width: 1200,
        height: 630,
        alt: 'Ut enim ad minim veniam.'
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Template',
    description: 'Personal template used to more quickly build applications.',
    images: ['/og-image.png']
  },
};

export default metadata;
