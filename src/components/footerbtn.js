import React from "react";

const FooterBtn = ({title="",children}) => {
  return (
    <button style={{ background:"inherit" }} className="d-flex flex-column align-items-center p-1 border-0">
      <div className="foot-btn-bg d-flex align-items-center justify-content-center">{children}</div>
      <h6 className="footerTitle mt-2">{title}</h6>
    </button>
  );
};

export default FooterBtn;
