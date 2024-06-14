import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'Healthy Plate',
  description: 'Recipes for kids',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
