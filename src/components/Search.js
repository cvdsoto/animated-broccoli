import React, {Component} from 'react';
import Checkbox from './Checkbox';
import {Redirect, withRouter} from 'react-router-dom';

const healthOptions = ["vegan", "vegetarian", "sugar-conscious", "peanut-free", "tree-nut-free", "alcohol-free"];

class Search extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      ingredients: '',
      selectedOption: '',
      healthOptions: null,
      checkboxes: healthOptions.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOptionChange = this._handleOptionChange.bind(this);
    this._handleCheckboxChange = this._handleCheckboxChange.bind(this);
  }

  _handleInput(e){
    this.setState({ingredients:e.target.value});
  }

  _handleOptionChange(e){
    this.setState({selectedOption: e.target.value});
  }

  _handleCheckboxChange(e){
    const {name} = e.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  }

  _handleSubmit(e){
    let healthFilters = [];
    e.preventDefault();
    this.setState({redirect: true});
    Object.keys(this.state.checkboxes).filter(checkbox => this.state.checkboxes[checkbox]).forEach(checkbox => {
    healthFilters.push(checkbox);
    });
    this.setState({healthOptions: healthFilters})
  }

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this._handleCheckboxChange}
      key={option} />
  )

  createCheckboxes = () => healthOptions.map(this.createCheckbox);

  render() {
    if (this.state.redirect){
      return <Redirect to={{
        pathname:'/results',
        state: {query: this.state.ingredients,
                diet: this.state.selectedOption,
                health: this.state.healthOptions}
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

        {this.createCheckboxes()}

        <input type="submit" value="Search" />
      </form>
    </div>
    )
  }
}

export default withRouter(Search);
