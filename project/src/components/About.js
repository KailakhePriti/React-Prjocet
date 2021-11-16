import React, {useState} from 'react'
import '../css/About.css'
import about from '../images/about.jpg'
export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText,setButtonText]=useState("Enable  Mode")
    
    // const modes= ()=>{
    //     if(myStyle.color=='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setButtonText('Enable Dark Mode')
    //     }
    //     else{
            
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setButtonText('Enable Light Mode')
    //     }
    let myStyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#212F3D ':'white'
    }
    
    
    return (
    <div className="about-block" style={myStyle}>
      



       
<h2>About Us</h2>
        <div className="about-content"  style={myStyle}>
            
            <div  style={{width: '50px'}}>
                <img src={about} alt="image" className="image"/>
            </div>
            <div className="about_text" style={{marginBottom: '30px'}} >
                <p style={{color: props.mode==='dark'?'white':'grey'}} className="para">
                As a college student, much of your time will be spent interacting with texts of all types, shapes, sizes, and delivery methods. Sound interesting? Oh, it is. In the following sections, we’ll explore the nature of texts, what they will mean to you, and how to explore and use them effectively.
                <br/><br/>
                In academic terms, a text is anything that conveys a set of meanings to the person who examines it. You might have thought that texts were limited to written materials, such as books, magazines, newspapers, and ‘zines . Those items are indeed texts—but so are movies, paintings, television shows, songs, political cartoons, online materials, advertisements, maps, works of art, and even rooms full of people. If we can look at something, explore it, find layers of meaning in it, and draw information and conclusions from it, we’re looking at a text.
                </p>
            </div>
           
                   
        </div>

            <div className="accordion" style={{myStyle,width: '400px',marginTop: '-250px'}} >
                <div className="accordion-item" >
                    
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{color: props.mode==='dark'?'blue':'black',backgroundColor: props.mode==='dark'?'black':'white',fontWeight: '1000'}} >
                        Analyse your test
                    </button>
                   
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body"  style={{color: props.mode==='dark'?'white':'grey',backgroundColor: props.mode==='dark'?'black':'white'}} >
                        <p className="para-box">This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{color: props.mode==='dark'?'blue':'black',backgroundColor: props.mode==='dark'?'black':'white',fontWeight: '1000'}} >
                       Free to use
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" >
                    <div className="accordion-body" style={{color: props.mode==='dark'?'white':'grey',backgroundColor: props.mode==='dark'?'black':'white'}}>
                        <p className="para-box">This is the second item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. </p> 
                    </div>
                    </div>
                </div>


                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" >
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{color: props.mode==='dark'?'blue':'black',backgroundColor: props.mode==='dark'?'black':'white',fontWeight: '1000',marginBottom: '30px'}} >
                       Browse Compatible
                    </button>
                    </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" >
                        <div className="accordion-body" style={{color: props.mode==='dark'?'white':'grey',backgroundColor: props.mode==='dark'?'black':'white'}} >
                            <p className="para-box">These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    
    )
}
