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
  <label>
    <input type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange} />
    <img src={getIcon(label)} className="icons" /> {label}
  </label>
);

export default Checkbox;
