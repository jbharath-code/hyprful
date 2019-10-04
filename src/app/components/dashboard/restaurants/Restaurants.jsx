import React from 'react';
import styles from './styles.sass';

class Restaurants extends React.Component {


    constructor(props){
        super(props);
    }

    renderCategories = () => {
        let categories = this.props.restaurants.data.data.cards[1].data.data.cards;
        categories = categories.map((category, index) => {
            return (
                <a key={category.data.creativeId} href={`#${category.data.creativeId}`} className="category-href">
                    <div className="category-details">
                        <div className="category-image-container">
                            <img 
                                className="category-image"
                                src={`${this.props.restaurants.category + category.data.dwebOpenFilterSelectIcon}`}
                            />
                        </div>
                        <div className="category-text-details">
                            <div className="category-name">
                                {category.data.title}
                            </div>
                            <div className="category-count">
                                {category.data.subtitle}
                            </div>
                        </div>
                    </div>
                </a>
            );
        });
        return categories;
    }

    renderRestaurantsInCategories = () => {
        let categories = this.props.restaurants.data.data.cards[1].data.data.cards;
        categories = categories.map((category, index) => {
            return (
                <div key={category.data.creativeId} id={category.data.creativeId} className="category-specific">
                        <div className="restaurant-list">
                            <span className="cateogory-title">
                                {category.data.title}
                            </span>
                            <div className="list">
                                {this.renderRestaurants(category.data.restaurants)}
                                {this.renderMore(category.data)}
                            </div>
                        </div>
                </div>
            );
        });
        return categories;
    }

    renderMore = (data) => {
        if(data.totalCount > 9){
            return (
                <div className="more">
                    + {data.totalCount - 8} more
                </div>
            );
        }
        else{
            return null;
        }
    }

    renderRestaurants = (restaurants) => {

        restaurants = restaurants.map((restaurant, index) => {
           return (
            <div className="details-container">
                <div className="details-box">
                   <div className="details-image">
                       <img 
                            className="details-image-transistion"
                            src={`${this.props.restaurants.cdn+restaurant.cloudinaryImageId}`}
                        />
                   </div>
                   <p className="restaurant-name">
                       {restaurant.name}
                   </p>
                   <div className="restaurant-cuisine">
                       {restaurant.cuisines.join(', ')}
                   </div>
                   <div className="rating-sla-cost">
                       <div className={this.getClassNameForRating(restaurant.avgRating)}>
                           <span className="star">
                                &#9733;
                           </span>
                           <span>
                                {restaurant.avgRating}
                           </span>
                       </div>
                       <div>•</div>
                       <div>
                           {restaurant.slaString}
                       </div>
                       <div>•</div>
                       <div>
                           {restaurant.costForTwoString}
                       </div>
                   </div>
                   {this.renderDiscountBanner(restaurant)}
                   
                </div>
            </div>
           );
        });

        return restaurants;
    }

    renderDiscountBanner = (restaurant) => {
        
        let result = null;
        if(restaurant.hasOwnProperty('tradeCampaignHeaders') && restaurant.tradeCampaignHeaders.length != 0){
            result  = (
                <div className="discount-banner">
                    {restaurant.tradeCampaignHeaders[0].description}
                </div>
            );
        }  
        return result;
    }

    getClassNameForRating = (avgRating) => {
        if(avgRating > 4){
            return "green";
        }
        else {
            return "orange";
        }
    }

    render() {
        let seeAll = this.props.restaurants.data.data.cards[2].data.data;
        return (
            <div className="restaurants-container">
                <div className="categories">
                    {this.renderCategories()}
                    <a className="category-href">
                        <div className="category-details">
                            <div className="see-all-image-container">
                                <img 
                                    className="see-all-image"
                                    src={`${this.props.restaurants.seeAll}`}
                                />
                            </div>
                            <div className="category-text-details">
                                <div className="category-name">
                                   {seeAll.title}
                                </div>
                                <div className="category-count">
                                    {seeAll.totalOpenRestaurants} Options
                                </div>
                            </div>
                        </div>
                    </a>
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
