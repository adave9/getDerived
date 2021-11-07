import React from 'react';
import './App.css';

class App extends React.Component{

    constructor(props)
    {
      super(props);
      this.state={favouritecolor:"red"};
    }

    static getDerivedStateFromProps(props,state)
    {
      return({favouritecolor: props.favcol});
    }

    changeColor = () =>{
      this.setState({favouritecolor:"blue"});
    }

  render(){
    return <div>
                <p>
                    My favourite color is {this.state.favouritecolor}.
                </p>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>;
  }
}

export default App;
