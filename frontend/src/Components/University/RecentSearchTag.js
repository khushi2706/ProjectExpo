import React from "react";

export default function RecentSearchTag(props) {
    return (
        <>
            <div style={{border: '#3b3b3b', 
                            borderStyle: 'none',
                            borderWidth: 2,
                            width: 'fit-content',
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                            paddingBottom: 5,
                            borderRadius: 12, 
                            marginLeft: 10,
                            backgroundColor: '#f1f2f3'}}>
                    <div style={{textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 550,
                                fontFamily: 'poppins'}}>
                        {props.title}
                    </div>
                </div>
        </>
    )
}