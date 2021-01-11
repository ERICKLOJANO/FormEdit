import React, {Component} from 'react'
import './FormEdit.css'

class FormEdit extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      lastName: '',
    };
    this.originalState = this.state;
}

  editFirstName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  editLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  }

  state = {
    showing: true
  };

  render(){
    const { showing } = this.state;
    return(
      <div>
        <h1 style={{ display: (showing ? 'none' : 'block') }}>First Name: {this.state.name}</h1>
        <h1 style={{ display: (showing ? 'none' : 'block') }}>Last Name: {this.state.lastName}</h1>
        <input style={{ display: (showing ? 'block' : 'none') }} type = 'text' onChange = {this.editFirstName}/>
        <input style={{ display: (showing ? 'block' : 'none') }} type = 'text' onChange = {this.editLastName}/>

        <button class = "button" style={{ display: (showing ? 'block' : 'none') }} onClick = {() => this.setState({showing: !showing})}>Save</button>
        <button  class = "button" style={{ display: (showing ? 'block' : 'none') }} onClick= {() => this.setState({...this.originalState, showing: !showing }) }>Cancel</button>
        <button  class = "button" style={{ display: (showing ? 'none' : 'block') }} onClick= {() => this.setState({ showing: !showing }) }>Edit</button>
      </div>
    )
  }
}

export default FormEdit;
