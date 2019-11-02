import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchNews } from 'redux/actions/news-actions';
import { changeCurrentCategory } from 'redux/actions/categories-actions';
import Categories from 'components/Categories';
import NewsList from 'components/NewsList';

const HomePage = ({ fetchNews, categories, news }) => {
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <Categories categories={categories} />
      <NewsList news={news} />
    </div>
  );
}

const mapStateToProps = state => ({
  news: state.newsReducer.items,
  loading: state.newsReducer.isFetching,
  errors: state.newsReducer.error,
  categories: state.categoriesReducer.categories,
})

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
  changeCurrentCategory: () => dispatch(changeCurrentCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
