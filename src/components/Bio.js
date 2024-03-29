import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Socials from './Socials';

import { container, logoContainer } from '../css/components/Bio.module.css';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;

  return (
    <div className={container}>
      <div className={logoContainer}>
        <StaticImage src="../../static/images/logo-seiva.png" width={48} height={48} />
        <div>
          <p>
            <strong>{author.name}</strong>
          </p>
          <p>
            {author.summary}
          </p>
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Bio;
