window.$docsify = {
    name: "An Introvert's Guide To Hunting Eidolon",
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

}