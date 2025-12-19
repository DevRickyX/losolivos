import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
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
      <body className={quicksand.className}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
