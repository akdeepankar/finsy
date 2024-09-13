"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPost = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (blogId) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`https://api.dev.finsy.in/api/posts/${blogId}/`);
          setPost(response.data);
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
      <p>{post}</p>
    </div>
  );
};

export default BlogPost;
