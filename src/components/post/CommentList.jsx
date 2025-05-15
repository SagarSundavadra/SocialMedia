import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <p className="text-gray-500 text-sm">No comments yet. Be the first to comment!</p>;
  }

  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;