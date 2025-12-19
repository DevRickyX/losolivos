import './globals.css';
import type { Metadata } from 'next';
import { Comfortaa, Raleway } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-heading',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Funeraria Los Olivos | Córdoba y Sucre',
  description: 'Servicios funerarios con dignidad y respeto. Previsión exequial, homenajes y más.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${comfortaa.variable} ${raleway.variable} font-body`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
