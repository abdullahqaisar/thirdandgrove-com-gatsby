import React from 'react';
import PropTypes from 'prop-types';
import { navigate, graphql } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import SplitSection from '../components/SplitSection';
import WhatWeDo from '../components/WhatWeDo';
import ImageSlider from '../components/ImageSlider';
import { TextWrapper } from '../components/Prefooter';
import {
  colors,
  fonts,
  weights,
  smSectionHead,
  h1L,
  container,
  mediaQueries,
  contValues,
  pLight,
} from '../styles';
import Button from '../components/Button';

const SanFrancisco = ({ data }) => {
  const Row = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-bottom: 12px;
    width: 100%;

    ${mediaQueries.phoneLarge} {
      width: ${contValues.min};
      justify-content: space-around; // for Edge
    }

    div {
      width: 50%;
      margin-bottom: 40px;

      ${mediaQueries.phoneLarge} {
        width: auto;
        padding: 0 36px;
      }

      h2 {
        font-weight: ${weights.medium};
        font-size: 39px;
        color: ${colors.darkgray};
        letter-spacing: -1.38px;
        text-align: center;
        margin-bottom: 8px;

        ${mediaQueries.phoneLarge} {
          font-size: 48px;
        }
      }
      h3 {
        font-family: ${fonts.sans};
        font-weight: ${weights.bold};
        font-size: 16px;
        line-height: 23px;
        color: ${colors.darkgray};
        letter-spacing: 0.2px;
        text-align: center;
      }
    }
  `;

  const introText = css`
    font-size: 21px;
    font-weight: weights.bold;
    line-height: 1.48;
    text-align: center;
    color: ${colors.darkgray};
    padding: 70px 0;

    ${mediaQueries.phoneLarge} {
      font-weight: ${weights.bold};
      text-align: center;
      letter-spacing: -0.09px;
      line-height: 1.48;
      width: ${contValues.min};
    }

    a {
      text-decoration: underline;
    }
  `;

  const heroImageMobile = data.hero.nodes[0].publicURL;
  const heroImage = data.hero.nodes[1].publicURL;

  return (
    <Layout
      headerData={{
        title: 'You won’t find a better Drupal agency in the Bay Area.',
        metaTitle:
          'You won’t find a better Drupal Development Agency in San Francisco | Third and Grove',
        height: '700px',
        mobileMinHeight: '90vh',
        color: colors.darkgray,
        heroImage,
        heroImageMobile,
      }}
    >
      <FullWidthSection textAlign='center' height='750px' minHeight='730px'>
        <h4 css={introText}>
          We’re a full service Boston-based agency with the best engingeers in
          the city – any city really. We are the only Drupal development agency
          to employ a Drupal 8 core maintainer and consistently rank in
          the&nbsp;
          <a
            href='https://www.drupal.org/drupal-services'
            rel='noopener noreferrer'
            target='_blank'
          >
            top 10 Drupal agencies in the world
          </a>
          . We’ve helped leading brands in Boston (and around the country)
          maximize their Drupal investment and optimize performance with
          reliable, stress-tested ongoing support.
        </h4>

        <Row>
          <div>
            <h2>177k</h2>
            <h3>Hours on Drupal</h3>
          </div>
          <div>
            <h2>100%</h2>
            <h3>Acquia Certified</h3>
          </div>
          <div>
            <h2>1,400</h2>
            <h3>Contributions</h3>
          </div>
        </Row>
        <Row>
          <div>
            <h2>Drupal 9</h2>
            <h3>We&apos;re Writing It</h3>
          </div>
          <div>
            <h2>Big</h2>
            <h3>On Innovation</h3>
          </div>
        </Row>
      </FullWidthSection>
      <ImageSlider data={data.slider} />
      <FullWidthSection
        height='750px'
        css={css`
          background-color: ${colors.white};
          z-index: 1;
          height: 600px;
          text-align: center;
          width: 90%;
        `}
      >
        <h3 css={smSectionHead}>Our Expertise</h3>
        <h2 css={[h1L, container.medium]}>
          We know stuff but we’re not know-it-alls.
        </h2>
        <p
          css={[
            pLight,
            css`
              padding-top: 30px;
              ${mediaQueries.phoneLarge} {
                width: ${contValues.min};
                padding-top: 60px;
              }
            `,
          ]}
        >
          Two heads are better than one but a unified team is better than two.
          We deliver the Drupal knowledge and digital horsepower but you bring
          the experience that is needed for a thoughtful, reliable migration.
          It’s a partnership and we like it that way.
        </p>
      </FullWidthSection>

      <SplitSection>
        <TextWrapper backgroundColor={colors.yellow}>
          <h3>Catch up over coffee?</h3>
          <Button onClick={() => navigate(`/contact/`)}>Get in Touch</Button>
        </TextWrapper>
        <TextWrapper backgroundColor={colors.lightblue}>
          <h3>Join the best in the Bay Area.</h3>
          <Button onClick={() => navigate(`/careers/`)}>Work at TAG</Button>
        </TextWrapper>
      </SplitSection>
    </Layout>
  );
};

SanFrancisco.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SanFrancisco;

export const query = graphql`
  {
    hero: allFile(filter: { absolutePath: { regex: "/sanFranciscoHero/" } }) {
      nodes {
        publicURL
      }
    }
    slider: allFile(filter: { absolutePath: { regex: "/sanfrancisco/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 363, maxHeight: 363) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
