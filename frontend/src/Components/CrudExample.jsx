import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudExample = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const createPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'New Post',
        body: 'This is the content of the post.',
        userId: 1,
      });
      setPosts([...posts, response.data]); // Add new post to state
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const updatePost = async (postId) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        title: 'Updated Title',
        body: 'Updated content of the post.',
      });
      setPosts(posts.map(post => (post.id === postId ? response.data : post))); // Update state
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPosts(posts.filter(post => post.id !== postId)); // Remove from state
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <button className="btn my-3" onClick={createPost}>Create Post</button>
      <ul className='grid grid-cols-3 gap-3'>
        {posts.map(post => (
          <li key={post.id} className='card'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className='delete-btn !bg-sky-600 mr-2' onClick={() => updatePost(post.id)}>Update</button>
            <button className='delete-btn' onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudExample;
