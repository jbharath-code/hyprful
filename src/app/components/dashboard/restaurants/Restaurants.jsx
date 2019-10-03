import React from 'react';
import styles from './styles.sass';

class Restaurants extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            categories: [
                {
                    name:"Offers near you",
                    id: "offers",
                    count: 9
                },
                {
                    name:"Express Delivery",
                    id: "express",
                    count: 12
                },
                {
                    name:"Only on Swiggy",
                    id: "only",
                    count: 20
                },
                {
                    name:"Vegetarians near you",
                    id: "veg",
                    count: 11
                },
                {
                    name:"Pocket friendly",
                    id: "pocket",
                    count: 40
                },
                {
                    name:"What's new",
                    id: "new",
                    count: 6
                },
                {
                    name:"SEE ALL",
                    id: "all",
                    count: 50
                }
            ]
        }
    }

    renderCategories = () => {
        var categories = this.state.categories.map((category, index) => {
            return (
                <a href={`#${category.id}`} className="category-href">
                    <div className="category-details">
                        <div className="category-name">
                            {category.name}
                        </div>
                        <div className="category-count">
                            {category.count} options
                        </div>
                    </div>
                </a>
            );
        });
        return categories;
    }

    renderRestaurantsInCategories = () => {
        var restaurants = this.state.categories.map((category, index) => {
            return (
                <div id={category.id}>
                        {category.name}
                </div>
            );
        });
        return restaurants;
    }

    render() {
        return (
            <div className="restaurants-container">
                <div className="categories">
                    {this.renderCategories()}
                </div>
                <div className="category-restaurants">
                    {this.renderRestaurantsInCategories()}
                </div>
            </div>
        );
    }
}

Restaurants.propTypes = {};

Restaurants.defaultProps = {};

export default Restaurants;
