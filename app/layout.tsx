import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { ThemeProvider } from "@/components/theme-provider"
import { concat } from '@/utils'

import { Manrope } from 'next/font/google'


const manrope = Manrope({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});


import Header from "layout/Header";
import Gradient from 'layout/Gradient'
import Navigation from '@/layout/Navigation'

export const metadata: Metadata = {
  title: 'Evan Smith | Software Engineer',
  description: 'Personal portfolio of Evan Smith, a software engineer based in the United States.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <Providers>
        <body className={concat(manrope.className, "subpixel-antialiased")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <Navigation />
            <Gradient />
            <article className='mx-auto sm:px-3 md:pt-12 md:px-6 px-12 max-w-[1140px] lg:max-w-[950px] md:max-w-[750px]'>
              {children}
            </article>
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  )
}
