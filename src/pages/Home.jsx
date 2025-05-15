import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import { useAuth } from '../context/AuthContext';
import CreatePost from '../components/post/CreatePost';
import PostList from '../components/post/PostList';
import { usePost } from '../context/PostContext';

function Home() {
  const { currentUser } = useAuth();
  const { getUserPosts } = usePost();
  const userPosts = getUserPosts();

  return (
    <div className="ml-64 min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Welcome, {currentUser.username}!</h1>
            <p className="text-gray-600">This is your home page. You can create posts, view your posts, and explore the feed.</p>
          </div>
          
          {/* <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
            <CreatePost />
          </div> */}
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Your Recent Posts</h2>
            {userPosts.length > 0 ? (
              <PostList posts={userPosts.slice(0, 3)} />
            ) : (
              <p className="text-gray-500">You haven't created any posts yet.</p>
            )}
            {userPosts.length > 3 && (
              <div className="mt-4 text-center">
                <a href="/posts" className="text-blue-500 hover:underline">View all your posts</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;