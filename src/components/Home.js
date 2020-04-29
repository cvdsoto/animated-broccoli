import React, {Component} from 'react';
import './css/main.css';

class Home extends Component {
  render(){
    return (
      <div>
        <main>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut justo vitae nulla eleifend consequat et at ante. Integer nec efficitur erat. Aliquam nec tempus dolor. Curabitur id turpis id ligula efficitur scelerisque. Maecenas vel ex ac purus placerat cursus.</p>
          <img src="https://truffle-assets.imgix.net/96f876c0-fallback-food-video-asset.jpg?auto=compress,format&fm=pjpg&w=1200" alt="food at table"/>
        </main>
      </div>
    )
  }
}

export default Home;
