import React, {useEffect} from "react";
import "./hobby.scss";
import profile from "../img/YOONYUBI.jpg";

export default function Hobby() {
  useEffect(() => {
    document.body.addEventListener("mousemove", eyeball);
    function eyeball(e) {
      const eye = document.querySelectorAll(".eye");
      eye.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(e.pageX - x, e.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 100;
        eye.style.transform = `rotate(${rot}deg)`;
      });
    }
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");
    const texth1 = document.querySelector(".text-clock");

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });
    let bg = document.getElementById("bgcontainer");
    let count = 40;
    for (let i = 0; i < count; i++) {
      let glichBox = document.createElement("div");
      glichBox.className = "box2";
      bg.appendChild(glichBox);
    }
    const interval = setInterval(function () {
      let glitch = document.getElementsByClassName("box2");
      for (let i = 0; i < glitch.length; i++) {
        glitch[i].style.left = Math.floor(Math.random() * 100) + "vw";
        glitch[i].style.top = Math.floor(Math.random() * 100) + "vh";
        glitch[i].style.width = Math.floor(Math.random() * 100) + "px";
        glitch[i].style.height = Math.floor(Math.random() * 100) + "px";
        glitch[i].style.backgroundPosition =
          Math.floor(Math.random() * 50) + "px";
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="hobby-body static-wrap">
      <div className="container">
        <div className="box">
          <div className="content">
            <p className="text" data-text="Make it a hobby">
              Make it a hobby
            </p>
          </div>
        </div>
        <div className="box">
          <div id="bgcontainer"></div>
        </div>
        <div className="box">
          <div className="face">
            <div className="eyes">
              <span className="eye"></span>
              <span className="eye"></span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="clock-circle">
            <div className="hour">
              <div className="hr" id="hr"></div>
            </div>
            <div className="min">
              <div className="mn" id="mn"></div>
            </div>
            <div className="sec">
              <div className="sc" id="sc"></div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="perspective-text">
            <div className="perspective-line">
              <p>신입 프론트엔드 개발자</p>
              <p>제 페이지를 봐주셔서 감사합니다.</p>
            </div>
            <div className="perspective-line">
              <p>안녕하세요.</p>
              <p>신입 프론트엔드 개발자</p>
            </div>
            <div className="perspective-line">
              <p>윤유비 입니다.</p>
              <p>Tel: 010 - 7940 - 2535</p>
            </div>
            <div className="perspective-line">
              <p>윤유비 입니다.</p>
              <p>잘 부탁드립니다.</p>
            </div>
            <div className="perspective-line">
              <p>잘 부탁드립니다.</p>
              <p>Mail: yyb2535@gmail.com</p>
            </div>
          </div>
          <img src={profile} alt="" />
        </div>
        <div className="box">
          <a href="#!">
            <span>Wave</span>
            <div className="liquid"></div>
          </a>
          <button className="button">
            DOOR
            <span></span>
          </button>
          <div className="module module4">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="title">
              <h2>Hover Me!</h2>
            </div>
            <div className="content">
              <div className="ofbox">
                <h3>Sub Title</h3>
              </div>
              <div className="ofbox">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur quas nulla eum iste blanditiis
                </p>
              </div>
            </div>
          </div>
          <div className="module module2">
            <div className="title">
              <h2>Hover Me!</h2>
            </div>
            <div className="content">
              <h3>Title!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quas nulla eum iste blanditiis
              </p>
              <div className="details">
                <h3>Sub Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur quas nulla eum iste blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <a href="#!">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            저는 취미로 스타일을 제작합니다
          </a>
        </div>
        <div className="box">
          <span>I Love Animation</span>
        </div>
      </div>
    </div>
  );
}
