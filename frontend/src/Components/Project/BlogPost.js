import { LikeButton } from '@lyket/react';
import React from 'react';

function BlogPost(props) {
  return (
    <div>
    
    <LikeButton
      id="how-to-reduce-footprint"
      namespace="post"
    />
    {props.Like}
  </div>
  )
}

export default BlogPost
