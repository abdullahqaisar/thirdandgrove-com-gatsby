import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import loadable from '@loadable/component';

import { colors } from '../../styles';
import { partnersProjects, list } from '../../styles/custom-css';
import EliteSRC from '../../../static/images/Partner_Wordmark-Elite_1col.svg';

const Layout = loadable(() => import('../../components/layout'));
const FullWidthSection = loadable(() =>
  import('../../components/FullWidthSection')
);
const SplitSection = loadable(() => import('../../components/SplitSection'));
const Quote = loadable(() => import('../../components/ContentBody/Quote'));
const CTA = loadable(() => import('../../components/CTA'));
const InsightsSlider = loadable(() =>
  import('../../components/InsightsSlider')
);
const ProjectsSlider = loadable(() =>
  import('../../components/ProjectsSlider')
);

const BigCommerce = query => {
  const { insights, caseStudies } = query.data;

  return (
    <Layout
      headerData={{
        invert: true,
        label:
          'eCommerce Pioneers — Online Store Creationists — Platform Solution Prowess',
        title: 'BigCommerce Things Come in Small Packages',
        color: colors.black,
        mobileMinHeight: '620px',
        width: '480px',
        titlePadding: '0 100px',
      }}
    >
      <FullWidthSection height='400px' align='left' css={list}>
        <h4>Scale your sales potential with BigCommerce</h4>
        <p>
          We work directly with incredible organizations to build complex
          systems and innovative digital experiences; working with mid-market
          and enterprise clients to develop web experiences in Drupal and
          BigCommerce.
        </p>
        <div>
          <ul>
            <li>
              BigCommerce API integration, custom development, and platform
              migration.
            </li>
            <li>
              BigCommerce responsive theme design, user experience, and UI
              design.
            </li>
            <li>
              BigCommerce on-page search engine optimization, website migration,
              analytics tracking, conversion rate option, and structured data
              implementation.
            </li>
          </ul>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <a
            href='https://partners.bigcommerce.com/directory/partner/501032/third-grove'
            title='BigCommerce Elite Partner'
            css={css`
              width: 100%;
              max-width: 200px;
              margin: 30px auto 0 auto;
            `}
          >
            <img src={EliteSRC} alt='BigCommerce Elite Partner' />
          </a>
        </div>
      </FullWidthSection>
      <ProjectsSlider
        data={caseStudies}
        backgroundColor={colors.lightgray}
        tech='BigCommerce'
      />
      <SplitSection gridColumnGap='16px' css={partnersProjects}>
        <article>
          <h2>Conquer complexity</h2>
          <p>
            BigCommerce is not complex, but your integration may be. We’ve
            pioneered robust integrations for both back and front-end
            experiences.
          </p>
        </article>
        <article>
          <h2>Maximize your budget</h2>
          <p>
            Minimize your build investment and reinvest into initiatives that
            move the needle. (We can help with that too).
          </p>
        </article>
        <article>
          <h2>Global first</h2>
          <p>
            Companies need to think globally to compete. We’ll help you lay the
            foundation from day one.
          </p>
        </article>
        <article>
          <h2>Automate all the things</h2>
          <p>
            Automation is about more than just saving time. We leverage
            automation to create processes that create raving fans and big
            spenders.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote: `The most important decision an organization can make when leveraging Acquia and BigCommerce is whether to go side-by-side or headless.`,
          field_footer_text: 'Justin Emond',
        }}
      />
      <InsightsSlider
        data={insights}
        showButton={false}
        backgroundColor={colors.lightgray}
      />
      <CTA />
    </Layout>
  );
};

export const query = graphql`
  {
    insights: allInsight(
      sort: { fields: created, order: DESC }
      limit: 5
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        id
        title
        field_inverse_header
        field_image {
          alt
        }
        created(formatString: "MMM D, YYYY")
        path {
          alias
        }
        relationships {
          node_type {
            name
          }
          uid {
            name: display_name
          }
          field_image {
            id
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 450, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          field_components {
            ... on component__text {
              relationships {
                component_type {
                  name
                }
              }
              field_body {
                processed
              }
            }
            ... on component__image {
              id
              field_image {
                alt
              }
              relationships {
                component_type {
                  name
                }
                field_image {
                  id
                  localFile {
                    publicURL
                    childImageSharp {
                      fluid(maxWidth: 630, maxHeight: 630) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    caseStudies: allCaseStudy(
      limit: 10
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        id
        title
        field_subtitle
        field_inverse_header
        field_image_arrangement
        field_image {
          alt
        }
        field_secondary_image {
          alt
        }
        field_tertiary_image {
          alt
        }
        path {
          alias
        }
        relationships {
          field_tags {
            name
          }
          field_image {
            id
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 850, maxHeight: 850, cropFocus: NORTH) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 335, height: 260, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 450, height: 320, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 380, height: 420, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 420, height: 340, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
          field_secondary_image {
            id
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 850, maxHeight: 850) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 1, height: 1) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 250, height: 180, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 340, height: 260, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 270, height: 210, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
          field_tertiary_image {
            id
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 850, maxHeight: 850) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 1, height: 1) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 250, height: 495, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 230, height: 210, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 320, height: 210, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BigCommerce;
