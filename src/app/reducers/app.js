import { combineReducers } from 'redux-immutable';

import restaurants from './restaurants/restaurants';

const app = combineReducers({
	restaurants
});

export default app;