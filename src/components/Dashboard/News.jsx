import React from "react";
import newsImage1 from "../../images/news_1.png";

export default function News() {
  return (
    <div className="side-content">
      <div className="card">
        <div className="card__heading">Current Challenge</div>
        <img src={newsImage1} alt="" className="card__image" />
        <div className="card__title">Connected Care Challenge</div>

        <div className="card__article">
          Philips wants to improve the lives of billions in the next years to
          come. When you connect data, technology and people seemingly
          impossible things become possible. Patient outcomes improve, hospital
          staff satisfaction goes up and cost of care go down. We want to make
          healthcare better, together.
        </div>

        <div className="card__article">
          As we are all well aware, the healthcare landscape is changing
          rapidly. Increased complexity, patient volume, and pressure on devices
          and system integration demands new approaches and thinking in the
          delivery of high quality care to your patients. Making fast, informed
          decisions by leveraging advanced physiological monitoring and clinical
          informatics through connected care is [...]
        </div>

        <div className="card__read-more">Read more</div>
      </div>
    </div>
  );
}
