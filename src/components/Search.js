import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      ingredients: ''
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  _handleInput(e){
    this.setState({ingredients:e.target.value});
  }

  _handleSubmit(e){
    e.preventDefault();
    this.setState({redirect: true})
  }

  render() {
    if (this.state.redirect){
      return <Redirect to={{
        pathname:'/results',
        state: {query: this.state.ingredients}
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
          <input type="checkbox" /> Balanced
        </label>

        <input type="submit" value="Search" />
      </form>
    </div>
    )
  }
}

export default withRouter(Search);
