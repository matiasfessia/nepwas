import React from 'react';
import NewsDetail from './NewsDetail';

const NewsList = ({news}) => (
  <div className="news">
    { news.map((article, index) => (<NewsDetail article={article} key={index} />)) }
  </div>
);

export default NewsList;