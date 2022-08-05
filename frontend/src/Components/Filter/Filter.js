import React from 'react'
import Filterlist from '../../Assets/Images/Filter list.svg' ;
import './Filter.css' ; 
import TagImage from '../../Assets/Images/Tags.svg'; 
import CodeImage from '../../Assets/Images/Code.svg'; 
import calender from '../../Assets/Images/Calendar.svg'; 
import university from '../../Assets/Images/University.svg'; 


export default function Filter() {
    return (
        <div className="AppliedFilter">
            <div className="applied">

            </div>
            <div className="filter">

                <div className="title">
                    <img src={Filterlist} alt="" className="titleImage" />
                    <div className="title_information">Short filters</div>
                </div>

                <div className="AlltagListOption">
                    
                    <div className="tagListOption">
                        <img src={TagImage} alt="" className="tagImage" />
                        <div className="tagName">Tag</div>
                        <input type="text" className="inputfilter" />
                    </div>

                    <div className="tagListOption">
                        <img src={university} alt="" className="tagImage" />
                        <div className="tagName">University</div>
                        <input type="text" className="inputfilter" />
                    </div>

                    <div className="tagListOption">
                        <img src={calender} className="tagImage" />
                        <div className="tagName">Time Frame</div>
                        <input type="text" className="inputfilter" />
                    </div>

                    <div className="tagListOption">
                        <img src={CodeImage} className="tagImage" />
                        <div className="tagName">Language</div>
                        <input type="text" className="inputfilter"/>
                    </div>

                </div>

                
            </div>
        </div>
    )
}
