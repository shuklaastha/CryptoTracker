import React, { useState } from "react";
import "./styles.css";

function CoinInfo({ heading, description }) {
  const shortDesc = description.slice(0, 300) + 
    "<span class='read-toggle'>Read More...</span>";
  const longDesc = description + 
    "<br/><span class='read-toggle'>Read Less...</span>";

  const [toggle, setToggle] = useState(false);

  return (
    <div className="gray-wrapper info-component">
      <h1>{heading}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: description.length >= 300 ? (toggle ? longDesc : shortDesc) : description,
        }}
        className="info-p"
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

export default CoinInfo;
