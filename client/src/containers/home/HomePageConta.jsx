import React from 'react';
import HomePageCompo from '../../componets/home/HomePage.jsx'

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.msj = this.msj.bind(this);
  }

  msj(){
    this.props.history.push('/signup')
  }

  render() {
    return (<HomePageCompo
              msj={this.msj}
             />);
  }

}

export default HomePage;
