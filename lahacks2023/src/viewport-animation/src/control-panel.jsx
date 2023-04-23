import * as React from 'react';

import CITIES from './cities.json';

function ControlPanel(props) {
  return (
    <div className="control-panel">
      <h3>Camera Transition</h3>
      <p>Smooth animate of the viewport.</p>
      <hr />

      {CITIES.filter(city => city.state === 'California').map((city, index) => (
        <div key={`btn-${index}`} className="input">
          <input
            type="radio"
            name="city"
            id={`city-${index}`}
            defaultChecked={city.city === 'San Francisco'}
            onClick={() => props.onSelectCity(city)}
          />
          <label htmlFor={`city-${index}`}>{city.city}</label>
        </div>
      ))}
    </div>
  );
}

export default React.memo(ControlPanel);
