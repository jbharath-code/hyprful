import React from 'react';
import styles from './styles.sass';

class Header extends React.Component {


    constructor(props){
        super(props)
        this.state ={
            options:[
                {
                    image: "https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/10/01/96/shopping-bag.svg",
                    name: "Cart"
                },
                {
                    image: "https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/10/01/71/user.svg",
                    name: "Bharath"
                },
                {
                    image: "https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/10/01/15/discount.svg",
                    name: "Offers"
                },
                {
                    image: "https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/10/01/8/life-saver.svg",
                    name: "Help"
                },
                {
                    image: "https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/10/01/11/search.svg",
                    name: "Search"
                }
            ]
        }
    }

    renderOptions = () => {

        var options = this.state.options.map((option, index) => {
            return (
                <div className="menu-item" key={index}>
                    <img className="option-image" src={option.image}/>
                    <span>
                        {option.name}
                    </span>
                </div>
            );
        });

        return options;
    }

    render() {
        return (
            <div className="header-container">
                <div className="logo-others">
                    <img 
                        className="swiggy-logo"
                        src="https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/10/01/32/logo.webp"/>
                    <div className="address">
                        <span className="address-tag">
                            WORK
                        </span>
                    </div>
                </div>
                <div className="header-menu-container">
                    <div className="header-menu">
                        {this.renderOptions()}
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
