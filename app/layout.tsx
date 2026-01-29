import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MediMatch for nurse 小田原 | あなただけの席を直接交渉',
  description: '求人票に自分を合わせるのは、もう終わり。MediMatchが、あなただけの『席』を小田原の病院と直接交渉します。',
  keywords: '看護師, 求人, 小田原, 転職, コンシェルジュ',
  openGraph: {
    title: 'MediMatch for nurse 小田原',
    description: 'あなただけの『席』を小田原の病院と直接交渉',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Klee+One:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
