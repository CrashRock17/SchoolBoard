import React, { Component } from 'react';
//import '../styles/ComboBox.css';

class ComboBox extends Component {

    constructor(props) {
        super(props);
    }
    
    //header is available for the React component
  render() {
    return (
        <div>
            <a onClick={(evt)=>{this.props.handleComboBox(evt)}}>{this.props.children}</a>
        </div>
    );
  }
}

export default ComboBox;
