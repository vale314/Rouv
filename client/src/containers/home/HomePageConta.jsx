import React from 'react';
import HomePageCompo from '../../componets/home/HomePage.jsx'
import HomePageCompoMobile from '../../componets/home/HomePageMobile.jsx'
class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      mobile:false
    }
    this.SignUp = this.SignUp.bind(this);
    this.Login = this.Login.bind(this)
  }

  SignUp(){
    this.props.history.push('/signup')
  }

  Login(){
    this.props.history.push('/login')
  }

  componentWillMount(){
    document.body.id='background'
    if(window.innerWidth <= 500){
      this.setState({
        mobile:true
      })
    }else{
      this.setState({
        mobile:false
      })
    }
  }


  render() {
    if(!this.state.mobile){
      console.log('not is mobile')
          return (<HomePageCompo
                    SignUp={this.SignUp}
                   />);
        }
        else if(this.state.mobile){
          return(<HomePageCompoMobile
                    SignUp={this.SignUp}
                    Login={this.Login}
                   />)
        }
  }

}

export default HomePage;
