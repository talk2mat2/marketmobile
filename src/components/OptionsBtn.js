import React from "react";

const OptionsBtn = ({title="",children}) => {
  return (
    <button style={{ background:"inherit" }} className="d-flex flex-column align-items-center p-1 border-0">
      <div className="btn-bg d-flex align-items-center justify-content-center">{children}</div>
      <h6 className="mt-2 optionsTitle">{title}</h6>
    </button>
  );
};

export default OptionsBtn;
