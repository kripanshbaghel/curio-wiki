import '@fontsource-variable/inter';
import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Curio Wiki',
    template: '%s · Curio Wiki',
  },
  description:
    'Search STEM topics, browse subjects, open experiments, and watch educational videos.',
};

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t? t==='dark': window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
