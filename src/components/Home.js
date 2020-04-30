import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/main.css';

class Home extends Component {
  render(){
    return (
      <div>
        <main>
          <h2>How does this work?</h2>
          <div className="steps">
            <span className="number">1</span>
            <p>Type in the ingredients you have in your fridge</p>
          </div>
          <div className="steps">
            <span className="number">2</span>
            <p>Select dietary and health filters</p>
          </div>
          <div className="steps">
            <span className="number">3</span>
            <p>Choose the recipe that you want to try!</p>
          </div>
          <Link to ='/search' className="search-button">Start your Search!</Link>
          <img src="https://truffle-assets.imgix.net/96f876c0-fallback-food-video-asset.jpg?auto=compress,format&fm=pjpg&w=1200" alt="food at table"/>
          <p>Cupcake ipsum dolor sit amet. Jujubes topping brownie sugar plum jelly beans sesame snaps candy canes tart chocolate bar. Pudding I love cookie candy canes jelly beans halvah I love liquorice. I love croissant bear claw sweet dragée I love carrot cake brownie halvah.</p>
        </main>
      </div>
    )
  }
}

export default Home;
