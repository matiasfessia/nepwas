import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNews } from 'redux/actions/news-actions';
import { changeCurrentCategory } from 'redux/actions/categories-actions';
import Categories from 'components/Categories';
import NewsList from 'components/NewsList/NewsList';


class HomePage extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div>
        <Categories categories={this.props.categories} />
        <NewsList news={this.props.news} />
      </div>
    );
  };
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

/*
HomePage.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object
}
*/
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
