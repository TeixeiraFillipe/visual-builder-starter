'use client'
import Script from 'next/script'
import { createContext, useContext, useState, useEffect, useLayoutEffect, type FunctionComponent, type PropsWithChildren } from 'react'

export type ThemeContextData = {
    theme: "light" | "dark" | "system",
    effectiveTheme: "light" | "dark",
    setTheme: ReturnType<typeof useState<ThemeContextData['theme']>>[1]
}
export type ThemeContentInitialData = Pick<ThemeContextData, 'theme'>

export const ThemeContext = createContext<ThemeContextData>({
    theme: "system",
    effectiveTheme: "light",
    setTheme: ()=> { throw new Error("No Context defined")}
})
ThemeContext.displayName = "Color theme provider"
export const useTheme = () => useContext(ThemeContext)
export const ThemeProvider: FunctionComponent<PropsWithChildren<{ value: ThemeContentInitialData }>> = ({ value: { theme }, children }) => {
    const [ themeState, setThemeState ] = useState<ThemeContextData['theme']>(theme) as [ThemeContextData['theme'], ThemeContextData['setTheme']]
    const [ sysTheme, setSysTheme ] = useState<'light' | 'dark'>('light')

    // Initial load of theme
    useLayoutEffect(() => {
        const storedState = localStorage.getItem('color-theme')
        if (typeof(storedState) == 'string' && ['light','dark','system'].includes(storedState))
            setThemeState(storedState as 'light' | 'dark' | 'system')

        const query = window.matchMedia('(prefers-color-scheme: dark)')
        function onPreferColorSchemeChange(e: MediaQueryListEvent) {
            setSysTheme(e.matches ? 'dark' : 'light')
        }
        query.addEventListener("change", onPreferColorSchemeChange)

        return () => {
            query.removeEventListener("change", onPreferColorSchemeChange)
        }
    },[])

    // Update local storage if needed
    useEffect(() => {
        if (localStorage.getItem('color-theme') != themeState)
            localStorage.setItem('color-theme', themeState)
    }, [ themeState ])

    return <ThemeContext.Provider value={{
        theme: themeState,
        effectiveTheme: themeState == 'system' ? sysTheme : themeState,
        setTheme: setThemeState
    }}>{ children }</ThemeContext.Provider>
}

export const Body: FunctionComponent<JSX.IntrinsicElements['body']> = ({ className, children, ...props }) => {
    const { effectiveTheme } = useTheme()
    const themeClass = effectiveTheme == 'dark' ? 'dark' : ''
    return (
        <>
            <Script id="odp-integration" dangerouslySetInnerHTML={{
                __html: `var zaius = window['zaius']||(window['zaius']=[]);zaius.methods=["initialize","onload","customer","entity","event","subscribe","unsubscribe","consent","identify","anonymize","dispatch"];zaius.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);zaius.push(t);return zaius}};(function(){for(var i=0;i<zaius.methods.length;i++){var method=zaius.methods[i];zaius[method]=zaius.factory(method)}var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=("https:"===document.location.protocol?"https://":"http://")+"d1igp3oop3iho5.cloudfront.net/v2/qsSXbLFmfivSll3O4xqCMg/zaius-min.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
                // Edits to this script should only be made below this line.
                zaius.event('pageview');`}} />
            <body className={`${themeClass} ${className}`.trim()} {...props}>{children}</body>
        </>
    )
}

export default useTheme