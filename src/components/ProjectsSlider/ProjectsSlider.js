/* eslint-disable prefer-template */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Slider from 'react-slick';

import { mediaQueries, fonts, weights, colors } from '../../styles';
import ProjectPreview from '../ProjectPreview';
import FullWidthSection from '../FullWidthSection';

const ProjectsSlider = ({ minHeight, backgroundColor, data, tech }) => {
  const [count, setCount] = useState('01');

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7500,
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: currentSlide => {
      // currentSlide starts at 0. Add 1 for human-readable slide number.
      let current = currentSlide + 1;
      // Add a leading zero if it's single-digit.
      current = current < 10 ? '0' + current : current;
      setCount(current);
    },
  };

  let projects = [];
  if (tech) {
    projects = data.nodes.filter(({ relationships }) =>
      relationships.field_tags.some(({ name }) => name === tech)
    );

    projects = projects.length === 0 ? data.nodes : projects;
  } else {
    projects = data.nodes;
  }

  const totalSlides =
    projects.length < 10 ? '0' + projects.length : projects.length;

  const countStyles = css`
    position: absolute;
    bottom: 45px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 96px;
    text-align: center;
    font-size: 12px;
    line-height: 3.33;
    font-family: ${fonts.sans};
    font-weight: ${weights.regular};
    letter-spacing: 1px;

    ${mediaQueries.phoneLarge} {
      bottom: 75px;
    }
  `;

  return (
    <FullWidthSection
      height={`${minHeight}px`}
      backgroundColor={backgroundColor}
      css={css`
        position: relative;
      `}
    >
      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
          width: 100%;
          padding-bottom: 120px;

          ${mediaQueries.phoneLarge} {
            padding-bottom: 0;
          }

          .slick-arrow {
            top: auto;
            bottom: 50px;
            width: 20px;
            height: 16px;
            z-index: 999;
            opacity: 0.7;
            transition: 0.3s ease opacity;

            ${mediaQueries.phoneLarge} {
              bottom: 80px;
            }

            &:hover,
            &:focus {
              opacity: 1;
            }

            &::before {
              display: none;
            }
          }

          .slick-prev {
            left: auto;
            right: calc(50% + 65px);
            background: url('/images/arrow-l.svg');

            ${mediaQueries.phoneLarge} {
              left: 20px;
              right: auto;
            }

            ${mediaQueries.desktop} {
              left: 50%;
              margin-left: -590px;
            }
          }

          .slick-next {
            left: calc(50% + 65px);
            right: auto;
            background: url('/images/arrow-r.svg');

            ${mediaQueries.phoneLarge} {
              left: 50px;
            }

            ${mediaQueries.desktop} {
              left: 50%;
              margin-left: -555px;
            }
          }
        `}
      >
        {projects.map(node => {
          return (
            <ProjectPreview
              key={node.title}
              project={node}
              minHeight={minHeight}
            />
          );
        })}
      </Slider>
      <footer css={countStyles}>
        {totalSlides !== '01' ? `${count} - ${totalSlides}` : ''}
      </footer>
    </FullWidthSection>
  );
};

ProjectsSlider.propTypes = {
  backgroundColor: PropTypes.string,
  data: PropTypes.object.isRequired,
  tech: PropTypes.string,
  minHeight: PropTypes.string,
};

ProjectsSlider.defaultProps = {
  backgroundColor: colors.white,
  tech: '',
  minHeight: '750',
};

export const query = graphql`
  fragment CaseStudyFragment on case_study {
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
            gatsbyImageData(
              width: 850
              height: 850
              transformOptions: { cropFocus: CENTER }
              layout: CONSTRAINED
            )
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(
              width: 335
              height: 260
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              width: 450
              height: 320
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              width: 380
              height: 420
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              width: 420
              height: 340
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
        }
      }
      field_secondary_image {
        id
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 850, height: 850, layout: CONSTRAINED)
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(width: 1, height: 1, layout: FIXED)
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              width: 250
              height: 180
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              width: 340
              height: 260
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              width: 270
              height: 210
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
        }
      }
      field_tertiary_image {
        id
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 850, height: 850, layout: CONSTRAINED)
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(width: 1, height: 1, layout: FIXED)
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              width: 250
              height: 495
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              width: 230
              height: 210
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              width: 320
              height: 210
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
        }
      }
    }
  }
`;

export default ProjectsSlider;
