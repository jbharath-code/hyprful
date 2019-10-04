import actionConstants from '../../constants/actions';
import data from './data';

const initialState = ({
    data, 
    cdn: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
});


const restaurants = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default restaurants;