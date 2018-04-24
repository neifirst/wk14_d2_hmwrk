import React from 'react';

const Tune = (props) => {
  return (
    <React.Fragment>
      <p>{props.tune['im:name'].label}</p>
      <p>{props.tune['im:artist'].label}</p>
    </React.Fragment>
  );
}

export default Tune;
