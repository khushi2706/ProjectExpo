import React from "react";
import bvm_logo from '../../Assets/Images/BVM_logo.png'
export default function University(props) {
    return (
        <>
            <div style={{width: '15%', 
                        height: '350px',
                        textAlign: 'center', 
                        boxShadow: "0px 0px 8px 1px #B5B5B5",
                        marginLeft: 20,
                        marginTop: 30,
                        padding: 15,
                        borderRadius: 15,
                        fontFamily: 'poppins'}}>
                <img src={bvm_logo} width="50vw" height="50vh"/>
                <div style={{textAlign: 'center',
                            fontSize: 18,
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
                    {props.information}
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
                                fontWeight: 600,
                                marginTop: 15,
                                width: 'fit-content',
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10}}>
                        {props.universityType}
                    </div>
                </div>

            </div>
        </>
    )
}