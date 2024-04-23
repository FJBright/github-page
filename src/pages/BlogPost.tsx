import React from 'react';

const BlogPost = (match: { params: { id: string }}) => {
  const postId = match.params.id;

  const blogPost = {
    id: postId,
    title: 'Sample Blog Post',
    content: '', // TODO replace with content from an object
  };

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
}

export default BlogPost;
