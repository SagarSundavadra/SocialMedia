import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import CreatePost from '../components/post/CreatePost';
import PostList from '../components/post/PostList';
import { usePost } from '../context/PostContext';

function YourPosts() {
  const { getUserPosts } = usePost();
  const userPosts = getUserPosts();

  return (
    <div className=" ml-64 min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Your Posts</h1>
            <p className="text-gray-600">Create and manage your posts.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
            <CreatePost />
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">All Your Posts</h2>
            {userPosts.length > 0 ? (
              <PostList posts={userPosts} />
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">You haven't created any posts yet.</p>
                <p className="text-gray-400 mt-2">Use the form above to create your first post!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourPosts;