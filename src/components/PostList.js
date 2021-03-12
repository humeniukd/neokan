import React from 'react';
import PostListItem from './PostListItem';

const PostList = (props) => {
  return (
    <nav>
      <ul>
        {props.posts.map(post =>
          <PostListItem post={post} />
        )}
      </ul>
    </nav>
  );
};

export default PostList;
