import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ destination = {} }) => {
  const { id, image, title, tours, subTitle, col } = destination;

  let url="/destinations-details?page="+id;

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image
            src={require(`@/images/destination/${image}`).default.src}
            alt=""
          />
          <div className="destinations-one__content">
            {subTitle && (
              <p className="destinations-one__sub-title">{subTitle}</p>
            )}
            <h2 className="destinations-one__title">
              <a href={url}>{title}</a>
            </h2>
          </div>
          <div className="destinations-one__button">
            <a href="#">{tours} tours</a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleDestination;
