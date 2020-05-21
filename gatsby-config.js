module.exports = {
  siteMetadata: {
    title: `Care Packages UK`,
    author: `Chris Phillips`,
    description: `Care Packages`,
    siteUrl: `http://TBC.com`,
    social: {
      twitter: `chrisphillers`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/assets/images`,
        name: "assets",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-162054938-1`,
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
      },
    },
    {
      resolve: `babel-plugin-styled-components`,
      options: {
        ssr: true,
        pure: true,
        displayName: false,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
  ],
};
