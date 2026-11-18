import React, { useState } from 'react';

export default function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`p-6 rounded-lg shadow-md cursor-pointer transition-colors duration-200 ${
        clicked ? 'bg-blue-100' : 'bg-white'
      }`}
    >
      <h2 className="text-lg font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">{body}</p>
    </div>
  );
}