import Button from '@mui/material/Button';
import React,{useState} from 'react';
export default function Modals() {
    const [modalsIsOpen, setModalsIsOpen] = useState(false)
    return (
        <div>
             <Button onClick={() => setModalsIsOpen(true)} variant="contained"  style={{backgroundColor: 'crimson',marginTop: '50px',padding: '6px',marginLeft: '10px'}}>Open Modal box</Button>
                   
                   <Modal isOpen={modalsIsOpen}>
                        <ModalHeader style={{color: 'darkblue'}}>Far far away</ModalHeader>
                           
                       <ModalBody style={{textAlign: 'justify'}}>
                       Help us keep running
                       If you don't mind-tech related ads (no tracking or remarketing), and want to keep us running, please whitelist MUI in your blocker.
                       Thank you! ❤️
                      </ModalBody>
                      
                     
                       <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" row={15}/>
                       
                       <ModalFooter>
                          
                           <Button style={{backgroundColor: 'crimson'}} className="btn" variant="contained">Do something</Button>&nbsp;
                           <Button  style={{backgroundColor: 'darkblue'}} className="btn" variant="contained">Cancel</Button>
       
                       </ModalFooter> 
                    
                   </Modal>
        </div>
    )
}
