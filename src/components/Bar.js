import React, { Component } from 'react';
import '../styles/Bar.css';
class Bar extends Component {

    constructor(props) {
        super(props);
    }
    
    //header is available for the React component
  render() {
    return (
        <header className="header">
            {this.props.children}
        </header>
    );
  }
}

export default Bar;
