import React from 'react';
import { Switch, Route, Miss} from 'react-router-dom'
import Home from './componets/HomePage.jsx'
import Sadas from './componets/Sadas.jsx'
const Main = () => (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/sadas/1' component={Sadas}/>
    </Switch>

)

export default Main;
