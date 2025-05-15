import React from 'react';
import PostCard from './PostCard';

function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p className="text-gray-500 text-center py-4">No posts to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;