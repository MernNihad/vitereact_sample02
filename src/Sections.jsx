import React from "react";

function Sections(props) {



  return (
    <section className="section">
      <div className="section-img">
        <img className="imag" src={props.image_url} alt="" />
      </div>
      <div className="">
        <p style={{ width: "300px" }}>{props.title}</p>
      </div>
    </section>
  );
}

export default Sections;
