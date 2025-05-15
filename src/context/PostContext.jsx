import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const PostContext = createContext();

export const usePost = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    // Load posts from localStorage on initial load
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);

  const createPost = (content) => {
    const newPost = {
      id: Date.now().toString(),
      content,
      userId: currentUser.id,
      username: currentUser.username,
      timestamp: new Date().toISOString(),
      likes: [],
      comments: []
    };

    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const likePost = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id === postId) {
          // Toggle like
          const userLiked = post.likes.includes(currentUser.id);
          if (userLiked) {
            return {
              ...post,
              likes: post.likes.filter(id => id !== currentUser.id)
            };
          } else {
            return {
              ...post,
              likes: [...post.likes, currentUser.id]
            };
          }
        }
        return post;
      })
    );
  };

  const addComment = (postId, comment) => {
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id === postId) {
          const newComment = {
            id: Date.now().toString(),
            userId: currentUser.id,
            username: currentUser.username,
            content: comment,
            timestamp: new Date().toISOString()
          };
          
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      })
    );
  };

  const getUserPosts = () => {
    return posts.filter(post => post.userId === currentUser.id);
  };

  const getFeedPosts = () => {
    return posts.filter(post => post.userId !== currentUser.id);
  };

  const value = {
    posts,
    createPost,
    likePost,
    addComment,
    getUserPosts,
    getFeedPosts
  };

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;