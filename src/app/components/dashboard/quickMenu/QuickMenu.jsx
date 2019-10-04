import React from 'react';
import styles from './styles.sass';

class QuickMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jgpy5pwvor7gtfw6qv8r",
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/f6wame7v7ak4rhlmikyh",
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/f8ly75kwqxj3slqlnw4e",
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/fl7pfvz8nltpa0p1bhrl",
                // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tehfywxvomcbseeukdxj",
                // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ggxwvn7eegmilw1xwpel"
            ]
        };
    }

    renderImages = () => {
        
        var images = this.state.images.map((image, index) => {
            return (
                <img key={index} className="image" src={image}/>
            );
        });
        return images;
    }

    render() {
        return (
            <div className="container">
                {this.renderImages()}
            </div>
        );
    }
}

QuickMenu.propTypes = {};

QuickMenu.defaultProps = {};

export default QuickMenu;
