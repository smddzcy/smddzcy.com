import React from 'react';
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
          personal blog of <a href="https://twitter.com/smddzcy" title="Twitter" rel="nofollow noopener noreferrer" target="_blank">Samed Düzçay</a>.
          <br />
          software engineer, web enthusiast. shares articles, tutorials and his thoughts on various things.
        </div>
        <div>
          <a href="https://linkedin.com/in/smddzcy" title="LinkedIn" rel="nofollow noopener noreferrer" target="_blank" style={{ marginRight: 5 }}>LinkedIn</a>
          &bull;
          <a href="https://github.com/smddzcy" title="GitHub" rel="nofollow noopener noreferrer" target="_blank" style={{ margin: '0 5px' }}>GitHub</a>
          &bull;
          <a href="https://twitter.com/smddzcy" title="Twitter" rel="nofollow noopener noreferrer" target="_blank" style={{ margin: '0 5px' }}>Twitter</a>
          &bull;
          <a href="/cv" title="CV" style={{ margin: '0 5px' }}>CV</a>
        </div>
      </div>
    </div>
  );
}

export default Bio;
