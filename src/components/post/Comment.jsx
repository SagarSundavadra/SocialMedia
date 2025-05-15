import React from 'react';

function Comment({ comment }) {
  const formatDate = (dateString) => {
    const options = { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex space-x-2 mb-3">
      <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 text-sm font-bold flex-shrink-0">
        {comment.username.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg p-2">
          <div className="flex items-center mb-1">
            <span className="font-medium text-sm">{comment.username}</span>
            <span className="text-xs text-gray-500 ml-2">{formatDate(comment.timestamp)}</span>
          </div>
          <p className="text-sm text-gray-800">{comment.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;