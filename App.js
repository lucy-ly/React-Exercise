import React from 'react';

class App extends React.Component {
  state={
    name: "",
    email: "",
    phone: ""
  }
  
  setName = event => {  //disbinding 
    console.log(event.target.value)
  }
  
  setEmail = event => {
    console.log(event.target.value)
  }
  
  setPhone = event => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
      <h2>Social profile app</h2>
      <input onChange ={ this.setName } style={{"display":"block"}} placeholder="Name" />
      <input onChange ={ this.setEmail } style={{"display":"block"}} placeholder="Email" />
      <input onChange ={ this.setPhone } style={{"display":"block"}} placeholder="Phone" />
      <button>Submit</button>

    </div>
    );
  }

}

export default App;
