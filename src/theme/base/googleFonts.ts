import { Lora, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const lora = Lora({
  subsets: ['latin'],
  weight: [ '400', '600'],
  display: 'swap',
  variable: '--font-lora'
});
