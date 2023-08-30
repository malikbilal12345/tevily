import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const SingleNewsOne = ({ news = {}, newsTwo = false }) => {
  const { id, image, title, author, comments, date } = news;

  let url="/news-details?page="+id;

  return (
    <div
      className={
        newsTwo ? "news-one__single animated fadeInUp" : "news-one__single"
      }
      style={{ userSelect: newsTwo ? "none" : "unset" }}
    >
      <div className="news-one__img">
        <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
        <a href={url}><span className="news-one__plus"></span></a>
        <div className="news-one__date">
          <p>
            {date.split(" ").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span>
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="news-one__content">
        <ul className="list-unstyled news-one__meta">
          <li>
            <a href={url}>
                <i className="far fa-user-circle"></i>
                {author}
            </a>
          </li>
          <li>
            <a href={url}>
                <i className="far fa-comments"></i>
                {comments} Comments
            </a>
          </li>
        </ul>
        <h3 className="news-one__title">
          <a href={url}>{title}</a>
        </h3>
      </div>
    </div>
  );
};

export default SingleNewsOne;
