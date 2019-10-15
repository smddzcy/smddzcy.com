import { join } from 'path';
import React from 'react';
import { Link } from 'react-navi';
import { formatDate } from '../utils/formats';
import styles from './ArticleMeta.module.css';

function ArticleMeta({ blogRoot, meta, readingTime }) {
  let readingTimeElement;
  if (readingTime) {
    const minutes = Math.max(Math.round(readingTime.minutes), 1);
    const cups = Math.round(minutes / 5);
    readingTimeElement = (
      <>
        {' '}&bull;{' '}
        <span className={styles.readingTime}>
          {new Array(cups || 1).fill('☕️').join('')} {minutes} min read
        </span>
      </>
    );
  }

  return (
    <small className={styles.ArticleMeta}>
      {meta.date && <time dateTime={meta.date.toUTCString()}>{formatDate(meta.date)}</time>}
      {
        meta.tags
        && meta.tags.length
        && (
          <>
            {meta.date && ' • '}
            <ul className={styles.tags}>
              {meta.tags.map(tag => (
                <li key={tag}>
                  <Link href={join(blogRoot, 'tags', tag)}>{tag}</Link>
                </li>
              ))}
            </ul>
          </>
        )
      }
      {readingTimeElement || null}
    </small>
  );
}

export default ArticleMeta;
