import { tourDetailsOne } from "@/data/tourDetailsPage";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TourDetailsOne = () => {

  const [pageURL, setPageURL] = useState(0);
  useEffect(() => {
    setPageURL(window.location.search);
  })
  
  if(typeof(pageURL)=='string' && pageURL.indexOf("page=")>=0){
    var getPageNumber=pageURL.split('page=')[1]?pageURL.split('page=')[1]:0;
  }else{
    var getPageNumber=0;
  }

  getPageNumber=parseInt(getPageNumber);

  if(tourDetailsOne[getPageNumber] && tourDetailsOne[getPageNumber]['title']!=undefined){

  const { title, rate, duration, minAge, tourType, location, date, superb } =
  tourDetailsOne[getPageNumber];


  return (
    <section className="tour-details">
      <div className="tour-details__top">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__top-inner">
                <div className="tour-details__top-left">
                  <h2 className="tour-details__top-title">{title}</h2>
                  <p className="tour-details__top-rate">
                    <span>${rate}</span> / Per Person
                  </p>
                </div>
                <div className="tour-details__top-right">
                  <ul className="list-unstyled tour-details__top-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Duration</p>
                        <h6>{duration}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-user"></span>
                      </div>
                      <div className="text">
                        <p>Min Age</p>
                        <h6>{minAge}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-plane"></span>
                      </div>
                      <div className="text">
                        <p>Tour Type</p>
                        <h6>{tourType}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>Location</p>
                        <h6>{location}</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="tour-details__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__bottom-inner">
                <div className="tour-details__bottom-left">
                  <ul className="list-unstyled tour-details__bottom-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Posted {date}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">
                        <p>{superb} Superb</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tour-details__bottom-right">
                  <a href="#">
                    <i className="fas fa-share"></i>share
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );


  }else{

    return "";

  }

};

export default TourDetailsOne;
