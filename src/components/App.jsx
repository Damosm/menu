import React from "react";
import Menu from './Menu';
import img from '../images/1.jpg';

export default class App extends React.Component { 

  render () {    
    return (
      <div className="ui container" style={{ backgroundImage: `url(${img})`}}>
        <Menu title='Menu de la semaine'></Menu>
      </div>
    );
  }
}