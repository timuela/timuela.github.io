
  window.$docsify = {
    search: 'auto',
    search: [
        '/public/home',            // => /README.md
        '/public/gear',       // => /guide.md
        '/public/enemies',
        '/public/hunt',
    ],
    search: {
        maxAge: 86400000,
        paths: [],
        placeholder: 'Type to search',
        noData: 'No Results!',
        depth: 2,
        hideOtherSidebarContent: false,
    },
  }