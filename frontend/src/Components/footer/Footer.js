import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

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
        <div className="container ">
        <div className=" c a address-f footer-address-main">
        <div className=" b footer-adress">
          <i class="fa fa-map-marker"></i>

          {/* <h5>India</h5> */}
          <p>
            01S09 A.M.Naik house of schol, V.V.Nagar <br />
            Anand, Gujarat 380010
          </p>
        </div>
        <div className="b footer-awards">
          <h5>Contact Us</h5>
          <div class="footer-center">
            <div>
              <i class="fa fa-phone"></i>
              <p style={{ margin: "auto" }}>+91 6354434661</p>
            </div>
            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">ProjectExpo@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="b footer-social home-social">
          <h5>Follow us on</h5>

          <ul class="footer-icons">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
                <Link to="/">
                  <li>
                    <a href="#" className="lear-more-l ">
                      Student
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/login">
                  <li>
                    <a href="#" className="lear-more-l ">
                      Faculty
                    </a>
                  </li>
                </Link>
                <br/>
                <Link to="/tlogin">
                  <li className="hiring-link blink-menu">
                    <a href="#" className="lear-more-l  blink-active">
                     Admin
                    </a>{" "}
                    <span className="hiring">We Are Hiring</span>
                  </li>
                </Link>
                <br/>
                <Link to="/About-ProjectExpo">
                  <li>
                    <a href="#" className="lear-more-l ">
                      University
                    </a>
                  </li>
                </Link>
                <br/>
                <Link to="/contact">
                  <li>
                    <a href="#" className="lear-more-l ">
                      College
                    </a>
                  </li>
                </Link>
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
              <li>
                <a href="#" className="lear-more-l ">
                  Upload Project
                </a>
              </li>
              <li>
                <a href="#" className="lear-more-l ">
                  Project View
                </a>
              </li>
              <li>
                <a href="#" className="lear-more-l ">
                  Plagarithm
                </a>
              </li>
              <li>
                <a href="#" className="lear-more-l ">
                  Readme
                </a>
              </li>
            </ul>
          </div>
   <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (is["max-height"] == "0px") {
                      setis({ "max-height": "100%" });
                    } else {
                      setis({ "max-height": "0px" });
                    }
                  }
                }}
              >
              Profiles
              </h5>
              <ul style={width <= 987 ? is : {}}>
                <Link to="/study-at-germany">
                  <li>
                    <a href="#" className="lear-more-l ">
                      student Profile<br/>
                    </a>
                  </li>
                </Link>
                <br/>
                <Link to="/study-at-us">
                  <li>
                    <a href="#" className="lear-more-l ">
                      faculty profile<br/>
                    </a>
                  </li>
                </Link>
                <br/>
                <Link to="/study-at-ukrain">
                  <li>
                    <a href="#" className="lear-more-l ">
                     college profile<br/>
                    </a>
                  </li>
                </Link>
                <br/>
                <Link to="/study-at-canada">
                  <li>
                    <a href="#" className="lear-more-l ">
                      Admin Profile<br/>
                    </a>
                  </li>
                </Link>
                <br/>
                <Link to="/study-at-rusia">
                  <li>
                    <a href="#" className="lear-more-l ">
                    
                    </a>
                  </li>
                </Link>
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
                Research Fellowships
              </h5>
              <ul style={width <= 987 ? rs : {}}>
                <li>
                  <a href="#" className="lear-more-l ">
                    PMRF Fellowship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l ">
                    TARE Fellowship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l ">
                    JNFF Fellowship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l ">
                    Google Phd Fellowship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l ">
                    ICMR Fellowship
                  </a>
                </li>
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
                Gallery
              </h5>
              <ul style={width <= 987 ? ex : {}}>
                <li>
                  <a href="#" className="lear-more-l ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l ">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l ">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l ">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l ">
                    Q&A
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 copy-right text-center">
          <p>
            <a
              href="https://www.dmca.com/Protection/Status.aspx?ID=b77fb9ca-2075-44ae-9d84-a87cbe917c18&amp;refurl=#9"
              title="DMCA.com Protection Status"
              className="dmca-badge"
            >
              <img
                src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-03.png?ID=b77fb9ca-2075-44ae-9d84-a87cbe917c18"
                alt="DMCA.com Protection Status"
                width="100"
                height="20"
              />
            </a>
            <span>
              © 2022
              <a href="#" target="_new">
                ProjectExpo
              </a>
              All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>


   </>
  );
}

export default Footer;
