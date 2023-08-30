import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";

const { tagline, title, popularTours } = popularToursTwo;

let urlMain="/tour-details";

const PopularToursTwo = ({ toursPage = false }) => {
  return (
    <section className="popular-tours-two PopularToursTwo">
      <div className="popular-tours__container">
      {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {popularTours.map((tour) => (
            <Col
              key={tour.id}
              xl={3}
              lg={4}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTour tour={tour} urlMain={urlMain} userSelect />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PopularToursTwo;
