import React from 'react';
import SignUpCompo from '../../componets/signUp/SignUp.jsx'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'valentin'
    }
    this.msj = this.msj.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  msj(){
    this.props.history.push('/')
  }

  onChange(e){
    this.setState({
      name:e.target.value
    })
    console.log(this.state.name)
  }

  render() {
    return (<SignUpCompo
              msj={this.msj}
              name={this.state.name}
              onChange={this.onChange}
             />);
  }

}

export default SignUp;
