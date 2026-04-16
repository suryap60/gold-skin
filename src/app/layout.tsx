import type { Metadata } from 'next';
import { Playfair_Display, Inter, Vidaloka } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layouts/Navbar';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const vidaloka = Vidaloka({ weight: '400', subsets: ['latin'], variable: '--font-vidaloka' });

export const metadata: Metadata = {
  title: 'GoldSkin - Skincare Product',
  description: 'Happy Future Skincare Shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${vidaloka.variable} font-sans antialiased bg-white`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
