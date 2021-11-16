import React,{useState} from 'react'
import {Form, FormGroup, Label, Input,Modal,ModalBody,ModalHeader} from 'reactstrap';
import Button from '@mui/material/Button';
//import Icon from '@mui/material/Icon';
import CloseIcon from '@mui/icons-material/Close';
import girl from '../images/girl.png'
export default function Register() {
    const [registerIsOpen, setRegisterIsOpen] = useState(false)
    return (
        <div>
            <div className="main_block" style={{display: 'flex',padding: '20px'}}>
                    <div className="girl_img">
                        <img src={girl} alt=""/>
                    </div>
                    <div style={{backgroundColor: 'black',width: '40%',height: '325px'}}>
                    
                        <ModalHeader style={{color: 'crimson'}}>Build and Grow a High-Performing Website</ModalHeader>
                            
                        <ModalBody style={{textAlign: 'justify',color: 'white'}}>
                        Help us keep running
                        If you don't mind-tech related ads (no tracking or re-marketing), and want to keep us running, please whitelist MUI in your blocker.
                        
                        Join thousands of professionals learning the tools and skills they need to improve their websites. Subscribe to the Website Blog to get expert insights straight to your inbox.
                        Thank you! ❤️
                        </ModalBody> 
                    </div>
         
            </div>
           
            <Button variant="contained" style={{backgroundColor: '#47A4A8',marginLeft: '2%',marginTop: '2%'}} onClick={()=>setRegisterIsOpen(true)}>Register Now</Button>
            <Modal isOpen={registerIsOpen} style={{marginTop: '11%',marginLeft: '62%',width: '300px'}}>
                <ModalBody>
                   <h3 style={{textAlign: 'left',height: '50px'}}> Get started with free account</h3>
                </ModalBody>
                <Form style={{backgroundColor: 'grey',height: '400px',padding: '20px',}}>
                    <FormGroup>
                        <ul class="nav">
                            <li>
                                <Label for="exampleEmail" style={{marginRight: '160px',paddingBottom: '10px'}}>Username</Label>
                            </li>
                            
                            <li>
                            <CloseIcon style={{color: 'white',backgroundColor: 'black'}} onClick={()=>setRegisterIsOpen(false)}/> 
                            </li>
                        </ul>
                        <Input type="email" name="username" id="exampleEmail" placeholder="Enter Username"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword" style={{paddingBottom: '10px'}}>Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePhone" style={{paddingBottom: '10px'}}>Phone</Label>
                        <Input type="phone" name="phone" id="examplePhone" placeholder="Enter email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword" style={{paddingBottom: '10px'}}>Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
                    </FormGroup>
                    <br/>
                    <Button variant="contained" style={{backgroundColor: 'black'}}>Submit</Button>
                </Form>
        </Modal>
    </div>
      
    )
}