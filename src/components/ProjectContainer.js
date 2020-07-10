import React from "react";
import img2 from "../img/Img2.jpg";
import img3 from "../img/Img3.jpg";
function ProjectContainer() {
  return (
    <section className="project-container">
      <a href="https://s3ubfrontend.s3.ap-northeast-2.amazonaws.com/project/index.html" className="pj-link">
        <img src={img2} alt="" />
        <div>
          <h2>Title</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident dolorum harum soluta.</span>
        </div>
      </a>
      <a href="https://s3ubfrontend.s3.ap-northeast-2.amazonaws.com/project/index.html" className="pj-link">
        <img src={img3} alt="" />
        <div>
          <h2>Title</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident dolorum harum soluta.</span>
        </div>
      </a>
    </section>
  );
}
export default ProjectContainer;
