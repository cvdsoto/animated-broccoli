import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      ingredients: '',
      selectedOption: ''
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOptionChange = this._handleOptionChange.bind(this);

  }

  _handleInput(e){
    this.setState({ingredients:e.target.value});
  }

  _handleSubmit(e){
    e.preventDefault();
    this.setState({redirect: true})
  }

  _handleOptionChange(e){
    this.setState({selectedOption: e.target.value});
  }

  render() {
    if (this.state.redirect){
      return <Redirect to={{
        pathname:'/results',
        state: {query: this.state.ingredients,
                diet: this.state.selectedOption}
      }} />
    }
    return (
    <div>
      <form onSubmit={this._handleSubmit}>
        <label>
          Ingredients:
          <input type="search"
                  onChange={this._handleInput}/>
        </label>
        <label>
          <input type="radio"
                 value="balanced"
                 checked={this.state.selectedOption === 'balanced'}
                 onChange={this._handleOptionChange} /> Balanced
        </label>

        <label>
          <input type="radio"
                 value="high-protein"
                 checked={this.state.selectedOption === 'high-protein'}
                 onChange={this._handleOptionChange} /> High-Protein
        </label>

        <label>
          <input type="radio"
                 value="low-fat"
                 checked={this.state.selectedOption === 'low-fat'}
                 onChange={this._handleOptionChange} /> Low-Fat
        </label>

        <label>
          <input type="radio"
                 value="low-carb"
                 checked={this.state.selectedOption === 'low-carb'}
                 onChange={this._handleOptionChange} /> Low-Carb
        </label>

        <input type="submit" value="Search" />
      </form>
    </div>
    )
  }
}

export default withRouter(Search);
