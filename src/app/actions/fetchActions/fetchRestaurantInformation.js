import urls from '../../constants/urls';
import apiFetch from '../util/apiFetch';

const fetchRestaurantInformation = () => (dispatch) => apiFetch(
    urls.RESTAURANTS_API
)
.then((response) => {
    dispatch({
        type: "RESTAURANT_INFO_FETCHED",
        payload: response
    });
});

export default fetchRestaurantInformation;