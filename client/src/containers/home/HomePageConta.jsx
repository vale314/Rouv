import React from 'react';
import HomePageCompo from '../../componets/home/HomePage.jsx'
import HomePageCompoMobile from '../../componets/home/HomePageMobile.jsx'
import { connect } from "react-redux"
import {Save} from './actions'

import store from '../../redux/store'

@connect((store) => {
  return {
    msj: store.msj.user.msj
  };
})

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      mobile:false,
      ask:'',
      errorLength:''
    }
    this.SignUp = this.SignUp.bind(this);
    this.Login = this.Login.bind(this);
    this.Write = this.Write.bind(this);
  }

  SignUp(){
    this.props.history.push('/signup')
  }

  Login(){
    this.props.history.push('/login')
  }


  Write(e){
    const ask = e.target.value;
    const length = ask.length;

    if(length>50){
      this.setState({
        errorLength : 'Please More shorter'
      })
      return
    }else {
      this.setState({
        errorLength:''
      })

    }



    this.props.dispatch(Save(ask))
    this.setState({
      ask:store.getState().msj.msj.msj
    })

  }


  componentDidMount(){
    if(store.getState().msj.msj != null){

      this.setState({
        ask:store.getState().msj.msj.msj
      })
    }


  }

  componentWillMount(){
    document.body.className='background'
    if(window.innerWidth <= 600){
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
          return (<HomePageCompo
                    SignUp={this.SignUp}
                    Ask ={this.state.ask}
                    Write={this.Write}
                    errorLength={this.state.errorLength}
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
