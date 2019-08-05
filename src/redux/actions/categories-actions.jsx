// import { callApi } from 'helpers/apiUtils';
// import { API_KEY, API_URL } from 'configs/environment-variables';
// import { FETCH_NEWS } from 'redux/constants';

export function changeCurrentCategory(category) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_CURRENT_CATEGORY',
      category,
    });
  }
}