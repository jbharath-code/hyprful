import React from 'react';
import { connect } from 'react-redux';
import fetchRestaurantsInformation from '../actions/fetchActions/fetchRestaurantInformation';
import Dashboard from '../components/dashboard';
class HomeContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurantsInformation();
    }


    render() {
        return (
            <Dashboard restaurants={this.props.restaurants}/>
        );
    }
}

HomeContainer.propTypes = {};

HomeContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        restaurants: state.get('restaurants')
    }
};

const mapDispatchToProps = dispatch => ({
    fetchRestaurantsInformation: () => {
        dispatch(fetchRestaurantsInformation());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
