import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import vegan from './img/vegan.svg';
import vegetarian from './img/vegetarian.svg';
import sugar from './img/sugar-conscious.svg';
import peanut from './img/peanut-free.svg';
import treeNut from './img/tree-nut-free.svg';
import alcohol from './img/alcohol-free.svg';

export default class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: props.location.state.query,
      diet: props.location.state.diet,
      health: props.location.state.health,
      recipes: null
    }
  }

  componentDidMount(){
    const BASE_URL = 'https://api.edamam.com/search?q='
    const FILTERS = `${this.state.ingredients}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=12`;
    let URL = BASE_URL + FILTERS;

    console.log('what is diet', this.state.diet);
    const healthFilters = this.state.health;
    if (this.state.diet !== ''){
      console.log('i am inside diet');
      URL += `&diet=${this.state.diet}`;
      console.log('i am inside diet', URL);
    }
    if (healthFilters.length > 0){
      console.log('i am inside health');
      const healthString = healthFilters.join('&health=');
      URL += '&health=' + healthString;
      console.log('i am inside health', URL);
    }

    axios.get(URL).then(results => {
      this.setState({recipes: results.data.hits});
      console.log('axios results', results.data.hits);
    });
  }

  render(){
    return(
      <div>
        <Header />
        <main>
          <h3>Results for {this.props.location.state.query}</h3>
          <Recipe recipes= {this.state.recipes} />
        </main>
      </div>
    )
  }
}

const getIcon = (labels) => {
  let icon = [];
  for (let i = 0; i < labels.length; i++){
    if (labels[i] === 'Vegan'){
      icon.push(<span className="tooltip"><img src={vegan} className="icons" alt={labels[i]} /><span className="tooltiptext-result">{labels[i]}</span></span>);
    } else if( labels[i] === 'Vegetarian') {
      icon.push(<span className="tooltip"><img src={vegetarian} className="icons" alt={labels[i]} /><span className="tooltiptext-result">{labels[i]}</span></span>);
    } else if( labels[i] === 'Sugar-Conscious') {
      icon.push(<span className="tooltip"><img src={sugar} className="icons" alt={labels[i]} /><span className="tooltiptext-result">{labels[i]}</span></span>)
    } else if( labels[i] === 'Peanut-Free') {
      icon.push(<span className="tooltip"><img src={peanut} className="icons" alt={labels[i]} /><span className="tooltiptext-result">{labels[i]}</span></span>);
    } else if( labels[i] === 'Tree-Nut-Free') {
      icon.push(<span className="tooltip"><img src={treeNut} className="icons" alt={labels[i]} /><span className="tooltiptext-result">{labels[i]}</span></span>);
    } else if( labels[i] === 'Alcohol-Free') {
      icon.push(<span className="tooltip"><img src={alcohol} className="icons" alt={labels[i]} /><span className="tooltiptext-result">{labels[i]}</span></span>);
    }
  }
  console.log('here is icon', icon);
  return icon;
}

const Recipe = (props) => {
  if (props.recipes === null) {
    return(<div>Loading...</div>);
  } else if (props.recipes.length === 0){
    return(
      <div>
        <p>Sorry! No results to show!</p>
        <Link to ='/search' className="search-button">Search Again</Link>
      </div>
    )
  }
  return(
    <div className="recipe-container">
    {props.recipes.map((result) =>
      <div className="recipe"
           onClick={() =>
            window.open(result.recipe.url)}>
        <img src={result.recipe.image} alt={result.recipe.label} />
        <p className="name">{result.recipe.label}</p>
        <p className="details">Diet: {result.recipe.dietLabels.join(', ')}</p>
        <p className="details">{getIcon(result.recipe.healthLabels)}</p>
      </div>)}
    </div>
  )
}
