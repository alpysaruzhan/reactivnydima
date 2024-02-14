import React, { useState, useEffect } from 'react';

export const OptionTypes = {
  RANGE: 'range',
  SWITCH: 'switch',
  SELECTOR: 'selector'
}

function getUniqueGroups(arr) {
  let uniqueGroups = [];
  arr.forEach((option) => {
    if (!uniqueGroups.includes(option.group)) {
      uniqueGroups.push(option.group);
    }
  });
  return uniqueGroups;
}

function filterOptionsByType(options, type) {
  let result = [];

  options.forEach((option) => {
    if (option.type === type.toUpperCase()) {
      result.push(option);
    }
  });
  return result;
}

export const RangeCharactersitics = (props) => {
  const { options } = props;
  let rangeOptions = filterOptionsByType(options, OptionTypes.RANGE);

  return (
    <div className='n-div'>
      {rangeOptions.map((option) => (
        <div key={option.label}>
          <div>
            <label className="label-charac">{option.label} 2132</label>
          </div>
          <input className='input-ran' type="number" />
        </div>
      ))}
    </div>
  );
}

export const SwitchCharactersitics = (props) => {
  const { options } = props;
  let switchOptions = filterOptionsByType(options, OptionTypes.SWITCH);

  const [switchStates, setSwitchStates] = useState({});

  const handleSwitchChange = (label) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [label]: !prevState[label]
    }));
  };

  return (
    <div>
      {switchOptions.map((option) => (
        <div className='v-siv' key={option.label}>
          <label className='label-charac'>{option.label} 123</label>
          <div className={`switch ${switchStates[option.label] ? 'on' : 'off'}`} onClick={() => handleSwitchChange(option.label)}>
            <div className="slider"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const SelectorCharactersitics = ({ options, onLabelClick }) => {
  const uniqueGroups = getUniqueGroups(options);
  const [activeLabel, setActiveLabel] = useState(null);

  const handleLabelClick = (label) => {
    setActiveLabel(label.label);
    onLabelClick && onLabelClick(label);
  };

  return (
    <div>
      {uniqueGroups.map((group) => {
        const selectorOptions = filterOptionsByType(options, OptionTypes.SELECTOR).filter(option => option.group === group);

        return (
          <div key={group}>
            <h3 className="label-charac">{group} 42424</h3>
            <div className="div-label">
              {selectorOptions.map((option) => (
                <div
                  className={`glab ${activeLabel === option.label ? 'active' : ''}`}
                  key={option.label}
                  onClick={() => handleLabelClick(option)}
                >
                  <div className="label-sel">
                    <label>{option.label}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};