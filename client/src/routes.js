import React from 'react';
import { Switch, Route, Miss} from 'react-router-dom'
import Home from './containers/home/HomePageConta.jsx'
import SignUp from './containers/signUp/SignUp.jsx'
import Login from './containers/login/Login.jsx'

const Main = () => (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/login' component={Login}/>
    </Switch>

)

export default Main;
