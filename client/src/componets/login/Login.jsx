import React from 'react';
import { Header, Segment,Button, Checkbox, Modal, Image, Icon} from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




const CardExampleExpandable = ({home, user, onChange}) => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center' onClick={home}  >
            ROUV
        </Header>
      </Segment>
      <div className='Field' style={{marginTop:'15px'}}>
        <Button color='facebook' >
          <Icon name='facebook' /> Login with Facebook
        </Button>
      </div>
      <form action="/" >

      <div className='Field' >
        <TextField
                  floatingLabelText="Email"
                  name="email"
                  hintText="Email"
                  id='Field'
                  onChange={onChange}
                  value={user.email}


                />
      </div>

      <div className='Field' >
      <TextField
                floatingLabelText="Password"
                name="password"
                id='Field'
                type='password'
                onChange={onChange}
                value={user.password}

              />
      </div>

    </form>

    <div className='Button' >
      <RaisedButton type="submit" label="Login" buttonStyle={{borderRadius: '15px'}} className="buttonHome" primary />
    </div>
  </div>
);

export default CardExampleExpandable;
