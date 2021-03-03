import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import { container, mediaQueries } from '../../styles';

const Image = ({ data }) => (
  <GatsbyImage
    image={
      data.relationships.field_image.localFile.childImageSharp.gatsbyImageData
    }
    alt={data.field_image.alt}
    css={css`
      margin: 0 20px 70px;

      ${mediaQueries.phoneLarge} {
        ${container.min};
        padding-left: 0;
        padding-right: 0;
        margin: 0 auto 70px;
      }
    `}
  />
);

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
