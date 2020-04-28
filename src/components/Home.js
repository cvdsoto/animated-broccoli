import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div>
        <h1>Recipe Finder!</h1>
        <Link to="/search">Search Recipes!</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut justo vitae nulla eleifend consequat et at ante. Integer nec efficitur erat. Aliquam nec tempus dolor. Curabitur id turpis id ligula efficitur scelerisque. Maecenas vel ex ac purus placerat cursus.</p>
        <img src="https://truffle-assets.imgix.net/96f876c0-fallback-food-video-asset.jpg?auto=compress,format&fm=pjpg&w=1200" alt="food at table"/>
      </div>
    )
  }
}

export default Home;
