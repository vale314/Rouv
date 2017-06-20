import React from 'react'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Image, Modal } from 'semantic-ui-react'

const HomePage = ({
  msj
}) => (
  <Menu>
    <Header
      id="header"
      as='h2'
      content='ROUV'
      floated='right'
    />

    <Menu.Item position='right'>
      <Button primary>Sign-up</Button>
    </Menu.Item>

    <Menu.Item onClick={msj}>
      <Button >Log-in</Button>
    </Menu.Item>


  </Menu>
);


export default HomePage;
