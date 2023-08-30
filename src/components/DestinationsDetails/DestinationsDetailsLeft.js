import { destinationsDetailsLeft } from "@/data/destinationsDetails";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import DestinationsDetailsFaq from "./DestinationsDetailsFaq";

const DestinationsDetailsLeft = () => {

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

  if(destinationsDetailsLeft[getPageNumber] && destinationsDetailsLeft[getPageNumber]['discoverTitle']!=undefined){

  const { image, discoverTitle, texts, overviewTitle, overviews, faqTitle, faqs } =
  destinationsDetailsLeft[getPageNumber];
  

  return (
    <div className="destinations-details__left">
      <div className="destinations-details__img">
        <Image src={image.src} alt="" />
      </div>
      <div className="destinations-details__discover">
        <h3 className="destinations-details__title">{discoverTitle}</h3>
        {texts.map((text, index) => (
          <p
            key={index}
            className={`destinations-details__discover-text-${index + 1}`}
          >
            {text}
          </p>
        ))}
      </div>
      <div className="destinations-details__overview">
        <h3 className="destinations-details__title">{overviewTitle}</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          {overviews.map(({ id, left, right }) => (
            <li key={id}>
              <div className="destinations-details__overview-left">
                <p>{left}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{right}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="destinations-details__title">{faqTitle}</h3>
      <DestinationsDetailsFaq faqs={faqs} />
    </div>
  );

  }else{

    return "Not found";

  }

};

export default DestinationsDetailsLeft;
