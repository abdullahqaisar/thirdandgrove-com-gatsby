/* eslint-disable no-undef */
const { readFileSync, writeFileSync } = require('fs');
require('dotenv').config();

const isProduction =
  process.env.BRANCH !== undefined && process.env.BRANCH === 'master'
    ? 'production'
    : 'development';

const siteUrl = process.env.URL || `https://www.thirdandgrove.com`;

module.exports = {
  siteMetadata: {
    title: `Third and Grove`,
    description: `We are design-first technologists helping innovative brands make their next move. We work directly with incredible organizations to build complex systems and innovative digital experiences in technologies like Drupal, Shopify Plus, and WordPress, and our emoji game is strong.`,
    author: `@thirdandgrove`,
    siteUrl: `https://www.thirdandgrove.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          'default-src': `'self' data: www.google-analytics.com https://polyfill.io https://www.google.com https://cdnjs.cloudflare.com https://www.gstatic.com player.vimeo.com vimeo.com https://pro.ip-api.com/ https://alocdn.com/ https://rp.liadm.com https://rp4.liadm.com/ liadm.com`,
          'script-src': `'self' 'unsafe-inline' 'unsafe-eval' data: https://s3-us-west-2.amazonaws.com/b2bjsstore/b/X0NW1GHXD7O4/reb2b.js.gz netlify.app www.google-analytics.com https://polyfill.io https://www.google.com https://cdnjs.cloudflare.com https://www.gstatic.com www.googletagmanager.com snap.licdn.com static.ads-twitter.com googleads.g.doubleclick.net https://sc.lfeeder.com player.vimeo.com vimeo.com netlify.app https://b-code.liadm.com/lc2.js`,
          'style-src': `'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com https://d33wubrfki0l68.cloudfront.net https://pro.ip-api.com/json`,
          'img-src': `'self' data: https://www.linkedin.com/px/li_sync google.com analytics.twitter.com px4.ads.linkedin.com www.google-analytics.com google.com www.google.com.ec https://www.google.com/ads https://www.google.com/pagead https://cdn.linkedin.oribi.io https://px.ads.linkedin.com https://www.google.com/ads/ga-audiences https://tr-rc.lfeeder.com t.co google.com twitter.com https://www.google.com/pagead/ https://pro.ip-api.com/json https://rp.liadm.com https://rp4.liadm.com/ liadm.com`,
          'font-src': `'self' data: fonts.gstatic.com https://d33wubrfki0l68.cloudfront.net`,
          'connect-src': `'self' https://www.thirdandgrove.com analytics.google.com extreme-ip-lookup.com stats.g.doubleclick.net www.google-analytics.com https://cdn.linkedin.oribi.io https://px.ads.linkedin.com vimeo.com https://pro.ip-api.com/json https://alocdn.com/c/vn3d8u2u/a/xtarget/p.json https://alocdn.com/ https://rp.liadm.com https://rp4.liadm.com/ liadm.com https://9xgnrndqve.execute-api.us-west-2.amazonaws.com/b2b amazonaws.com 9xgnrndqve.execute-api.us-west-2.amazonaws.com https://9xgnrndqve.execute-api.us-west-2.amazonaws.com`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allCaseStudy(filter: { field_hidden: { eq: false } }) {
            nodes {
              modifiedGmt: changed
              uri: path {
                alias
              }
            }
          }
          allLandingPage(filter: { field_hidden: { eq: false } }) {
            nodes {
              modifiedGmt: changed
              uri: path {
                alias
              }
            }
          }
          allInsight(filter: { field_hidden: { eq: false } }) {
            nodes {
              modifiedGmt: changed
              uri: path {
                alias
              }
            }
          }
          allNodeLegacyInsight {
            nodes {
              modifiedGmt: changed
              uri: path {
                alias
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allCaseStudy: { nodes: allCaseStudyNodes },
          allLandingPage: { nodes: allLandingPageNodes },
          allInsight: { nodes: allInsightNodes },
          allNodeLegacyInsight: { nodes: allNodeLegacyInsightNodes },
        }) => {
          const drupalNodeMap = [
            ...allCaseStudyNodes,
            ...allLandingPageNodes,
            ...allInsightNodes,
            ...allNodeLegacyInsightNodes,
          ].map(node => {
            return {
              path: node.uri.alias,
              lastmod: node.modifiedGmt,
            };
          });
          return drupalNodeMap;
        },
        serialize: ({ path, lastmod, changefreq, priority }) => {
          return {
            url: path,
            lastmod,
            changefreq,
            priority,
          };
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.woff': ['Cache-Control:  max-age=31536000'],
          '/*.woff2': ['Cache-Control:  max-age=31536000'],
          '/*.png': ['Cache-Control:  max-age=31536000'],
          '/*.svg': ['Cache-Control:  max-age=31536000'],
        },
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 80,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `third-and-grove`,
        short_name: `tag`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#EBC900`,
        display: `minimal-ui`,
        icon: 'static/images/icon.png',
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.DRUPAL_URL,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MKBKRBC',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'UA-46758288-8',
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
        setup: ({
          query: {
            site: { siteMetadata },
          },
        }) => {
          return {
            ...siteMetadata,
            site_url: 'https://www.thirdandgrove.com/drupal-planet-rss.xml',
            language: 'en',
          };
        },
        feeds: [
          {
            serialize: ({ query: { site, allInsight } }) => {
              return allInsight.nodes.map(node => {
                return {
                  title: node.title,
                  description:
                    node.field_summary && node.field_summary.processed,
                  guid: site.siteMetadata.siteUrl + node.path.alias,
                  custom_elements: [
                    {
                      'dc:creator': node.relationships.uid.name,
                    },
                    {
                      pubDate: node.created,
                    },
                    {
                      link: site.siteMetadata.siteUrl + node.path.alias,
                    },
                  ],
                };
              });
            },
            query: `
            {
              allInsight(
                sort: { created: DESC },
                filter: { field_hidden: { eq: false }, relationships: { field_tags: { elemMatch: { name: { eq: "Drupal"} } } } },
                limit: 10
                ) {
                nodes {
                  title
                  field_summary {
                    processed
                  }
                  created(formatString: "ddd, DD MMM YYYY hh:mm:ss +0000")
                  relationships {
                    uid {
                      name:display_name
                    }
                  }
                  path {
                    alias
                  }
                }
              }
            }
          `,
            output: '/drupal-planet-rss.xml',
            title: 'Drupal Planet RSS Feed',
            language: 'en',
            match: '^/insights/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.thirdandgrove.com/',
        sitemap: 'https://www.thirdandgrove.com/sitemap/sitemap-index.xml',
        resolveEnv: () => isProduction,
        env: {
          production: {
            policy: [{ userAgent: '*', disallow: ['/careers/*'] }],
          },
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
        },
      },
    },
  ],
};
