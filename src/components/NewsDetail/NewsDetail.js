import React from 'react';

const newsDetail = ({article}) => {
  const formatedPublishedAt = new Date(article.publishedAt).toLocaleDateString();
  return (
    <article className="news-detail">
      <a className="news-detail__link" href={article.url}>
        <h1 className="news-detail__title">{article.title}</h1>
        <p className="news-detail__brief">{article.description}</p>
        <p className="news-detail__data-and-source">{article.source.name} - {formatedPublishedAt}</p>
      </a>
    </article>
  );
};

export default newsDetail;