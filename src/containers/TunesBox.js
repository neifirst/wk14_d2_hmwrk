import React from 'react';
import Heading from '../components/Heading'
import TunesList from '../components/TunesList'


class TunesBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tunes: []
    };
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(response => response.json())
      .then(json => this.setState({tunes: json.feed.entry}));
  }



  render(){
    return (
      <React.Fragment>
        <Heading />
        <TunesList tunes={this.state.tunes} />
      </React.Fragment>
    );
  }
}



export default TunesBox;
