import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from './Link';
import PostList from './PostList';

const Posts = (props) => {
  const btnMorePosts = props.showBtnMorePosts
    ? (
      <FormattedMessage id="news.seeMore">
        {(txt) => (
          <Link to={`/${props.langKey}/news/`}>
            {txt}
          </Link>
        )}
      </FormattedMessage>
    )
    : null;

  return (
    <section>
      <header>
        <Link to={`/${props.langKey}/news/`}>
          <FormattedMessage id={props.title || 'posts'}>
            {(txt) => (
              <h2>{txt}</h2>
            )}
          </FormattedMessage>
        </Link>
      </header>
      <PostList {...props} />
      {btnMorePosts}
    </section>
  );
};

export default Posts;
