import React from "react";
import "./tada.scss";
import tadaImg1 from "../img/tada/tada_feature_01.jpg";
import tadaImg2 from "../img/tada/tada_feature_02.jpg";
import tadaImg3 from "../img/tada/tada_feature_03.jpg";
import tadaBasic from "../img/tada/tata-basic.jpg";

export default function Tada() {
  return (
    <div className="tada-body static-wrap">
      <div className="banner">
        <div className="imgBx">
          <img
            src="https://tadatada.com/static/images/premium_driver_banner_desktop.jpg"
            alt="배너"
          />
        </div>
      </div>
      <header>
        <h1 className="logo">
          <img
            src="https://tadatada.com/static/images/btn_home_logo@4x.png"
            alt="logo"
          />
        </h1>
        <div className="header-list">
          <ul>
            <li>
              <a href="#!">이용방법</a>
            </li>
            <li>
              <a href="#!">도움말</a>
            </li>
            <li>
              <a href="#!">타다 비즈니스</a>
            </li>
            <li>
              <a href="#!">채용</a>
            </li>
            <li>
              <a href="#!">드라이버</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <div className="main-content">
          <div className="details">
            <h2>바로가다</h2>
            <h2>이동의 기본,타다</h2>
          </div>
          <div className="main-imgBx">
            <img
              src="https://tadatada.com/static/images/main_tada_car_tablet.png"
              alt="main-car"
            />
          </div>
        </div>
        <div className="content">
          <div className="btn-group">
            <div className="store-group">
              <button>
                <img
                  src="https://tadatada.com/static/images/btn_download_googleplay@4x.png"
                  alt="구글플레이 스토어"
                />
              </button>
              <button>
                <img
                  src="https://tadatada.com/static/images/btn_download_appstore@4x.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="content-group">
            <div className="group-1">
              <div className="moveChange">
                <h2>이동의</h2>
                <h2>기본을</h2>
                <h2>바꾸다</h2>
              </div>
              <div className="lineBx">
                <div className="line-right"></div>
              </div>
            </div>
            <div className="group-2">
              <div className="lineBx">
                <div className="line-left"></div>
              </div>
              <div className="moveDetails">
                <h3>더 정직하게,더 편안하게,더 안전하게.</h3>
                <p>
                  타다는 "이동의 기본"을 지키는 것만으로도
                  <br />
                  지금보다 "더 나은 이동"이 되리라 믿습니다.
                  <br />
                  일상 속 모든 이동이 더 좋은 경험이 될 수 있도록
                  <br />
                  타다는 바로 가는 것을 멈추지 않고
                  <br />
                  계속해서 고민하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="sec-group1">
            <div className="videoBx">
              <img
                src="https://tadatada.com/static/images/0922socar_06_266@2x.jpg"
                alt="poster"
              />
            </div>
            <div className="sec-details">
              <h2>타다(TADA)는?</h2>
              <hr />
              <p>
                타다(TADA)는 <strong>새로운 이동의 기준</strong>을 제시하는
                모빌리티 플랫폼으로,
                <br />
                <strong>일상 속 이동</strong>이 필요할 때 더욱 편리하고 안전하게
                이용할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="sec-group2">
            <div className="sec-card">
              <div className="sec-imgBx">
                <img src={tadaImg1} alt="feature1" />
              </div>
              <h3>
                더 편안하게,
                <br />
                깨끗하게 유지되는 실내
              </h3>
              <p>
                타다는 더욱 쾌적한 승차 경험을 제공하기 위해 정기적으로 차량
                내/외부를 청소합니다. 타다는 매일 운행 전 차내 상태와 비품을
                재정비하여 청결하고 정갈한 실내환경을 유지합니다.
              </p>
            </div>
            <div className="sec-card">
              <div className="sec-imgBx">
                <img src={tadaImg2} alt="feature2" />
              </div>
              <h3>
                더 안전하게,
                <br />
                타다 드라이버 매뉴얼
              </h3>
              <p>
                타다는 더욱 안전한 이동 경험을 제공하기 위해 타다만의 매뉴얼을
                만들었습니다. 안전 운행을 위한 운행 매뉴얼과 이용자 대응
                매뉴얼이 포함되며, 매 운행 시 이용자에게 드라이버에 대한 평가를
                받아 시스템에 반영합니다.
              </p>
            </div>
            <div className="sec-card">
              <div className="sec-imgBx">
                <img src={tadaImg3} alt="feature3" />
              </div>
              <h3>
                더 정직하게,
                <br />
                승차거부 없는 바로 배차
              </h3>
              <p>
                타다는 드라이버가 목적지를 확인하고 원하는 호출을 수락하는 것이
                아닌, 타다만의 배차 시스템을 통해 차량이 '바로배차' 되는
                시스템입니다. 드라이버는 이용자 탑승 전까지 도착지를 알 수
                없으며, 호출 즉시 출발지에서 가장 가까운 차량이 바로배차되기
                때문에 승차거부 걱정없이 타다를 이용하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>
        <section className="sec2">
          <div className="lineup">
            <h2>타다 라인업</h2>
            <p>
              타다는 '타다 베이직'을 시작으로 다양한 모빌리티 라인업을 확장할
              예정입니다.
              <br />
              일상 속 모든 이동을 타다와 함께 할 수 있도록, 타다는 계속해서
              고민하겠습니다.
            </p>
          </div>
          <div className="tadalist">
            <ul>
              <li className="tadalist-first">
                <a href="#!">베이직</a>
              </li>
              <div className="cricle"></div>
              <li>
                <a href="#!">프리미엄</a>
              </li>
              <div className="cricle"></div>
              <li>
                <a href="#!">어시스트</a>
              </li>
              <div className="cricle"></div>
              <li>
                <a href="#!">에어</a>
              </li>
              <div className="cricle"></div>
              <li>
                <a href="#!">프라이빗</a>
              </li>
              <div className="cricle"></div>
            </ul>
            <hr />
          </div>
          <div className="tadalist-content">
            <div className="imgBx">
              <img src={tadaBasic} alt="tadaBasic" />
            </div>
            <div className="tadalist-details">
              <h2>BASIC</h2>
              <p>최대 7인까지, 쾌적한 실시간 이동</p>
              <ul>
                <li>호출 즉시 시스템으로 바로배차</li>
                <li>최대 7인까지 편안하게 탑승 가능</li>
                <li>11인승 rv로 운영되어 쾌적하고 넓은 실내 공간</li>
                <li>무료 와이파이와 스마트폰 충전기 상시 비치</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="content ct2">
          <div className="content-group cg2">
            <div className="cg2-imgBx">
              <img
                className="case"
                src="https://tadatada.com/static/images/bg_howto_mockup@4x.png"
                alt="case"
              />
              <div className="cg2-frameBx">
                <img
                  className="figu"
                  src="https://tadatada.com/static/images/bg_howto_1_mobile@3x.jpg"
                  alt="tadastyle"
                />
              </div>
            </div>
            <div className="cg2-details">
              <h2>타다 이용 방법</h2>
              <hr />
              <h3>회원가입</h3>
              <p>
                휴대폰 번호로 간편하게 가입한 후,
                <br />
                결제 카드 정보를 입력해주세요.
              </p>
            </div>
          </div>
        </div>
        <section className="sec-service">
          <div className="service-content">
            <h2>타다 이용안내</h2>
            <hr />
            <div className="service-details">
              <div className="h3-group">
                <h3>서비스 이용시간</h3>
                <p>24시간 이용 가능</p>
                <br />
                <h3>출발가능지역</h3>
                <p>
                  전 지역:서울특별시
                  <br />
                  일부지역: 인천광역시, 김포시, 남양주시
                </p>
                <br />
                <h3>도착가능지역</h3>
                <p>
                  전 지역 : 서울특별시, 구리시, 하남시, 성남시, 과천시, 광명시,
                  안양시, 부천시, 의정부시, 수원시, 용인시, 고양시, 군포시,
                  의왕시
                  <br />
                  일부 지역 : 인천광역시, 김포시, 남양주시
                  <br />
                  <a href="#!">* 더 상세한 이용가능지역 확인하기 ></a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="service-banner">
        <div className="imgBx">
          <img
            className="car"
            src="https://tadatada.com/static/images/ic-vote-newarea@3x.png"
            alt="car"
          />
        </div>
        <div className="sb-content">
          <h2>우리 지역에서도 타다 타고 싶어요!</h2>
          <p>
            <a href="#!">신규지역 제안하기 →</a>
          </p>
        </div>
      </div>
      <div className="slogan">
        <div className="text">
          <p>
            VCNC는 'Value Creators & Company'의 약자로 "세상에 이로운 가치를
            만들어 전하기 위해" 2011년에 설립되었습니다. '모바일에서의 감성적인
            커뮤니케이션을 통해 사람들의 실제 관계성을 증진시킨다.'는 Vision하에
            Between을 개발하여 운영 중이며, 대한민국 대표 커플앱으로써 연인
            관계에 더 나은 가치를 전하는 역할을 하고 있습니다. 새로운 혁신이란
            기존의 문제를 해결하며 시작된다고 생각합니다. Between이 온라인에서
            '더 나은 가치'를 찾아 전한다면, 이제는 오프라인에서 "새로운 가치"를
            찾아 전하고자 합니다. VCNC는 모빌리티 시장에서의 문제를 해결하고
            새로운 가치를 찾기 위해, 이동의 기본 '타다(TADA)'를 시작합니다.
          </p>
        </div>
      </div>
      <footer>
        <address>브이씨엔씨 주식회사 ㅣ 대표 : 박재욱</address>
        <address>
          통신판매번호 : 2015-서울강남-01065 ㅣ 사업자등록번호 : 119-86-38202
        </address>
        <address>서울특별시 성동구 연무장7길 11</address>
        <address>
          사업제휴문의 : partner@tadatada.com ㅣ 마케팅문의 :
          marketing@tadatada.com
        </address>
        <address>고객센터 : help@tadatada.com ㅣ 1800-8437</address>
        <div className="fav">
          <ul>
            <li>
              <a href="#!">이용약관</a>
            </li>
            <li>
              <a href="#!">개인정보 처리방침</a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://tadatada.com/static/images/btn_sns_facebook@3x.png"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://tadatada.com/static/images/btn_sns_instagram@3x.png"
                  alt="in"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
