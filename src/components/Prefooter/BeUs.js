import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';
import loadable from '@loadable/component';

import { colors, mediaQueries } from '../../styles';

const Button = loadable(() => import('../Button'));
const TextWrapper = loadable(() => import('./TextWrapper'));

const wrapperStyles = css`
  ${mediaQueries.phoneLarge} {
    min-height: 500px;
  }
`;

const BeUs = () => (
  <TextWrapper backgroundColor={colors.lightblue} css={wrapperStyles}>
    <h3>Get to be us.</h3>
    <Button onClick={() => navigate(`/careers/`)}>Work at TAG</Button>
  </TextWrapper>
);

export default BeUs;
