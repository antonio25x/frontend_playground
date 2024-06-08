import { Inter, Lusitana } from 'next/font/google';

/**
 * Nextjs will add the fonts into the public folder
 * This is to avoid fetching the fonts from the network.
 * You can add more fonts here and then use them throughout 
 * the page by adding them into your component className. 
 * Eg
 * ```
 * import { lusitana } from '@/app/ui/fonts';
 * <p className={`${lusitana.className}>somet text</p>
 * ```
 */
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const inter = Inter({ subsets: ['latin'] });