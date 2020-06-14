module.exports = {
  siteMetadata: {
    title: 'DS & Algos',
    description: `Data structures & Algorithms Study Guide`,
    author: 'Jayden Wright',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
