import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { getPosts } from './Services';

export default function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchAndSetPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
        Post Cards
      </h1>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            title={post.title} 
            body={post.body} 
          />
        ))}
      </div>
    </div>
  );
}