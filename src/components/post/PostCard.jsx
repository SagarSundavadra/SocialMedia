import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { usePost } from "../../context/PostContext";
import CommentList from "./CommentList";

function PostCard({ post }) {
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const { currentUser } = useAuth();
  const { likePost, addComment } = usePost();

  const handleLike = () => {
    likePost(post.id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    addComment(post.id, comment);
    setComment("");
    setShowComments(true);
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isLiked = post.likes.includes(currentUser.id);
  const likeCount = post.likes.length;
  const commentCount = post.comments.length;

  return (
    <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-purple-700 font-bold">
              {post.username.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3">
              <div className="font-medium">{post.username}</div>
              <div className="text-xs text-gray-500">
                {formatDate(post.timestamp)}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          {post.content && (
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
              <img
                src={post.content}
                alt="User post"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center text-sm text-gray-500 border-t pt-3">
          <button
            onClick={handleLike}
            className={`flex items-center mr-4 ${
              isLiked ? "text-purple-600" : "hover:text-purple-600"
            }`}
          >
            <span className="mr-1">❤️</span>
            <span>
              {likeCount} {likeCount === 1 ? "Like" : "Likes"}
            </span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center hover:text-purple-600"
          >
            <span className="mr-1">💬</span>
            <span>
              {commentCount} {commentCount === 1 ? "Comment" : "Comments"}
            </span>
          </button>
        </div>
      </div>

      {showComments && (
        <div className="bg-gray-50 p-4 border-t">
          <CommentList comments={post.comments} />

          <form onSubmit={handleCommentSubmit} className="mt-3 flex">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-300"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className="bg-purple-500 text-white px-4 rounded-r-md hover:bg-purple-600 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PostCard;
