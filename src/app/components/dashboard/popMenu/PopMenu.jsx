import React from 'react';
import styles from './styles.sass';

class PopMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_180,c_fill/c3zh4iknz1caxklbj4ap",
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_180,c_fill/j0l0nrvcex7rpmwt2krz",
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_180,c_fill/joyhi8r9uljpldhvhyjg"
            ]
        }
    }

    renderImages = () => {
        var images = this.state.images.map((image, index) => {
            let style = {};
            let calcIndex = (this.state.images.length - 1) - index;
            if(calcIndex > 0){
                style = {
                    'position': 'relative',
                    'right': '-'+calcIndex*25+'px',
                    'zIndex': calcIndex
                };
            }
            return (
                <img className="pop-image" style={style} src={image}/>
            );
        })
        
        return images;
    }


    render() {
        return (
            <div className="pop-container">
                <div className="image-container">
                    {this.renderImages()}
                </div>
                <div className="pop-content">
                    <p className="pop-title">
                        Introducing Swiggy pop
                    </p>
                    <p className="pop-features">
                    Single Serve Meals, Free Delivery, No Extra Charges
                    </p>
                </div>
                <div className="order-now">
                    Order Now
                </div>
            </div>
        );
    }
}

PopMenu.propTypes = {};

PopMenu.defaultProps = {};

export default PopMenu;
