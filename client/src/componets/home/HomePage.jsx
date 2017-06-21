import React from 'react'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Image, Modal,Icon } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ModalPageLogin from './componets/Modal.jsx'
const HomePage = ({
  SignUp,
}) => (

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
);


export default HomePage;
