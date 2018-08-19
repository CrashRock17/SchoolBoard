import React, { Component } from 'react';
import '../styles/Text.css';

class Text extends Component {

    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div className="text-style">
                <label style={{fontSize : this.props.size, color : this.props.color}}>{this.props.value}</label>
            </div>
        );
    }
}

export default Text;
