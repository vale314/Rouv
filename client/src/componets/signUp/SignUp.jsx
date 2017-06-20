import React from 'react';
import { Header, Segment,Button, Checkbox } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as semantic from "semantic-ui-react";



const CardExampleExpandable = ({msj, name, onChange}) => (
  <div>
  {console.log(semantic)}
    <Segment clearing>
        <Header as='h2' textAlign='center' onClick={msj}  >
            ROUV
        </Header>
      </Segment>
      <div className='Field'>
        <semantic.Button color='facebook'>
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
                  value={name}
                />
      </div>
      <div className='Field'>
        <TextField
                  floatingLabelText="Email"
                  name="email"
                  hintText="Email"
                  id='Field'
                  onChange={onChange}
                  value={name}
                />
      </div>

      <div className='Field'>
      <TextField
                floatingLabelText="Password"
                name="password"
                id='Field'
                type='password'
                onChange={onChange}
                value={name}
              />
      </div>

    </form>

    <div className='Button'>
      <RaisedButton type="submit" label="Sign up" buttonStyle={{borderRadius: '15px'}} className="buttonHome" primary />
    </div>
  </div>
);

export default CardExampleExpandable;
