import React from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../footer/Footer";

 import "./main.css";

function AboutUs() {
  return (
    <>
    <Header index="0"/>
    <div style={{ backgroundImage: 'url("pattern-bg.jpg")' }}>

      <div className="parallax about-top-slide" id="parallax">
        <div className="container">
          <div className="row">
            <div className="top-slide-con">
              <div className="col-md-12 text-left">
                <h1 className="section-title " style={{textAlign:"left"}}>
                Online integrated platform for projects <br />
                taken up by the students{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container  pb-50">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-left" style={{textAlign:"left"}}>
            <div className="about-story-con">
              <div className="soln-heading">
                <h2 className="text-left" style={{textAlign:"left"}}>What does our website do?</h2>
              </div>

              <p className="text-left" style={{textAlign:"left"}}>
                Our website is helpful to all the students who are willing to
                get ProjectExpohips for their great careers and to help their
                parents. by using{" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a className="internal-links" href="#">
                    ProjectExpo
                  </a>
                </Link>{" "}
                students make their future very bright and a bright future of
                students can make a developed country.
              </p>

              <p className="text-left" style={{textAlign:"left"}}>
                Today, we are recognized under the top Student Project
                Provider Organization by renowned researching organizations and
                firms. We owe the entire credit to our keen team of designers,
                developers and strategists; who never let things go! In a single
                word,{" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a className="internal-links" href="#">
                    ProjectExpo
                  </a>
                </Link>{" "}
                is all about ‘doing things innovatively’ and ‘never giving up’.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="parallax solution-main pricing-main"
        id="parallax"
        data-color="#ffffff"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="text-left food-top-content">
                <div className="pc-homeimg-main hom-hero become2 food-new-img mobile-about-img" >
                  <img
                    className=""
                    loading="lazyload"
                    data-src="img/What-is-a-Digital-Marketing-Strategy.png"
                    src="img/What-is-a-Digital-Marketing-Strategy.png"
                    alt="Food Delivery App Development"
                    title="Food Delivery App Development"
                    width="451"
                    height="500"
                  />
                </div>
                <h1 className="section-title mb-30 aos-init aos-animate text-left" style={{textAlign:"left"}}>
                  Who We Are ?
                </h1>
                <p className="text-left" style={{textAlign:"left"}}>
                  India’s largest ProjectExpo network with the vision to make
                  quality education accessible for all. A brainchild of IIT,
                  IIIT, NIT and BVM Students, ProjectExpo aggregates global
                  ProjectExpohip information. We work hard to provides 100% correct
                  information to the our students.
                </p>

                <Link style={{ textDecoration: "none" }} to="/Team">
                  <a className=" button2 get-a-demo " style={{marginTop:"30px",marginBottom:"30px"}} href="#">
                    Meet Our Team
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5 food-top-img food-top-img-n desktop-about-img">
              <div className="become2">
                <img
                  className=""
                  loading="lazyload"
                  data-src="img/What-is-a-Digital-Marketing-Strategy.png"
                  src="img/What-is-a-Digital-Marketing-Strategy.png"
                  alt="Medicine Delivery App Development"
                  title="Medicine Delivery App Development"
                  width="451"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="parallax we-are-main"
        style={{ backgroundColor: "rgb(220 236 251 / 71%)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-left">
              <div className="soln-heading">
                <h2 className="text-left" style={{textAlign:"left"}}>Innovation meets endless opportunity At ProjectExpo.</h2>
              </div>
              <p className="text-left" style={{textAlign:"left"}}>
                As students, we have always experienced the joy of success in
                getting ProjectExpohips. When any student gets ProjectExpohip
                information from our platform and gets succeeds in it, it's a
                very delighted feeling for us. We believe in student benefit
                hence we can't take any personal information.
              </p>
              <a className="button2" href="#">
                Explore
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="we-are">
                <div className="col-md-12 col-sm-12 left">
                  <div className="we-are-box" style={{ padding: "30px" }}>
                    <div className="counter-box">
                      <h2 className="count">1000</h2>
                      <span>
                        <h2>+</h2>
                      </span>
                    </div>
                    <h5>Students Benefited</h5>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 right">
                  <div className="row">
                    <div
                      className="col-md-6 col-sm-6"
                      style={{
                        borderTop: "1px solid black",
                        borderRight: "1px solid black",
                        padding: "30px",
                      }}
                    >
                      <div className="we-are-box">
                        <div className="counter-box">
                          <h2 className="count">65</h2>
                          <span>
                            <h2>+</h2>
                          </span>
                        </div>
                        <h5>Organization Connected</h5>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-sm-6"
                      style={{ borderTop: "1px solid black", padding: "30px" }}
                    >
                      <div className="we-are-box">
                        <div className="counter-box">
                          <h2 className="count">99</h2>
                          <span>
                            <h2>%</h2>
                          </span>
                        </div>
                        <h5>Correct Information</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container pt-100">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center">
            <div className="about-story-con" style={{marginTop:"50px",marginBottom:"50px"}}>
              <div className="soln-heading">
                <h2 className="text-center">Vision and Mission</h2>
              </div>

              <p>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a className="internal-links" href="#">
                    ProjectExpo
                  </a>
                </Link>{" "}
                's mission is to organize ProjectExpohip information in a good
                manner and help to get helped to every needy student.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-100">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center">
            <div className="about-story-con">
              <div className="soln-heading">
                <h2 className="text-center">Goal</h2>
              </div>

              <p>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a className="internal-links" href="#">
                    ProjectExpo
                  </a>
                </Link>{" "}
                's Goal is to help 100000+ student to get ProjectExpohips and to
                connect every organizations to expand it world wide.
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <Footer/>
    </div>
    </>
  );
}

export default AboutUs;
