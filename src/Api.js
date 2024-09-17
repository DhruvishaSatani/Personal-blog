import axios from 'axios';

// API base URL (can be a real server API or mock server)
const API_URL = 'http://localhost:3000/api';

// Fetch all blog posts
export const getPosts = () => axios.get(`${API_URL}/posts`);

// Fetch a single blog post by ID
export const getPost = (id) => axios.get(`${API_URL}/posts/${id}`);

// Create a new blog post
export const createPost = (post) => axios.post(`${API_URL}/posts`, post);

// Update a blog post by ID
export const updatePost = (id, updatedPost) => axios.put(`${API_URL}/posts/${id}`, updatedPost);

// Delete a blog post by ID
export const deletePost = (id) => axios.delete(`${API_URL}/posts/${id}`);