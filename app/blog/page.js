"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

// api route : http://api.dev.finsy.in/
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://api.dev.finsy.in/api/posts/'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data); 
        // console.log(data)
        if (data && Array.isArray(data.posts)) {
          setPosts(data.posts);
        } else {
          console.error('Unexpected data format:', data);
          setPosts([]); 
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  
  if (loading) {
    return <p>Loading posts...</p>;
  }

 
  return (
    <div>
    <nav className="fixed top-0 w-full bg-black shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-400 dark:text-white">Finsy</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-800">Home</Link>
              <a href="#about" className="text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-800">Finsy</a>
              <a href="#contact" className="text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-800">Contact</a>
              <Link href="/blog" className="text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-800">Blogs</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className="h-16"></div>

    <section id="blog-content" className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 pt-10">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Blog Page</h1>
  
        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No posts available.</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md">
                <Link href={`/blog/${post.id}`} className="text-xl font-medium text-green-400 hover:text-green-300">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  </div>  
  );
};

export default Blog;
