import threeIconBox from "@/data/threeIconBox";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ThreeIconBox = () => {
  return (
    <section className="three-icon-box">
      <div className="popular-tours__container">
        <Row>
          {threeIconBox.map(({ id, icon, title, text }) => (
            <Col key={id} xl={3} lg={3} className="animated fadeInUp">
              <div className="three-icon-box__single">
                <div className="three-icon-box__icon">
                  <span className={icon}></span>
                </div>
                <div className="three-icon-box__content">
                  <h4 className="three-icon-box__title">{title}</h4>
                  <p className="three-icon-box__text">{text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ThreeIconBox;
