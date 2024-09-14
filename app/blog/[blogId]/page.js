"use client"
import { useRouter, useParams  } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


const BlogPost = () => {
  const router = useRouter();
  const params = useParams();
  const blogId = params.blogId; 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    if (blogId) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`http://api.dev.finsy.in/api/posts/${blogId}/`);
          setPost(response.data);
          //console.log(data)
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch blog post');
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [blogId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>No post found</div>;

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
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h2>
      <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-6">{post.author}</h3>
      <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
    </div>
  </section>
</div>

  );
};

export default BlogPost;
