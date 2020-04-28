import React, {useState} from 'react';

export default () => {
  const [ingredients, setIngredients] = useState('');

  const _handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
  <div>
    <form onSubmit={_handleSubmit}>
      <label>
        Ingredients:
        <input type="search"
                value={ingredients}
                onChange={event => setIngredients(event.target.value)}/>
      </label>
      <label>
        <input type="checkbox" /> Balanced
      </label>

      <input type="submit" value="Search" />
    </form>
  </div>
  )
}
