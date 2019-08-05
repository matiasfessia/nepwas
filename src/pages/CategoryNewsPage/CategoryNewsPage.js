import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from 'redux/actions/news-actions';
import NewsList from 'components/NewsList/NewsList';

class CategoryNewsPage extends Component {

  componentDidMount() {
    this.props.fetchNews(this.props.match.params.category);
  }

  render() {
    return (
      <div>
        <NewsList news={this.props.news} />
      </div>
    );
  };
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
  