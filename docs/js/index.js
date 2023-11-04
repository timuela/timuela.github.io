window.$docsify = {
    name: "The Introvert's Guide To Hunting Eidolon",
    repo: 'https://github.com/timuela/timuela.github.io',
    coverpage: false,
    auto2top: true,
    loadSidebar: true,
    loadNavbar: false,
    mergeNavbar: true,
    maxLevel: 4,
    subMaxLevel: 3,
    

//  https://github.com/iPeng6/docsify-sidebar-collapse
    sidebarDisplayLevel: 1,
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md',
    },

//  https://github.com/jperasmus/docsify-copy-code
    copyCode: {
        buttonText: 'Copy',
        errorText: 'Error',
        successText: 'Copied'
    },

//  https://docsify.js.org/#/plugins?id=full-text-search
    search: 'auto',
    search: {
        paths: 'auto',
        placeholder: 'Search',
        noData: 'No Results!',
    },

//  https://gbodigital.github.io/docsify-gifcontrol/#/
    gifcontrol: {
        overlayColor: 'rgba(0,0,0,0.7)',
        errorText: 'Oh no! Image not found...',
    },
//  https://docsify-darklight-theme.boopathikumar.me/#/installation
    darklightTheme: {
        siteFont : "PT Sans",
        defaultTheme : 'dark',
        codeFontFamily : 'Roboto Mono, Monaco, courier, monospace',
        bodyFontSize : '17px',
        dark: {
            accent: '#42b983',
            toogleBackground : '#ffffff',
            background: '#091a28',
            textColor: '#b4b4b4',
            codeTextColor : '#1c1674',
            codeBackgroundColor : '#95c3e9',
            borderColor : '#0d2538',
            blockQuoteColor : '#858585',
            highlightColor : '#d22778',
            sidebarSublink : '#b4b4b4',
            codeTypeColor : '#ffffff',
            coverBackground : 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
            toogleImage : 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)'
        },
        light: {
            accent: '#42b983',
            toogleBackground : '#091a28',
            background: '#ffffff',
            textColor: '#34495e',
            codeTextColor : '#93d3f1',
            codeBackgroundColor : '#686874',
            borderColor : 'rgba(0, 0, 0, 0.07)',
            blockQuoteColor : '#858585',
            highlightColor : '#d22778',
            sidebarSublink : '#b4b4b4',
            codeTypeColor : '#091a28',
            coverBackground : 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
            toogleImage : 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)'
        }
    },

}