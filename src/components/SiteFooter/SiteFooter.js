import footerData from "@/data/footerData";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Col, Container, Image, Row } from "react-bootstrap";

const { logo, icons, companies, explore, social, year, author, about } =
  footerData;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const SiteFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  useEffect(() => {
    const openTheModalAppear = document.querySelector(".openTheModalAppear");
    const openTheModalAppearModal = document.querySelector(".openTheModalAppearModal");
    const openTheModalAppearModalClosed = document.querySelector(".openTheModalAppearModalClosed");
    openTheModalAppear.addEventListener("click", function () {
          openTheModalAppearModal.classList.add("yes-modalShow");
    });
    openTheModalAppearModalClosed.addEventListener("click", function () {
          openTheModalAppearModal.classList.remove("yes-modalShow");
    });
  });

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Container>
          <div className="site-footer__top-inner">
            <Row>
              <Col xl={4} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link href="/">
                      <a>
                        <Image src={logo.src} alt="" />
                      </a>
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">{about}</p>
                  <ul className="footer-widget__about-contact list-unstyled">
                    {icons.map(({ id, icon, content, subHref }) => (
                      <li key={id}>
                        <div className="icon">
                          <i className={icon}></i>
                        </div>
                        <div className="text">
                          {subHref ? (
                            <a href={`${subHref}:${content}`}>{content}</a>
                          ) : (
                            <p>{content}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__company clearfix">
                  <h3 className="footer-widget__title">Top Destinations</h3>
                  <ul className="footer-widget__company-list list-unstyled topDestinations">
                    <li>
                      <a href="#">Ngorongoro Conservation Area</a>
                    </li>
                    <li>
                      <a href="#">Serengeti National Park</a>
                    </li>
                    <li>
                      <a href="#">Zanzibar</a>
                    </li>
                    <li>
                      <a href="#">Kilimanjaro</a>
                    </li>
                    <li>
                      <a href="#">Lake Manyara</a>
                    </li>
                    <li>
                      <a href="#">Arusha National Park</a>
                    </li>
                    <li>
                      <a href="#">Tarangire National Park</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__explore">
                  <h3 className="footer-widget__title">Top Trips</h3>
                  <ul className="list-unstyled footer-widget__explore-list topTrips">
                    <li>
                      <a href="#">5 Day Safari</a>
                    </li>
                    <li>
                      <a href="#">12 Day Kilimanjaro Trecking</a>
                    </li>
                    <li>
                      <a href="#">7 Day Killimanjaro Trecking + Zanzibar</a>
                    </li>
                    <li>
                      <a href="#">5 Day Safari + 5 day Zanzibar</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__newsletter">
                  <h3 className="footer-widget__title">Newsletter</h3>
                  <ul className="socialNewsLetter">
                    <li>
                      <a href="#"><i className="fab fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-google"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-pinterest"></i></a>
                    </li>
                  </ul>
                  <p className="newsletter_msg">Make email address input field thinner and move down a bit. Make subscribe button smaller also and move down.</p>
                  <form
                    className="footer-widget__newsletter-form mc-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                        required
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-btn"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                  <div className="mc-form__response text-center"></div>
                  <div className="footer-widget__newsletter-bottom">
                    <div className="footer-widget__newsletter-bottom-icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="footer-widget__newsletter-bottom-text">
                      <p>I agree to all terms and policies</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-left">
                  <div className="footer-widget__social">
                    {social.map(({ icon, link }, index) => (
                      <a href={link} key={index}>
                        <i className={`fab ${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="site-footer__bottom-right">
                  <p>
                    © 2023 Safari Expert
                  </p>
                </div>
                <div className="site-footer__bottom-left-arrow">
                  <a href="#" className="scroll-to-target scroll-to-top">
                    <span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        <div className="modal fade openTheModalAppearModal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <button type="button" className="close openTheModalAppearModalClosed" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <p className="two">
                  <label>Type of trip</label>
                  <select>
                    <option>Safari</option>
                  </select>
                </p>
                <p className="two">
                  <label>Duration of your stay</label>
                  <select>
                    <option>....</option>
                  </select>
                </p>
                <p>
                  <label>Budget per person (excluding international flights)</label>
                  <select>
                    <option>....</option>
                  </select>
                </p>
                <p className="two">
                  <label>Estimated arrival date<span className="required"></span></label>
                  <input type="date" />
                </p>
                <p className="two">
                  <label>Country<span className="required"></span></label>
                  <select>
                    <option>United Kingdom</option>
                  </select>
                </p>
                <p className="two">
                  <label>Number of Adults<span className="required"></span></label>
                  <input type="number" value="2" />
                </p>
                <p className="two">
                  <label>Adults age 1<span className="required"></span></label>
                  <input type="number" />
                </p>
                <p className="two right">
                  <label>Adults age 2<span className="required"></span></label>
                  <input type="number" />
                </p>
                <p className="two">
                  <label>Number of Children<span className="required"></span></label>
                  <input type="number" value="2" />
                </p>
                <p className="two">
                  <label>Childs age 1<span className="required"></span></label>
                  <input type="number"  />
                </p>
                <p className="two right">
                  <label>Childs age 2<span className="required"></span></label>
                  <input type="number"  />
                </p>
                <p className="two">
                  <label>Your first name<span className="required"></span></label>
                  <input type="text"  />
                </p>
                <p className="two">
                  <label>Your last name<span className="required"></span></label>
                  <input type="text" />
                </p>
                <p className="two">
                  <label>Email address<span className="required"></span></label>
                  <input type="text"  />
                </p>
                <p className="two">
                  <label>Phone number<span className="required"></span></label>
                  <input type="text" />
                </p>
                <p>
                  <label>Announcements</label>
                  <textarea placeholder="Tell us more about your wishes regarding budget and accommodation or if you have any other request."></textarea>
                </p>
                <p className="checkbox">
                  <input type="checkbox" /> By checking this, I accept that I will receive a proposal for my travel request, and that I can receive other news updates regarding my holidays.
                </p>
                <p className="info">
                  Your data will be processed according to our <a>Privacy Policy</a>.
                </p>
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default SiteFooter;
