import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://tamdao2023.netlify.app'),
  title: 'Tam Đảo 2023 | Microlens',
  description: 'Kỷ niệm chuyến đi Tam Đảo 2023',
  openGraph: {
    title: 'Tam Đảo 2023 | Microlens',
    description: 'Kỷ niệm chuyến đi Tam Đảo 2023',
    url: 'https://tamdao2023.netlify.app',
    siteName: 'Tam Đảo 2023 | Microlens',
    images: [
      {
        url: '/og-image.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'vi-VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tam Đảo 2023 | Microlens',
    description: 'Kỷ niệm chuyến đi Tam Đảo 2023',
    creator: '@torn4dom4n',
    images: ['/og-image.jpg'],
  },
  icons: {
    shortcut: '/favicon.svg',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-black antialiased'>{children}</body>
    </html>
  );
}
