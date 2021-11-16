import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '@mui/material/Icon';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'
import {Nav} from 'reactstrap'
export default function Navbar(props){
  const [myStyle, setMyStyle] = useState(
    {
     color: 'black',
     backgroundColor: 'white'
    
     }
    )
    
  const [dropdown, setDropdown] = useState('light');
  // const toggleModeDropdown=()=>{
  //   if (props.mode=='light'){
  //     setDropdown({
  //             color: 'red',
  //             backgroundColor: 'black'
      
  //     }

  //     )
      
  //   }
  //   else{
  //     setDropdown({
  //       color: 'yellow',
  //       backgroundColor: 'purple'
  //     })
  //   }
  // onClick={toggleModeDropdown}
  // }
  //     const [blue, setBlue] = useState(
  //   {
  //     color: 'white',
  //     backgroundColor: 'blue'
  //   }
  //     )
  // const [red, setRed] = useState(
  //   {
  //     color: 'white',
  //     backgroundColor: 'red'
  //   }
  // )
  // //green
  //   const [green, setGreen] = useState(
  //       {
  //         color: 'white',
  //         backgroundColor: 'green'
  //       }
  //         )
    return (
        <div>
            <Nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
              <Link className="navbar-brand" to="/">
              <Grid item xs={8}>
                <FilterVintageIcon style={{width: '100px',height: '40px',color: 'red'}}/>Dreamy
              </Grid>
                
               
              </Link>
              <button className="navbar-toggler" type="button"                  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                          </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="text">Text</Link>
                          </li>

                          <li className="nav-item">
                            <Link className="nav-link" to="register">Register</Link>
                          </li>
                          <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                              Dropdown
                            </Link>
                            <ul className="dropdown-menu"  >
                              <li ><a  style={myStyle} href="#" className={`dropdown-item text-${props.mode==='light'?'green':'pink'}`}></a ></li>

                              <li><a  style={myStyle}  className={`dropdown-item text-${props.mode==='light'?'green':'pink'}`} href="#">Another action</a></li>
                              
                              <li><a style={myStyle} className={`dropdown-item text-${props.mode==='light'?'green':'pink'}`} href="#">Something else here</a></li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                          </li>
                        </ul>
                      </div>
        </div>
  <div className="form-check form-switch">
      {/* <div className="mode_colors">
        <button className="blue_btn" style={blue} onClick={props.toggleBlueMode} >Enable Blue Mode</button>
        <button className="red_btn" style={red} onClick={props.toggleRedMode} >Enable red mode</button>
        <button className="green_btn" style={green} onClick={props.toggleGreenMode}>
        Enable green mode</button>
      </div> */}

      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className={`form-check-label htmlFor="flexSwitchCheckDefault text-${props.mode==='light'?'dark':'light'}`}>Enable Dark Mode
      </label>
  </div>
</Nav>
            
</div>)
}
