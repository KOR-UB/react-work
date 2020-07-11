import React from "react";
import img2 from "../img/Img2.jpg";
import img3 from "../img/Img3.jpg";
import WeatherImg from "../img/WeatherForecast.png";
function ProjectContainer() {
  return (
    <>
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
    <section className="pj-sec">
      <div className="pj-card">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="pj-title">
            <h2>Weather Forecast Project</h2>
        </div>
        <div className="pj-content">
          <h3>날씨 기상예보 사이트</h3>
          <p>
            OpenWeatherMap API를 사용 <br /> 
            5일의 기상정보를 제공하는 서비스 
          </p>
          <ul> 
            <li>사용자 정의 커스텀 지원</li>
            <li>현재 시간 및 요일정보 제공</li>
            <li>현재 사용자 지역 기상정보 제공</li>
            <li>특정 행정구역 기상정보 제공</li>
          </ul>
          <div className="pj-details">
            <img src={WeatherImg} />
            <div className="pj-details-text">
              <h3>개발 비용</h3>
              <ul>
                <li>제작 인원: 3명</li>
                <li>제작 기간: 1일</li>
                <li>담당 업무: 기상정보 API를 Ajax로 요청하여 데이터를 렌더링 및 현재 지역과 일부 행정구역을 사용자가 요청하면 다시 렌더링 할 수 있도록 함수를 제작</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default ProjectContainer;
