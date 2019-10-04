import actionConstants from '../../constants/actions';
import data from './data';

const initialState = ({
    data, 
    cdn: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/",
    category: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90,c_fill/",
    seeAll: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_45,h_45,c_fill/See_all_cj8kln"
});


const restaurants = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default restaurants;