import React, { useState } from 'react';
// import BlogList from '../Components/BlogList';
// import Header from '../Components/Header';
import BlogPage from '../Componets/BlogPage';
import Header from '../Componets/Header';
import BlogList from '../Componets/BlogList';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(null);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const updateBlog = (updatedBlog) => {
    const updatedBlogs = blogs.map((blog, index) =>
      index === currentBlogIndex ? updatedBlog : blog
    );
    setBlogs(updatedBlogs);
    setCurrentBlogIndex(null);
  };

  const handleDelete = (index) => {
    setBlogs(blogs.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setCurrentBlogIndex(index);
  };

  return (
    <div>
      <Header />
      <BlogPage
        onSubmit={currentBlogIndex !== null ? updateBlog : addBlog}
        editBlog={currentBlogIndex !== null ? blogs[currentBlogIndex] : null}
      />
      <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage