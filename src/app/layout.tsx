import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jp-informatique.fr',
  description: 'Installation dépannage informatique',
  keywords: 'installation, dépannage, informatique, services IT, jp informatique, oise, somme',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <title>jp-informatique.fr</title>
        <meta name="description" content={"Installation dépannage informatique"} />
        <meta name="keywords" content="installation, dépannage, informatique, services IT, jp informatique, oise, somme" />
        <link rel="canonical" href="https://jp-informatique.fr" />
        <meta property="og:title" content={"jp-informatique.fr"} />
        <meta property="og:description" content={"Installation dépannage informatique"} />
        <meta property="og:url" content="https://jp-informatique.fr" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
