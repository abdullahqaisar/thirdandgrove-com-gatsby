import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';

import { colors } from '../styles';

const LoadableContactUs = loadable(async () => {
  const { ContactUs } = await import('../components/Prefooter');
  return ContactUs;
});

const LoadableBeUs = loadable(async () => {
  const { BeUs } = await import('../components/Prefooter');
  return BeUs;
});

const LoadableNewsletterFullWidthSection = loadable(async () => {
  const { NewsletterFullWidthSection } = await import(
    '../components/NewsletterForm'
  );
  return NewsletterFullWidthSection;
});

const Layout = loadable(() => import('../components/layout'));
const ProjectsSlider = loadable(() => import('../components/ProjectsSlider'));
const InsightsSlider = loadable(() => import('../components/InsightsSlider'));
const CapabilitiesSlider = loadable(() =>
  import('../components/CapabilitiesSlider')
);
const LogoGrid = loadable(() => import('../components/LogoGrid'));
const SplitSection = loadable(() => import('../components/SplitSection'));

const Index = ({ data }) => {
  return (
    <Layout
      headerData={{
        metaTitle: `We are an obsessive digital innovation company`,
        title: (
          <>
            slaying the mundane,
            <br />
            pixel by pixel.
          </>
        ),
        mobileMinHeight: '93vh',
      }}
    >
      <ProjectsSlider data={data.allCaseStudy} />
      <CapabilitiesSlider
        title='What We Do'
        backgroundColor={colors.lightblue}
      />
      <InsightsSlider data={data.allInsight} />
      <LogoGrid title='A Few of Our Friends' />
      <LoadableNewsletterFullWidthSection />
      <SplitSection>
        <LoadableContactUs />
        <LoadableBeUs />
      </SplitSection>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    allCaseStudy(
      sort: { fields: created, order: DESC }
      limit: 7
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        ...CaseStudyFragment
      }
    }
    allInsight(
      sort: { fields: created, order: DESC }
      limit: 4
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        ...InsightFragment
      }
    }
  }
  fragment InsightFragment on insight {
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
            fluid(maxWidth: 530, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          childImageSlideMobile: childImageSharp {
            fluid(maxWidth: 325, maxHeight: 250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          childImageSlideDesktop: childImageSharp {
            fluid(maxWidth: 450, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
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
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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
            fluid(maxWidth: 850, maxHeight: 850, cropFocus: NORTH) {
              ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyImageSharpFluid_withWebp
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
`;
