module.exports = {
  siteMetadata: {
    title: `Francisco Costa`,
    description: `Personal website of Francisco Costa, a full stack developer based in London. Read blog posts on his latest learnings and his technical projects.`,
    author: `Francisco Costa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about`,
          `/contact`,
          `/blog/*`,
          `/blog`,
          `/projects`,
          `/`,
          `/projects/*`,
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi-v2`,
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`Blog-Post`, `Project`],
        singleTypes: [`About`, `Landing-Page`],
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['API_URL', 'EMAIL_API'],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'sans serif'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-readingtime`,
      options: {
        config: {
          // configuration for reading-time package https://github.com/ngryman/reading-time
        },
        types: {
          // Key: GraphQL Type to add reading times to, Value: Resolver function takes source node of Defined GraphQL type and returns content to be processed.
          StrapiBlogPost: source => {
            const { body } = source;
            return body;
          },
          StrapiProject: source => {
            const { body } = source;
            return body;
          },
        },
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 650,
        loading: 'lazy',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
