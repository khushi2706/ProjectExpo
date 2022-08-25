import React from "react";
import bvm_logo from '../../Assets/Images/BVM_logo.png'
export default function University(props) {
    return (
        <>
            <div style={{width: '17vw', 
                        
                        textAlign: 'center', 
                        boxShadow: "0px 0px 8px 1px #B5B5B5",
                        marginLeft: 20,
                        marginTop: 30,
                        padding: 15,
                        borderRadius: 15,
                        fontFamily: 'poppins',
                        flexWrap: 'wrap'}}>
                <img src={bvm_logo} width="50vw" height="50vh"/>
                <div style={{textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginTop: 10}}>
                    {props.title}
                </div>

                <div style={{textAlign: 'left', 
                marginTop: 10,
                height: '44%',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                fontFamily: 'poppins',
                fontSize: 14}}>
                Gujarat first Engineering college initiative by sardar vallabhbhai patel at vallabh vidhyanagar. this year bvm has completed 75 years.We offer multiple enginerring courses every year...
    </div>

                <div className="card-body">
               
                
              
             
                
    
              <div
              style={{
                fontWeight: "bold",
                textAlign: "left",
                marginTop: 15,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: 15,
              }}
            >
              <div> Located:</div>
    
              <div
                style={{
                  textAlign: "left",
                  marginLeft: 7,
    
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  fontFamily: "poppins",
                  fontSize: 15,
                }}
              >
              {props.district}
              </div>
    
               </div>
              
               <div style={{display: 'flex',
               flexDirection: 'row'}}>
       <div style={{fontWeight: 'bold',
               textAlign: 'left',
               marginTop: 15}}>
           TYPE:
       </div>

       <div style={{background: '#D5E3FE',
                   borderRadius: 20,
                   color: '#2C5EFF',
                   fontWeight: 550,
                   marginTop: 15,
                   width: 'fit-content',
                   paddingLeft: 10,
                   paddingRight: 10,
                   marginLeft: 10,
                paddingBottom:8,
            paddingTop:8}}>
           {props.universityType}
       </div>
   </div>
                <div className='btn'>
               
                
                <button className="button  btn-ed button-primary" style={{width:"100%"}}>
                  Visit Website
                </button></div>
                
              </div>
      

                

               

            </div>
        </>
    )
}