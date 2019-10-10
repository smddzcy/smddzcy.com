import React from 'react';
import { Link } from 'react-navi';
import styles from './Bio.module.css';
import profilePic from './profilepic.png';

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}
    >
      <img src={profilePic} alt="Me" />
      <div>
        <div>
          personal blog of <a href="https://twitter.com/smddzcy" rel="nofollow noopener noreferrer" target="_blank">Samed Düzçay</a>.
          <br />
          software engineer, web enthusiast. shares articles, tutorials and his thoughts on various things.
        </div>
        <div className={styles.headerLinks}>
          <Link href="/projects/" title="projects">Portfolio</Link>
          <span className={styles.bull}>&bull;</span>
          <a href="https://linkedin.com/in/smddzcy" rel="nofollow noopener noreferrer" target="_blank">LinkedIn</a>
          <span className={styles.bull}>&bull;</span>
          <a href="https://github.com/smddzcy" rel="nofollow noopener noreferrer" target="_blank">GitHub</a>
          <span className={styles.bull}>&bull;</span>
          <a href="https://twitter.com/smddzcy" rel="nofollow noopener noreferrer" target="_blank">Twitter</a>
          <span className={styles.bull}>&bull;</span>
          <a href="/cv/" title="CV">CV</a>
        </div>
      </div>
    </div>
  );
}

export default Bio;
