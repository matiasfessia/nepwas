import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from 'redux/actions/news-actions';
import NewsList from 'components/NewsList';

const CategoryNewsPage = ({ match, fetchNews, news }) => {

  useEffect(() => {
    fetchNews(match.params.category);
  }, []);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

const mapStateToProps = state => ({
  news: state.newsReducer.items,
  loading: state.newsReducer.isFetching,
  errors: state.newsReducer.error,
})

const mapDispatchToProps = dispatch => ({
  fetchNews: (category) => dispatch(fetchNews(category)),
});

/*
HomePage.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object
}
*/
export default connect(mapStateToProps, mapDispatchToProps)(CategoryNewsPage)
  