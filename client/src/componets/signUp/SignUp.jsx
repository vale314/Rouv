import React from 'react';
import { Header, Segment,Button, Checkbox } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as semantic from "semantic-ui-react";

import Recaptcha  from 'react-recaptcha';


const CardExampleExpandable = ({home, user, onChange}) => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center' onClick={home}  >
            ROUV
        </Header>
      </Segment>
      <div className='Field' style={{marginTop:'15px'}}>
        <semantic.Button color='facebook' >
          <semantic.Icon name='facebook' /> Login with Facebook
        </semantic.Button>
      </div>
      <form action="/" >
      <div className='Field'>
        <TextField
                  floatingLabelText="Nombre"
                  name="name"
                  hintText="Name"
                  id='Field'
                  onChange={onChange}
                  value={user.name}
                />
      </div>
      <div className='Field'>
        <TextField
                  floatingLabelText="Email"
                  name="email"
                  hintText="Email"
                  id='Field'
                  onChange={onChange}
                  value={user.email}
                />
      </div>

      <div className='Field'>
      <TextField
                floatingLabelText="Password"
                name="password"
                id='Field'
                type='password'
                onChange={onChange}
                value={user.password}

              />
      </div>
      {/*}<div className='Field'>
      <Recaptcha
          sitekey="6Lf6lCYUAAAAAHCXGNBJk3vv62a2dlTTmfIJtd7C"
          render="explicit"
          />
      </div>
    */}
    </form>

    <div className='Button' >
      <RaisedButton type="submit" label="Sign up" buttonStyle={{borderRadius: '15px'}} className="buttonHome" primary />
    </div>
  </div>
);

export default CardExampleExpandable;
