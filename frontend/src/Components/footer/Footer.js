import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const [ql, setql] = useState({ "max-height": "0px" });
  const [ns, setns] = useState({ "max-height": "0px" });
  const [is, setis] = useState({ "max-height": "0px" });
  const [rs, setrs] = useState({ "max-height": "0px" });
  const [ex, setex] = useState({ "max-height": "0px" });
  const [width, setwid] = useState(window.innerWidth);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout((element) => {}, 0);
    // alert(props.index);
  }, []);

  return (
    <>
      <footer className="footer nav-folderized">
        
        <div className="col-md-12 col-sm-12">
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (ql["max-height"] == "0px") {
                      setql({ "max-height": "100%" });
                    } else {
                      setql({ "max-height": "0px" });
                    }
                  }
                }}
              >
                Quick Login
              </h5>
              <ul style={width <= 987 ? ql : {}}>
                <Link to="/login">
                  <li>
                    <a href="#" className="lear-more-l ">
                      Student Login
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/login">
                  <li>
                    <a href="#" className="lear-more-l ">
                      Faculty Login
                    </a>
                  </li>
                </Link>
                <br/>
                <Link to="/login">
                  <li className="hiring-link blink-menu">
                    <a href="#" className="lear-more-l  blink-active">
                     Admin Login
                    </a>{" "}
                    <span className="hiring">We Are Hiring</span>
                  </li>
                </Link>
                <br/>
                <Link to="/login">
                  <li>
                    <a href="#" className="lear-more-l ">
                      college Login
                    </a>
                  </li>
                </Link>
                <br/>
               
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
            <h5
              onClick={() => {
                if (width <= 987) {
                  if (ns["max-height"] == "0px") {
                    setns({ "max-height": "100%" });
                  } else {
                    setns({ "max-height": "0px" });
                  }
                }
              }}
            >
              Project
            </h5>
            <ul style={width <= 987 ? ns : {}}>
            <Link to="/uploadproject/Stage1">
              <li>
                <a href="#" className="lear-more-l ">
                  Upload Project
                </a>
              </li>
              </Link>
              <br/>
              <Link to="/project">
              <li>
                <a href="#" className="lear-more-l ">
                  Project view
                </a>
              </li>
              </Link>
              <br/>
              <Link to="/linkoftask">
              <li>
                <a href="#" className="lear-more-l ">
                  Create an TaskAssignment
                </a>
              </li>
              </Link>
              <br/>
              <Link to="/aboutplag">
              <li>
                <a href="#" className="lear-more-l ">
                  About Plagarism
                </a>
              </li>
              </Link>
              <br/>
            </ul>
          </div>
   
           
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (rs["max-height"] == "0px") {
                      setrs({ "max-height": "100%" });
                    } else {
                      setrs({ "max-height": "0px" });
                    }
                  }
                }}
              >
                Feature
              </h5>
              <ul style={width <= 987 ? rs : {}}>
              <Link to="/project">
                <li>
                  <a href="#" className="lear-more-l ">
                    Got Recommendation
                  </a>
                </li>
                </Link>
                <br/>
                <Link to="/roadmap">
                <li>
                  <a href="#" className="lear-more-l ">
                    Find Roadmap
                  </a>
                </li>
                </Link>
                <br/>
                <Link to="/mentor">
                <li>
                  <a href="#" className="lear-more-l ">
                   Find Mentor
                  </a>
                </li>
                </Link>
                <br/>
                <Link to="/blog">
                <li>
                  <a href="#" className="lear-more-l ">
                   Find Blog
                  </a>
                </li>
               </Link>
               <br/>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (ex["max-height"] == "0px") {
                      setex({ "max-height": "100%" });
                    } else {
                      setex({ "max-height": "0px" });
                    }
                  }
                }}
              >
                Project Expo
              </h5>
              <ul style={width <= 987 ? ex : {}}>
              <Link to="/aboutus">
                <li>
                  <a href="#" className="lear-more-l ">
                    About Us
                  </a>
                </li>
                </Link>
                <br/>
                <Link to="/contact">
                <li>
                  <a href="#" className="lear-more-l ">
                    Contact
                  </a>
                </li>
                </Link>
                <br/>
                <Link to="/team">
                <li>
                  <a href="#" className="lear-more-l ">
                    Team
                  </a>
                </li>
                </Link>
                <br/>
                <Link to="/faqprojectexpo">
                <li>
                  <a href="#" className="lear-more-l ">
                    FAQ
                  </a>
                </li>
                </Link>
                <br/>
              
              </ul>
            </div>
          </div>
          <div className="foot" style={{marginTop:"13px"}}>
          
          <h5>Follow us on</h5>

          <ul class="footer-icons" style={{display:"flex",justifyContent:"center"}}>
            <li>
              <a href="#" style={{ color:"white"}} className="fa">
                <LinkedInIcon/>
              </a>
            </li>
            <li>
              <a href="#" style={{ color:"white"}} className="fa">
                <TwitterIcon/>
              </a>
            </li>
            <li>
              <a href="#"  style={{ color:"white"}} className="fa">
                <FacebookIcon/>
              </a>
            </li>
            <li>
              <a href="#" style={{ color:"white"}} className="fa">
              <InstagramIcon/>
              </a>
            </li>
          </ul>
        </div>
      </div>
   
               
         
    </footer>


   </>
  );
}

export default Footer;
