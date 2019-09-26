import React from 'react';
import { Link } from 'react-navi';
import { MDXProvider } from '@mdx-js/tag';
import styles from './BlogPostLayout.module.css';

function MDX({ MDXComponent }) {
  return (
    <MDXProvider components={{
      a: props => {
        const newProps = { ...props };
        if (!props.rel && props.href.includes('http')) {
          // external link
          newProps.rel = 'nofollow noopener noreferrer';
          newProps.target = '_blank';
        }
        return <Link {...newProps} />;
      },
      wrapper: ({ children }) => (
        <div className={styles.content}>
          {children}
        </div>
      ),
    }}
    >
      <MDXComponent />
    </MDXProvider>
  )
}

export default MDX;