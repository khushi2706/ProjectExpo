import React from 'react'
import "./s.css"
function PCard(props) {
   
    // const { image } = props.img;
    // var style = { 
    //     backgroundImage: 'url(' + image + ')',
    // };

  return (
    <div className="card">
    <img src={props.img} className="card-header"/>
        
            <div className="card-body">
            <p className="date">{props.date}</p>
            
          
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
            <div> Name :</div>
  
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
            {props.title}
            </div>
            </div>
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
          <div> Email :</div>

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
          {props.email.substring(0,18)}..
          </div>
          </div>

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
          <div> Post :</div>

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
          {props.ccode}
          </div>

           </div>
            <div className='btn'>
            <button className="button text-success btn-ed button-primary">
              Edit 
            </button>
            
            <button className="button text-danger btn-ed button-primary">
              Delete 
            </button></div>
            
          </div>
  
    </div>
  )
}

export default PCard