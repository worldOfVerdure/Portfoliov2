import ClientLayout from './ClientLayout.tsx';
export { default as metadata } from './metadata';
import { ReactNode } from 'react';

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
