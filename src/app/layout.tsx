
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Thinknexus',
  description: 'AI-Powered Product Development and Software Outsourcing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-background border-b py-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">Thinknexus</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/about" className="text-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/services" className="text-foreground hover:text-primary">Services</Link></li>
                <li><Link href="/portfolio" className="text-foreground hover:text-primary">Portfolio</Link></li>
                <li><Link href="/contact" className="text-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-background border-t py-8">
          <div className="container mx-auto text-center">
            <p className="text-sm text-foreground">
              © {new Date().getFullYear()} Thinknexus. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
