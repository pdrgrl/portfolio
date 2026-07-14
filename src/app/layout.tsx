import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pedro Grilo — Systems & Infrastructure Engineer',
  description:
    'Systems and infrastructure engineer with 6+ years in enterprise IT, specialising in Python, FastAPI, Docker, and DevSecOps. Open to remote roles.',
  openGraph: {
    title: 'Pedro Grilo — Systems & Infrastructure Engineer',
    description: 'Systems and infrastructure engineer based in Lisbon, Portugal. 6+ years experience in enterprise IT.',
    url: 'https://pedrogrilo.dev',
    siteName: 'Pedro Grilo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Grilo — Systems & Infrastructure Engineer',
    description: 'Systems and infrastructure engineer based in Lisbon, Portugal.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-bg text-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
