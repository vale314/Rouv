import React from 'react';
import LoginCompo from '../../componets/login/Login.jsx'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:{
          email:'',
          password:''
        }
    }
    this.home = this.home.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  home(){
    this.props.history.push('/')
  }

  onChange(e){
    const user = this.state.user;
    const name = e.target.name;
    user[name] = e.target.value;

    this.setState({
      user
    })

  }

  render() {
    return (<LoginCompo
              home={this.home}
              user={this.state.user}
              onChange={this.onChange}
             />);
  }

}

export default Login;
