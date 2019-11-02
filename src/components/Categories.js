import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Categories = ({ categories, userId }) => {
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

Categories.propTypes = {
  //categories: PropTypes.array.isRequired
  userId: PropTypes.number.isRequired
}

export default Categories;