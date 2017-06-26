import React from 'react'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Image, Modal,Icon } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ModalPageLogin from './componets/Modal.jsx'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';



const HomePage = ({
  SignUp,
  Ask,
  Write,
  errorLength,
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
                floatingLabelText="Your Question Is?"
                name="Ask"
                id='Field'
                floatingLabelStyle={{fontFamily:'Arial',paddingLeft:'45%',color:'black'}}
                style={{fontFamily:'Arial',width:'95%'}}
                errorText={errorLength}
                value={Ask}
                onChange={Write}
              />

    </div>
    <div className='Button' >
      <RaisedButton type="submit" label="Login" buttonStyle={{borderRadius: '15px'}} primary />
    </div>
  </div>
);


export default HomePage;
