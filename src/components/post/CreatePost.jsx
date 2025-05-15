import React, { useState } from 'react';
import { usePost } from '../../context/PostContext';

function CreatePost() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const { createPost } = usePost();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select an image');
      return;
    }

    createPost(image);
    setImage(null);
    setPreview('');
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <form onSubmit={handleSubmit}>
        {preview && (
          <div className="mb-4">
            <img src={preview} alt="Preview" className="max-h-64 rounded-md" />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-3 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!image}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition disabled:opacity-50"
          >
            Post Image
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
