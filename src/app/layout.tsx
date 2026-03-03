import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BuildSync | Secure Your Startup Idea',
  description: 'AI-Enhanced pitches, Web3 security, and expert matchmaking.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-slate-950">
      <body className={`${inter.className} min-h-screen flex flex-col items-center bg-transparent`}>
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mt-32 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
