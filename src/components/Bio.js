import React from 'react';
import styles from './Bio.module.css';

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}
    >
      <img src="https://pbs.twimg.com/profile_images/781276128673689600/tGOdd3qK_400x400.jpg" alt="Me" />
      <div>
        <div>
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
