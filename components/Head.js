import React from 'react'
import Head from 'next/head'

function Heady() {
    return (
        <Head>
            <title>Lance Francisco Website</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Welcome to Lance Franciscos Macos Website Portfolio. Created with Nextjs and Reactjs"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Lance Francisco Website" />
            <meta property="og:description" content="Welcome to Lance Franciscos Macos Website Portfolio. Created with Nextjs and Reactjs" />
            <meta property="og:image" content="/thumbnail website.png" />
        
            <link rel="apple-touch-icon" sizes="180x180" href="/favico/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favico/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favico/favicon-16x16.png"/>
            <link rel="manifest" href="/favico/site.webmanifest"/>
            <link rel="mask-icon" href="/favico/safari-pinned-tab.svg" color="#5bbad5"/>
            <link rel="shortcut icon" href="/favico/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="msapplication-config" content="/favico/browserconfig.xml"/>
            <meta name="theme-color" content="#ffffff"/>  
        </Head>
    )
}

export default Heady
