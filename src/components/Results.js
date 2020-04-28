import React, {Component} from 'react';
import axios from 'axios';

export default class Results extends Component {
  constructor(props){
    super();
    this.state = {
      ingredients: 'chicken',
      recipes: null
    }
  }

  componentDidMount(){
    console.log(process.env.REACT_APP_ID);
    const URL = `https://api.edamam.com/search?q=${this.state.ingredients}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=10`;
    axios.get(URL).then(results => {
      this.setState({recipes: results.data.hits});
    });
  }

  render(){
    return(
      <div>
        <h1>{this.state.ingredients}</h1>
        <Recipe recipes= {this.state.recipes} />
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
      <div>
        <img src={result.recipe.image} alt={result.recipe.label} />
        <p>{result.recipe.label}</p>
      </div>)}
    </div>
  )
}
