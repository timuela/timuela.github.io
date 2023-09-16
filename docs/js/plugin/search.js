
  window.$docsify = {
    search: 'auto',
    search: [
        '/home',            // => /README.md
        '/gear',       // => /guide.md
        '/enemies',
        '/hunt',
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