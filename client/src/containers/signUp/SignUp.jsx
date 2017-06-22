import React from 'react';
import SignUpCompo from '../../componets/signUp/SignUp.jsx'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:{
          name:'',
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

  componentWillMount(){
    document.body.className=''
  }


  render() {
    return (<SignUpCompo
              home={this.home}
              user={this.state.user}
              onChange={this.onChange}
             />);
  }

}

export default SignUp;
