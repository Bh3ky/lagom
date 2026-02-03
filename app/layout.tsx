import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lagom Marketing OS',
  description:
    'A high-performance marketing automation and AI-driven campaign management platform for agencies and content creators.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
