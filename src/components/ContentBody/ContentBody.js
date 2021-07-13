import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const Image = loadable(() => import('./Image'));
const Quote = loadable(() => import('./Quote'));
const Text = loadable(() => import('./Text'));
const TextSplitwithImage = loadable(() => import('./TextImage'));
const TextSplitwithVideoPhone = loadable(() => import('./TextVideoPhone'));
const Prefooter = loadable(() => import('./Prefooter'));
const Video = loadable(() => import('./Video'));

const Components = {
  Image,
  Quote,
  Text,
  TextSplitwithImage,
  TextSplitwithVideoPhone,
  Prefooter,
  Video,
};

/**
 * ContentBody maps content body components
 * @param {array!} comps Components from Drupal
 * @param {string!} type Content type from Drupal
 */
const ContentBody = ({ comps, type }) => {
  if (!Array.isArray(comps)) {
    throw new Error(`Comps prop is not an array, ${typeof comps} cannot be passed to ContentBody.`);
  }
  const validComps = comps.filter(comp => comp.relationships);
  const firstText = validComps.find(comp => comp.relationships.component_type.name.toLowerCase().includes('text'));
  return (
    <>
      {validComps.map(comp => {
        // Dynamically select a component based on field name
        const componentName = comp.relationships.component_type.name.split(' ').join('');
        const Component = Components[componentName];
        return <Component data={{ ...comp, type, isFirstText: firstText.id === comp.id }} key={comp.id} />;
      })}
    </>
  );
};

ContentBody.propTypes = {
  comps: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default ContentBody;
