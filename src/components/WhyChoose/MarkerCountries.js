import whyChoose from "@/data/whyChoose";
import React, { Fragment } from "react";
import { Image, Container } from "react-bootstrap";

const WhyChoose = () => {
  return (
    <section className="MarkerCountries">
      <Container>
          <div className="animated fadeInLeft col-xl-6 innerSection">
            <h4>Our Experience, Your way!</h4>
            <h3>Why chose Safari Expert?</h3>
            <ul>
              <li className="one">
                <Image
                  src={require(`@/images/resources/MarkerCountries-1.jpg`).default.src}
                  alt=""
                />
                <h6>100 New Daily user</h6>
                <p>Aenean lacinia bibendum nulla sed consecteture</p>
              </li>
              <li className="two">
                <Image
                  src={require(`@/images/resources/MarkerCountries-2.jpg`).default.src}
                  alt=""
                />
                <h6>Store Brand Building</h6>
                <p>Aenean lacinia bibendum nulla sed consecteture</p>
              </li>
              <li className="three">
                <Image
                  src={require(`@/images/resources/MarkerCountries-3.jpg`).default.src}
                  alt=""
                />
                <h6>Fine Clean Design</h6>
                <p>Aenean lacinia bibendum nulla sed consecteture</p>
              </li>
              <li className="four">
                <Image
                  src={require(`@/images/resources/MarkerCountries-4.jpg`).default.src}
                  alt=""
                />
                <h6>Well Creafted Listings</h6>
                <p>Aenean lacinia bibendum nulla sed consecteture</p>
              </li>
            </ul>
          </div>
          <div className="animated fadeInLeft col-xl-6">
              <div className="about-one__left">
                  <div className="about-one__img-box">
                      <div className="about-one__img">
                          <Image
                            src={require(`@/images/resources/about-one-img-1.jpg`).default.src}
                            alt=""
                          />
                      </div>
                      <div className="about-one__call">
                          <div className="about-one__call-icon">
                              <span className="icon-phone-call"></span>
                          </div>
                          <div className="about-one__call-number">
                              <p>Book Tour Now</p>
                              <h4>
                                  <a href="tel:666-888-0000">666-888-0000</a>
                              </h4>
                          </div>
                      </div>
                      <div className="about-one__discount">
                          <h2>30%</h2>
                          <h3>Discount</h3>
                      </div>
                  </div>
              </div>
          </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
