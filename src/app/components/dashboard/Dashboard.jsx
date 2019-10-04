import React from 'react';
import styles from './styles.sass';

import Header from './header';
import PopMenu from './popMenu';
import QuickMenu from './quickMenu';
import Restaurants from './restaurants';

class Dashboard extends React.Component {


    render() {
        return (
            <div className="dashboard">
				<div className="header">
					<Header/>
				</div>
				<div className="quick-menu">
					<QuickMenu/>			
				</div>
				<div className="pop-menu">
					<PopMenu/>
				</div>
				<div className="restaurants">
					<Restaurants {...this.props}/>
				</div>
            </div>
        );
    }
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
