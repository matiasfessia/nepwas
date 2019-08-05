import { callApi } from 'helpers/apiUtils';
import { API_KEY, API_URL } from 'configs/environment-variables';
import { FETCH_NEWS } from 'redux/constants';

export function fetchNews(category = null) {
  let url = `${API_URL}/v2/top-headlines?country=ar&apiKey=${API_KEY}`;

  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  if (category !== null) {
    if (categories.includes(category)) {
      url += `&category=${category}`;
    } else {
      console.log('category not found, return to homepage or show 404')
    }
  }

  return callApi(
    url,
    FETCH_NEWS,
    'get',
  )
}