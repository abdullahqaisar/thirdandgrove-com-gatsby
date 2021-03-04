import React, { useRef } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { fonts, mediaQueries, container, weights } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { useHasBeenVisible } from '../hooks/useVisibility';
import CTA from '../components/CTA';

const Capability = ({ imageSrc, imageAlt, content, index, id }) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  return (
    <FullWidthSection
      ref={nodeRef}
      height='0'
      padding='0'
      textAlign='left'
      css={css`
        &:first-of-type {
          margin-top: 20px;

          ${mediaQueries.phoneLarge} {
            margin-top: 175px;
          }
        }
      `}
    >
      <div id={id} css={container.medium}>
        <div
          css={css`
            margin-bottom: 90px;

            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              flex-direction: ${index % 2 ? 'row-reverse' : 'row'};
              align-items: center;
              margin-bottom: 170px;
            }

            h2 {
              font-size: 33px;
              font-weight: ${weights.bold};
            }

            p {
              font-weight: ${weights.light};
            }

            ul {
              margin: 0;

              li {
                font-family: ${fonts.sans};
                font-weight: ${weights.bold};
                font-variant-caps: all-small-caps;
                letter-spacing: 1px;
                list-style: none;
              }
            }
          `}
        >
          <Spring
            delay={0}
            to={{
              transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
              opacity: isVisible ? '1' : '0',
            }}
          >
            {({ transform, opacity }) => (
              <GatsbyImage
                image={imageSrc}
                alt={imageAlt}
                style={{ transform, opacity }}
                css={css`
                  width: 100%;
                  margin-bottom: 20px;

                  > div {
                    height: 0;
                    padding-bottom: 100% !important;
                  }

                  ${mediaQueries.phoneLarge} {
                    flex: 0 0 ${index % 2 ? '64%' : '49%'};
                    width: ${index % 2 ? '64%' : '49%'};
                    margin-bottom: 0;

                    > div {
                      padding-bottom: ${index % 2 ? '76% !important' : '100%'};
                      padding-bottom: ${index % 4 === 2
                        ? '131% !important'
                        : '100%'};
                    }
                  }
                `}
              />
            )}
          </Spring>

          <div
            css={css`
              position: relative;

              ${mediaQueries.phoneLarge} {
                flex: 0 0 ${index % 2 ? '30%' : '40%'};
                width: ${index % 2 ? '30%' : '40%'};
              }
            `}
          >
            {content}
          </div>
        </div>
      </div>
    </FullWidthSection>
  );
};

Capability.propTypes = {
  imageSrc: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

const CapabilitiesPage = ({ data }) => {
  return (
    <Layout
      headerData={{
        title: `All the stuff we’re good at.`,
        mobileMinHeight: '93vh',
        height: '400px',
      }}
    >
      <Capability
        id='technology'
        imageSrc={data.technologyImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Laptop on desk with drink'
        content={
          <>
            <h2>Technology</h2>
            <p>
              Work with the best engineers in the room—no matter what room
              you’re in. Our engineers are writing and discovering the future of
              digital excellence.
            </p>
            <ul>
              <li>Front-End Development</li>
              <li>Back-End Development</li>
              <li>Content Management</li>
              <li>
                <Link to='/partners/drupal/'>Drupal</Link>
              </li>
              <li>
                <Link to='/partners/acquia/'>Acquia</Link>
              </li>
              <li>
                <Link to='/partners/shopify/'>Shopify</Link>
              </li>
              <li>
                <Link to='/partners/gatsby/'>Gatsby</Link>
              </li>
            </ul>
          </>
        }
        index={0}
      />
      <Capability
        id='strategy'
        imageSrc={data.strategyImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Two office workers looking at a chart on a laptop'
        content={
          <>
            <h2>Strategy</h2>
            <p>
              The foundation for great work. Know your customer, your goals, and
              how to reach them.
            </p>
            <ul>
              <li>Digital Strategy</li>
              <li>Trends &amp; Insights</li>
              <li>Customer Research</li>
              <li>Industry Research</li>
              <li>Analytics / Data / SEO</li>
              <li>Omnichannel Strategy</li>
            </ul>
          </>
        }
        index={1}
      />
      <Capability
        id='creative'
        imageSrc={data.creativeImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Man drawing logos in a notebook'
        content={
          <>
            <h2>Creative</h2>
            <p>
              Where data, culture, and good looks come together. Create the
              strongest connection to the brand experience, and look good doing
              it.
            </p>
            <ul>
              <li>Campaign Creation</li>
              <li>Art Direction</li>
              <li>UI/UX Design</li>
              <li>Social Content</li>
              <li>Content Development</li>
              <li>Interaction / Motion</li>
            </ul>
          </>
        }
        index={2}
      />
      <Capability
        id='data'
        imageSrc={data.dataImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Black and Red'
        content={
          <>
            <h2>Data</h2>
            <p>
              More than points on a graph. Data tells us how connect, and how we
              can make those connections more meaningful.
            </p>
            <ul>
              <li>Insights audit</li>
              <li>KPI definition</li>
              <li>Account configuration</li>
              <li>Monthly reports</li>
              <li>User testing</li>
            </ul>
          </>
        }
        index={3}
      />
      <CTA />
    </Layout>
  );
};

export const query = graphql`
  query CapabilitiesQuery {
    technologyImageDesktop: file(relativePath: { eq: "technology.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
      }
    }
    strategyImageDesktop: file(relativePath: { eq: "strategy.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
      }
    }
    creativeImageDesktop: file(relativePath: { eq: "creative.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
      }
    }
    dataImageDesktop: file(relativePath: { eq: "data.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export default CapabilitiesPage;

CapabilitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
};
