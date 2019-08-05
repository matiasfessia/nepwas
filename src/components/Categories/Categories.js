import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      <button type="button">All Categories</button>
      <ul>
      {
        categories.map((category, index) => (
        <li><Link to={`/${category}`} key={index}>{category}</Link></li>
        ))
      }
      </ul>
    </div>
  );
};

export default Categories;