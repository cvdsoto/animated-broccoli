import React, {Component} from 'react';
import Header from './Header';
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
      <Header />
      <main>
        <form onSubmit={this._handleSubmit}>
        <h3>Add the items in your fridge</h3>
          <label className="search">
            <input type="search"
                   onChange={this._handleInput}
                   required />
          </label>

          <div className="container">
            <div className="radiobuttons">
              <h3>Dietary Filters</h3>
              <label className="rb-container">
                <input type="radio"
                       value="balanced"
                       checked={this.state.selectedOption === 'balanced'}
                       onChange={this._handleOptionChange} /> Balanced
                <span className="checkmark"></span>
              </label>

              <label className="rb-container">
                <input type="radio"
                       value="high-protein"
                       checked={this.state.selectedOption === 'high-protein'}
                       onChange={this._handleOptionChange} /> High-Protein
                <span className="checkmark"></span>
              </label>

              <label className="rb-container">
                <input type="radio"
                       value="low-fat"
                       checked={this.state.selectedOption === 'low-fat'}
                       onChange={this._handleOptionChange} /> Low-Fat
                <span className="checkmark"></span>
              </label>

              <label className="rb-container">
                <input type="radio"
                       value="low-carb"
                       checked={this.state.selectedOption === 'low-carb'}
                       onChange={this._handleOptionChange} /> Low-Carb
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="checkbox">
              <h3>Health Label Filters</h3>
              {this.createCheckboxes()}
            </div>
          </div>

          <input type="submit" value="Search" />
        </form>
      </main>
    </div>
    )
  }
}

export default withRouter(Search);
