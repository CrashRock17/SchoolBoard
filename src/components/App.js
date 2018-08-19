import React, { Component } from 'react';
import './styles/App.css';
import Bar from './Bar';
import Text from './Text';
import ComboBox from './ComboBox';
import Arrow from '@material-ui/icons/KeyboardArrowDown';

class App extends Component {

  handleComboBox = (evt) =>{
    evt.preventDefault();
    console.log("hola");
  }

  render() {
    return (
      <div className="App">
        <Bar>
          
          <Text value={"Barra prueba"} size={'30px'}/>
          <ComboBox size={"20px"} color={"#000"} handleComboBox={(evt)=>{this.handleComboBox(evt)}}>
            <Text value={"comboBoxText"}/>
            <Arrow />
          </ComboBox> 
        </Bar>
      </div>
    );
  }
}

export default App;
