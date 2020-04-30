import React from 'react';
import vegan from './img/vegan.svg';
import vegetarian from './img/vegetarian.svg';
import sugar from './img/sugar-conscious.svg';
import peanut from './img/peanut-free.svg';
import treeNut from './img/tree-nut-free.svg';
import alcohol from './img/alcohol-free.svg';

const getIcon = (label) => {
  let icon;
  if (label === 'vegan'){
    icon = vegan;
  } else if( label === 'vegetarian') {
    icon = vegetarian;
  } else if( label === 'sugar-conscious') {
    icon = sugar
  } else if( label === 'peanut-free') {
    icon = peanut;
  } else if( label === 'tree-nut-free') {
    icon = treeNut;
  } else if( label === 'alcohol-free') {
    icon = alcohol;
  }
  return icon;
}

const Checkbox = ({label, isSelected, onCheckboxChange}) => (
  <label className="cb-container">
    <input type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange} />
    <span className="cb-checkmark"></span>
    <div className="tooltip">
      <img src={getIcon(label)} className="icons" alt={label}/>
      <span className="tooltiptext">"text"</span>
    </div> {label}
  </label>
);

export default Checkbox;
