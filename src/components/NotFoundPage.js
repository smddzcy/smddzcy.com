import React from 'react';
import { Link } from 'react-navi';
import styles from './NotFoundPage.module.css';
import doge from './astronaut-doge.gif';

// Note that create-react-navi-app will always show an error screen when this
// is rendered. This is because the underlying react-scripts package shows
// the error screen when a NotFoundError is thrown, even though it's caught
// by <NotFoundBoundary>. To see the error rendered by this function,
// you'll just need to close the error overlay with the "x" at the top right.
function NotFoundPage() {
  return (
    <div className={styles.NotFound}>
      <h1>404 - Not Found</h1>
      <div><img src={doge} alt="Astronaut Doge" style={{ maxWidth: 320 }} /></div>
      <div style={{ marginTop: '2rem' }}>You're drunk, <Link href="/">go home</Link>.</div>
    </div>
  );
}

export default NotFoundPage;
