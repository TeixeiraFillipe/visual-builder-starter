import { type PropsWithChildren } from "react"
import type { Metadata } from "next"
import Script from 'next/script'

// Components
import { MoseyBankHeader } from '@/components/header'
import { MoseyBankFooter } from '@/components/footer'
import { ThemeProvider, Body } from '@/components/theme'

// Styling
import { Figtree } from "next/font/google"
import "./globals.scss"

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    description: "An Optimizely demo website",
    keywords: "Mosey bank, Mosey, Optimizely, Demo",
    title: {
        default: "Mosey Bank - An Optimizely Demo",
        template: "%s - An Optimizely Demo"
    }
};

type RootLayoutProps = Readonly<PropsWithChildren<{}>>

export default function RootLayout({ children }: RootLayoutProps) {
    return <html lang="en">
        <Script id="odp-integration">
            {`
                var zaius = window['zaius']||(window['zaius']=[]);zaius.methods=["initialize","onload","customer","entity","event","subscribe","unsubscribe","consent","identify","anonymize","dispatch"];zaius.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);zaius.push(t);return zaius}};(function(){for(var i=0;i<zaius.methods.length;i++){var method=zaius.methods[i];zaius[method]=zaius.factory(method)}var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=("https:"===document.location.protocol?"https://":"http://")+"d1igp3oop3iho5.cloudfront.net/v2/qsSXbLFmfivSll3O4xqCMg/zaius-min.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
                
                // Edits to this script should only be made below this line.
                zaius.event('pageview');
            `} 
        </Script>
        <ThemeProvider value={{ theme: "system" }}>
            <Body className={`${figtree.className} bg-ghost-white text-vulcan dark:bg-vulcan dark:text-ghost-white`}>
                <div className="flex min-h-screen flex-col justify-between">
                    <MoseyBankHeader />
                    {children}
                    <MoseyBankFooter />
                </div>
            </Body>
        </ThemeProvider>
    </html>
}
