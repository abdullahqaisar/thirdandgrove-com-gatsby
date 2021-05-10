import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import loadable from '@loadable/component';

import { colors, mediaQueries, smSectionHead } from '../../styles';

const Slider = loadable.lib(() => import('react-slick'));
const ArticlePreviewSlide = loadable(() => import('../ArticlePreviewSlide'));
const FullWidthSection = loadable(() => import('../FullWidthSection'));
const Button = loadable(() => import('../Button'));

const InsightsSlider = ({
  showButton,
  showTitle,
  backgroundColor,
  title,
  data,
}) => {
  const settings = {
    arrows: false,
    autoplay: false,
    autoplaySpeed: 7500,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
    centerPadding: 90,
    infinite: true,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          centerPadding: 10,
        },
      },
    ],
  };
  return (
    <FullWidthSection
      height='0'
      css={css`
        padding-top: 25px;
        padding-bottom: 60px;
        padding-left: 0;
        padding-right: 0;
        background-color: ${backgroundColor};

        ${mediaQueries.phoneLarge} {
          padding-bottom: 115px;
          padding-top: 90px;
        }
      `}
    >
      {showTitle && <h2 css={smSectionHead}>{title}</h2>}
      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
          margin-bottom: 65px;

          .slick-list {
            ${mediaQueries.desktop} {
              padding: 0 90px;
            }
          }
        `}
      >
        {data &&
          data.nodes.map(node => {
            return <ArticlePreviewSlide key={node.title} article={node} />;
          })}
      </Slider>
      {showButton && (
        <Button onClick={() => navigate(`/insights/`)}>Our Insights</Button>
      )}
    </FullWidthSection>
  );
};

InsightsSlider.propTypes = {
  showButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object.isRequired,
  showTitle: PropTypes.bool,
};

InsightsSlider.defaultProps = {
  showButton: true,
  showTitle: true,
  backgroundColor: colors.white,
  title: `Insights`,
};

export default InsightsSlider;
