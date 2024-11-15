import React from "react";
import "../Tag/Tag.scss";

const Tag = ({ TagTitle }) => {
  return (
    <div className="tagBuble">
      <p className="tag">{TagTitle}</p>
    </div>
  );
};

export default Tag;
//
