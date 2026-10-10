import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { assetPath } from '@/lib/asset-path';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Phyres.ai | AI Hardware Security',
  icons: { icon: assetPath('/favicon.svg') },
  description:
    'Independent fault-injection, execution-integrity and physical-leakage evaluation for AI running on real hardware.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
