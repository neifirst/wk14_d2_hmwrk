import React from 'react';
import Tune from './Tune';

const TunesList = (props) => {
  let tunesLis = props.tunes.map((tune, index) => {
    return (
      <li key={index}>
        <Tune tune={tune} />
      </li>
    );
  });
  return (
    <React.Fragment>
      <ul>
        {tunesLis}
      </ul>
    </React.Fragment>
  );
}

export default TunesList;
