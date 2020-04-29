import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';

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
    const FILTERS = `${this.state.ingredients}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=10`;
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

const Recipe = (props) => {
  if (props.recipes === null) {
    return(<div>Loading...</div>);
  }
  return(
    <div>
    {props.recipes.map((result) =>
      <div className="recipe"
           onClick={() =>
            window.open(result.recipe.url)}>
        <img src={result.recipe.image} alt={result.recipe.label} />
        <p>{result.recipe.label}</p>
        <p>{result.recipe.dietLabels.join(', ')}</p>
      </div>)}
    </div>
  )
}
