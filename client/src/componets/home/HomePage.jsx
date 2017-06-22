import React from 'react'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Image, Modal,Icon } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ModalPageLogin from './componets/Modal.jsx'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const HomePage = ({
  SignUp,
}) => (
  <div>
    <Menu>
      <Header
        id="header"
        as='h2'
        content='ROUV'
        floated='right'
      />

      <Menu.Item position='right'>
          <ModalPageLogin/>
      </Menu.Item>

      <Menu.Item onClick={SignUp}>
        <Button >SignUp</Button>
      </Menu.Item>

    </Menu>

    <div className='FieldHome'>
      <TextField
                floatingLabelText="Email"
                name="email"
                hintText="Email"
                id='Field'
                multiLine={true}
                style={{width:'35%'}}
                inputStyle={{color:'red',backgroundColor:'white '}}
              />
    </div>

  </div>
);


export default HomePage;
