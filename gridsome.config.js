
module.exports = {
  
  siteName: 'Bosque R.E.A.L',
  siteDescription: "Revisión Expandida, Aumentada y Literal de la Casa de Campo de Madrid. Propone una serie de eventos que abordan hechos históricos, anécdotas y lugares más o menos conocidos, reconocibles, secretos o fundamentales de un lugar tan icónico como plural",

  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
  },
  
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://s447532296.mialojamiento.es/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        apiBase: 'wp-json',
        perPage: 100,
        concurrent: 10
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-138988521-1'
      }
    }
  ]
}
