import React from 'react';
import { Link } from 'react-navi';
import { MDXProvider } from '@mdx-js/react';
import styles from './BlogPostLayout.module.css';

function MDX({ MDXComponent, className }) {
  return (
    <MDXProvider components={{
      a: props => {
        const newProps = { ...props };
        if (!props.follow && props.href.includes('http')) {
          // external link
          newProps.rel = 'nofollow noopener noreferrer';
          newProps.target = '_blank';
        }
        delete newProps.follow;
        return <Link {...newProps} />;
      },
      wrapper: ({ children }) => (
        <div className={`${styles.content} ${className || ''}`}>
          {children}
        </div>
      ),
    }}
    >
      <MDXComponent />
    </MDXProvider>
  );
}

export default MDX;
