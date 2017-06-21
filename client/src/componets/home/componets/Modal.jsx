import React from 'react'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Modal,Icon } from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const HomePage = () => {

  return(
      <Modal trigger={<Button primary>Login</Button>}>
          <Modal.Header style={{textAlign: 'center'}}>Login</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            <div className='Field' style={{marginTop:'0px'}}>
              <Button color='facebook' >
                <Icon name='facebook' /> Login with Facebook
              </Button>
            </div>
            <form action="/" >

            <div className='Field'>
              <TextField
                        floatingLabelText="Email"
                        name="email"
                        hintText="Email"
                        id='Field'

                      />
            </div>

            <div className='Field'>
            <TextField
                      floatingLabelText="Password"
                      name="password"
                      id='Field'
                      type='password'

                    />
            </div>

          </form>
          <div className='Button' >



            <RaisedButton type="submit" label="Login" buttonStyle={{borderRadius: '15px'}} className="buttonHome" primary />
          </div>
            </Modal.Description>
          </Modal.Content>
      </Modal>


);

}

export default HomePage;
