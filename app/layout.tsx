import '@/app/globals.css';
import type { Metadata } from 'next';

const url = 'https://tamdao2023.netlify.app';
const title = 'Tam Đảo 2023';
const description = 'Kỷ niệm Tam Đảo 2023';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: title,
  description: description,
  icons: {
    icon: '/favicon.svg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='dark min-h-screen bg-background font-sans antialiased'>
        {children}
      </body>
    </html>
  );
}
