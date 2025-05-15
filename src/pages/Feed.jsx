import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import PostList from '../components/post/PostList';
import { usePost } from '../context/PostContext';

function Feed() {
  const { getFeedPosts } = usePost();
  const feedPosts = getFeedPosts();

  return (
    <div className="ml-64 min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Feed</h1>
            <p className="text-gray-600">See posts from other users.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            {feedPosts.length > 0 ? (
              <PostList posts={feedPosts} />
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">No posts to display.</p>
                <p className="text-gray-400">When other users create posts, they will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;