import React from 'react';
// get images from img folder
import vegan from './img/vegan.svg';
import vegetarian from './img/vegetarian.svg';
import sugar from './img/sugar-conscious.svg';
import peanut from './img/peanut-free.svg';
import treeNut from './img/tree-nut-free.svg';
import alcohol from './img/alcohol-free.svg';

//get corresponding icons per health label
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

// get tooltip text per health label
const getTooltip = (label) => {
  let tooltip;
  if (label === 'vegan'){
    tooltip = "No meat, poultry, fish, dairy, eggs or honey";
  } else if( label === 'vegetarian') {
    tooltip = "No meat, poultry, or fish";
  } else if( label === 'sugar-conscious') {
    tooltip = "Less than 4g of sugar per serving"
  } else if( label === 'peanut-free') {
    tooltip = "No peanuts or products containing peanuts";
  } else if( label === 'tree-nut-free') {
    tooltip = "No tree nuts or products containing tree nuts";
  } else if( label === 'alcohol-free') {
    tooltip = "No alcohol used or contained";
  }
  return tooltip;
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
      <span className="tooltiptext">{getTooltip(label)}</span>
    </div> {label}
  </label>
);

export default Checkbox;
