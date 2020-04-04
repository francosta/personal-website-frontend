module.exports = {
  siteMetadata: {
    title: `Dev Fran`,
    description: `Dev Fran - This is my personal website.`,
    author: `Francsico Costa`,
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
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-strapi-v2`,
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`Blog-Post`],
        singleTypes: [`About`, `Landing-Page`],
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["API_URL"],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins", "sans serif"],
        },
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
