import React, {useRef, useEffect} from "react";
import "./starbucks.scss";

export default function Starbucks() {
  const notice_a = useRef(null);
  const promotion = useRef(null);
  const searchinput = useRef(null);
  function toggle(e) {
    promotion.current.classList.toggle("active");
    e.target.classList.toggle("active");
  }

  function searchtoggle() {
    searchinput.current.classList.toggle("active");
  }
  useEffect(() => {
    let i = 0;

    function iterator() {
      i++;
      switch (i) {
        case 1:
          notice_a.current.innerHTML = "시스템 개선 및 점검 안내";
          notice_a.current.href =
            "https://www.starbucks.co.kr/whats_new/noticeView.do?seq=3787";
          break;
        case 2:
          notice_a.current.innerHTML = "홈페이지 이용약관 개정 안내";
          notice_a.current.href =
            "https://www.starbucks.co.kr/whats_new/noticeView.do?seq=3786";
          break;
        case 3:
          notice_a.current.innerHTML = "SSG PAY 시스템 점검 안내";
          notice_a.current.href =
            "https://www.starbucks.co.kr/whats_new/noticeView.do?seq=3777";
          break;
        case 4:
          notice_a.current.innerHTML =
            "스타벅스 고객센터의 대표번호와 운영시간 변경 안내";
          notice_a.current.href =
            "https://www.starbucks.co.kr/whats_new/noticeView.do?seq=3776";
          break;
        case 5:
          notice_a.current.innerHTML =
            "개인정보 처리방침 및 영상정보처리기기 운영관리 방침 개정안내";
          notice_a.current.href =
            "https://www.starbucks.co.kr/whats_new/noticeView.do?seq=3775";
          break;
        default:
          i = 0;
          iterator();
      }
    }
    const rotate = setInterval(iterator, 3000);
    iterator();
    return () => {
      clearInterval(rotate);
    };
  }, []);

  return (
    <div className="starbucks-body static-wrap">
      <header>
        <div className="Max1200">
          <nav>
            <ul>
              <li>
                <a href="#!">Sign In</a>
              </li>
              <span>ㅣ</span>
              <li>
                <a href="#!">My Starbucks</a>
              </li>
              <span>ㅣ</span>
              <li>
                <a href="#!">Customer Service &amp; Ideas</a>
              </li>
              <span>ㅣ</span>
              <li>
                <a href="#!">Find a Store</a>
              </li>
              <div className="search">
                <input
                  type="search"
                  name="search"
                  aria-label="검색"
                  placeholder="통합검색"
                  id="searchinput"
                  ref={searchinput}
                />
                <a href="#!" onClick={searchtoggle}>
                  <img
                    src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"
                    alt="검색 돋보기"
                  />
                </a>
              </div>
            </ul>
          </nav>
          <h1 className="logo">
            <a href="#!">로고</a>
          </h1>
          <ul className="menu-list">
            <li>
              <a href="#!" className="item">
                coffee
              </a>
              <div className="nav-container">
                <div className="items">
                  <ul className="details">
                    <li className="first">
                      <a href="#!">커피</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 원두</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 비아</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 오리가미</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">나와 어울리는 커피</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">스타벅스 리저브™</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">에스프레소 음료</a>
                    </li>
                    <li>
                      <a href="#!">도피오</a>
                    </li>
                    <li>
                      <a href="#!">에스프레소 마키아또</a>
                    </li>
                    <li>
                      <a href="#!">아메리카노</a>
                    </li>
                    <li>
                      <a href="#!">마키아또</a>
                    </li>
                    <li>
                      <a href="#!">카푸치노</a>
                    </li>
                    <li>
                      <a href="#!">라떼</a>
                    </li>
                    <li>
                      <a href="#!">모카</a>
                    </li>
                    <li>
                      <a href="#!">리스트레또 비안코</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">최상의 커피를 즐기는 법</a>
                    </li>
                    <li>
                      <a href="#!">커피 프레스</a>
                    </li>
                    <li>
                      <a href="#!">푸어 오버</a>
                    </li>
                    <li>
                      <a href="#!">아이스 푸어 오버</a>
                    </li>
                    <li>
                      <a href="#!">커피 메이커</a>
                    </li>
                    <li>
                      <a href="#!">리저브를 매장에서 다양하게 즐기는 법</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">커피 이야기</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 로스트 스팩트럼</a>
                    </li>
                    <li>
                      <a href="#!">최상의 아라비카 원두</a>
                    </li>
                    <li>
                      <a href="#!">한 잔의 커피가 완성되기까지</a>
                    </li>
                    <li>
                      <a href="#!">클로버&#174; 커피 추출 시스템</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 디카페인</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-footer">
                  <div className="Max1200">
                    <div className="footer-content">
                      <div className="txtBx top-txt">
                        <a href="#!">나와 어울리는 커피 찾기</a>
                        <p>
                          스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.
                        </p>
                      </div>
                      <div className="txtBx down-txt">
                        <a>최상의 커피를 즐기는 법</a>
                        <p>
                          여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#!" className="item">
                menu
              </a>
              <div className="nav-container">
                <div className="items">
                  <ul className="details">
                    <li className="first">
                      <a href="#!">음료</a>
                    </li>
                    <li>
                      <a href="#!">콜드 브루</a>
                    </li>
                    <li>
                      <a href="#!">브루드 커피</a>
                    </li>
                    <li>
                      <a href="#!">에스프레소</a>
                    </li>
                    <li>
                      <a href="#!">프라푸치노</a>
                    </li>
                    <li>
                      <a href="#!">블렌디드</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 피지오</a>
                    </li>
                    <li>
                      <a href="#!">티(티바나)</a>
                    </li>
                    <li>
                      <a href="#!">기타 제조 음료</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 주스(병음료)</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">푸드</a>
                    </li>
                    <li>
                      <a href="#!">베이커리</a>
                    </li>
                    <li>
                      <a href="#!">케이크</a>
                    </li>
                    <li>
                      <a href="#!">샌드위치 &amp; 샐러드</a>
                    </li>
                    <li>
                      <a href="#!">따듯한 푸드</a>
                    </li>
                    <li>
                      <a href="#!">과일 &amp; 요거트</a>
                    </li>
                    <li>
                      <a href="#!">스낵 &amp; 미니 디저트</a>
                    </li>
                    <li>
                      <a href="#!">아이스크림</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">상품</a>
                    </li>
                    <li>
                      <a href="#!">머그</a>
                    </li>
                    <li>
                      <a href="#!">글라스</a>
                    </li>
                    <li>
                      <a href="#!">플라스틱 텀블러</a>
                    </li>
                    <li>
                      <a href="#!">스테인리스 텀블러</a>
                    </li>
                    <li>
                      <a href="#!">보온병</a>
                    </li>
                    <li>
                      <a href="#!">액세서리</a>
                    </li>
                    <li>
                      <a href="#!">커피용품</a>
                    </li>
                    <li>
                      <a href="#!">패키지 티(티바나)</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 플래너</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">카드</a>
                    </li>
                    <li>
                      <a href="#!">실물카드</a>
                    </li>
                    <li>
                      <a href="#!">e-Gift 카드</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">메뉴 이야기</a>
                    </li>
                    <li>
                      <a href="#!">나이트로 콜드브루</a>
                    </li>
                    <li>
                      <a href="#!">콜드 브루</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 티바나</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-footer">
                  <div className="Max1200">
                    <div className="footer-content">
                      <div className="txtBx top-txt">
                        <a href="#!" className="new-item">
                          나이트로 콜드브루
                        </a>
                        <p>
                          나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과
                          부드러운 크림을 경험하세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#!" className="item">
                store
              </a>
              <div className="nav-container">
                <div className="items">
                  <ul className="details">
                    <li className="first">
                      <a href="#!">매장 찾기</a>
                    </li>
                    <li>
                      <a href="#!">퀵 검색</a>
                    </li>
                    <li>
                      <a href="#!">지역 검색</a>
                    </li>
                    <li>
                      <a href="#!">My 매장</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">드라이브 스루 매장</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">스타벅스 리저브™ 매장</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">커뮤니티 스토어 매장</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">매장 이야기</a>
                    </li>
                    <li>
                      <a href="#!">청담 스타</a>
                    </li>
                    <li>
                      <a href="#!">티바나 바 매장</a>
                    </li>
                    <li>
                      <a href="#!">파미에파크</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-footer">
                  <div className="Max1200">
                    <div className="footer-content">
                      <div className="txtBx top-txt">
                        <a href="#!">매장 찾기</a>
                        <p>보다 빠르게 매장을 찾아보세요.</p>
                      </div>
                      <div className="txtBx down-txt">
                        <a href="#!" className="new-item">
                          이대 R점
                        </a>
                        <p>
                          1호점 특화 MD와 티바나 티, 최고의 리저브 커피를
                          만나보세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#!" className="item">
                responsibility
              </a>
              <div className="nav-container">
                <div className="items">
                  <ul className="details">
                    <li className="first">
                      <a href="#!">사회 공헌 캠페인 소개</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">지역 사회 참여 활동</a>
                    </li>
                    <li>
                      <a href="#!">희망배달 캠페인</a>
                    </li>
                    <li>
                      <a href="#!">지능기부 카페 소식</a>
                    </li>
                    <li>
                      <a href="#!">커뮤니티 스토어</a>
                    </li>
                    <li>
                      <a href="#!">청년인재 양성</a>
                    </li>
                    <li>
                      <a href="#!">우리 농산물 사랑 캠페인</a>
                    </li>
                    <li>
                      <a href="#!">우리 문화 지키기</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">환경보호 활동</a>
                    </li>
                    <li>
                      <a href="#!">환경 발자국 줄이기</a>
                    </li>
                    <li>
                      <a href="#!">일회용 컵 없는 매장</a>
                    </li>
                    <li>
                      <a href="#!">커피 원두 재활용</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">윤리 구매</a>
                    </li>
                    <li>
                      <a href="#!">윤리적 원두 구매</a>
                    </li>
                    <li>
                      <a href="#!">공정무역 인증</a>
                    </li>
                    <li>
                      <a href="#!">커피 농가 지원 활동</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">글로벌 사회 공헌</a>
                    </li>
                    <li>
                      <a href="#!">윤리경영 보고서</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 제단</a>
                    </li>
                    <li>
                      <a href="#!">지구촌 봉사의 달</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-footer">
                  <div className="Max1200">
                    <div className="footer-content">
                      <div className="txtBx top-txt">
                        <a href="#!">커피원두 재활용</a>
                        <p>스타벅스 커피 원두를 재활용해 보세요.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#!" className="item">
                my starbucks rewards
              </a>
              <div className="nav-container">
                <div className="items">
                  <ul className="details">
                    <li className="first">
                      <a href="#!">마이 스타벅스 리워드</a>
                    </li>
                    <li>
                      <a href="#!">마이 스타벅스 리워드 소개</a>
                    </li>
                    <li>
                      <a href="#!">등급 및 혜택</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 별</a>
                    </li>
                    <li>
                      <a href="#!">자주하는 질문</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">스타벅스 카드</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 카드 소개</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 카드 갤러리</a>
                    </li>
                    <li>
                      <a href="#!">등록 및 조회</a>
                    </li>
                    <li>
                      <a href="#!">충전 및 이용안내</a>
                    </li>
                    <li>
                      <a href="#!">분실신고/환불신청</a>
                    </li>
                    <li>
                      <a href="#!">자주하는 질문</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">스타벅스 e-Gift Card</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 e-Gift Card 소개</a>
                    </li>
                    <li>
                      <a href="#!">이용안내</a>
                    </li>
                    <li>
                      <a href="#!">선물하기</a>
                    </li>
                    <li>
                      <a href="#!">자주하는 질문</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-footer">
                  <div className="Max1200">
                    <div className="footer-content">
                      <div className="txtBx top-txt">
                        <a href="#!">스타벅스 카드 등록하기</a>
                        <p>
                          카드 등록 후 리워드 서비스를 누리고 사용내역도
                          조회해보세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#!" className="item">
                whats new
              </a>
              <div className="nav-container">
                <div className="items">
                  <ul className="details">
                    <li className="first">
                      <a href="#!">프로모션&amp;이벤트</a>
                    </li>
                    <li>
                      <a href="#!">전체</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 카드</a>
                    </li>
                    <li>
                      <a href="#!">마이 스타벅스 리워드</a>
                    </li>
                    <li>
                      <a href="#!">온라인</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">새소식</a>
                    </li>
                    <li>
                      <a href="#!">전체</a>
                    </li>
                    <li>
                      <a href="#!">상품 출시</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스와 문화</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 사회공헌</a>
                    </li>
                    <li>
                      <a href="#!">스타벅스 카드출시</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">매장별 이벤트</a>
                    </li>
                    <li>
                      <a href="#!">일반 매장</a>
                    </li>
                    <li>
                      <a href="#!">신규 매장</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">공지사항</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="first">
                      <a href="#!">월페이퍼</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-footer">
                  <div className="Max1200">
                    <div className="footer-content">
                      <div className="txtBx top-txt">
                        <a href="#!">매장별 이벤트</a>
                        <p>
                          스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.
                        </p>
                      </div>
                      <div className="txtBx down-txt">
                        <a href="#!">월페이퍼</a>
                        <p>
                          매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를
                          더욱 가깝게 즐겨보세요!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <div className="header-clearfix"></div>
      <div className="wrap">
        <section className="sec1 banner">
          <div className="Max1200">
            <div className="aside-group" role="group">
              <aside>
                <a href="#!"></a>
              </aside>
            </div>
          </div>
          <div className="rubyimg">
            <div className="ruby1">
              <a href="#!">
                <img
                  src="https://image.istarbucks.co.kr/upload/common/img/main/2020/20_blossom_bev2_cup.png"
                  alt="체리블라썸 루비 라떼"
                />
              </a>
            </div>
            <div className="ruby2">
              <a href="#!">
                <img
                  src="https://image.istarbucks.co.kr/upload/common/img/main/2020/20_blossom_bev1_cup.png"
                  alt="루비 석류젤리 크림 프라푸치노"
                />
              </a>
            </div>
            <div className="ruby3">
              <a href="#!">
                <img
                  src="https://image.istarbucks.co.kr/upload/common/img/main/2020/20_blossom_bev3_cup.png"
                  alt="체리블라썸 루비 초콜릿"
                />
              </a>
            </div>
            <div className="rubytext">
              <a href="#!">
                <img
                  src="https://image.istarbucks.co.kr/upload/common/img/main/2020/20_blossom_emblem.png"
                  alt="WAKE UP YOUR BEAUTIFUL MOMENTS"
                />
              </a>
            </div>
            <button className="detail-btn">자세히 보기</button>
          </div>
        </section>
        <div className="notice">
          <div className="blacknotice">
            <h2>공지사항</h2>
            <a href="#!" id="blacknotice_a" ref={notice_a} target="_blank"></a>
            <button title="공지사항 더보기" aria-labelledby="notice_plus">
              <a href="#!" id="notice_plus"></a>
            </button>
          </div>
          <div className="whitenotice">
            <a onClick={toggle}>스타벅스 프로모션</a>
          </div>
        </div>
        <div id="promotion" className="promotion-banner" ref={promotion}>
          <div className="imgBx" id="left">
            <img
              src="https://image.istarbucks.co.kr/upload/banner/vcSrOj_20200320184427827.jpg"
              alt="체리블라썸 배너"
            />
            <button className="detail-btn">자세히 보기</button>
          </div>
          <div className="imgBx" id="center">
            <img
              src="https://image.istarbucks.co.kr/upload/banner/mwy7T1_20200213133515680.jpg"
              alt="예술을 사랑하는 마을, 엘살바도르 라 팔마 입안 가득 퍼지는 산뜻하고 달콤한 봄의 향기"
            />
            <button className="detail-btn">자세히 보기</button>
          </div>
          <div className="imgBx" id="right">
            <img
              src="https://image.istarbucks.co.kr/upload/banner/uX1xA2_20191227175905000.jpg"
              alt="회원 계정에 등록된 스타벅스 카드로 결제 시, 1만원달 별 1갤르 즉시 추가로 드립니다"
            />
            <button className="detail-btn">자세히 보기</button>
          </div>
          <div className="btn-group">
            <a className="leftbtn"></a>
            <a className="rightbtn"></a>
          </div>
          <div className="slide-ctr">
            <a className="">자동재생</a>
            <a className=""></a>
            <a className="active"></a>
            <a className=""></a>
          </div>
        </div>
        <div className="reward">
          <div className="star">
            <div className="Max1200">
              <div className="starimg">
                <img
                  src="https://image.istarbucks.co.kr/common/img/main/reward_logo.png"
                  alt="rewardText"
                />
              </div>
            </div>
          </div>
          <div className="starbg">
            <div className="bgimg">
              <div className="imgBx">
                <img
                  src="https://image.istarbucks.co.kr/common/img/main/reward_txt.png"
                  alt="스타벅스만의 특별한 혜택, 마이 스타벅스 리워드 스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해 보세요. 스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요."
                />
                <img
                  src="http://image.istarbucks.co.kr/common/img/main/egiftCard_txt.png"
                  alt="카드를 등록하여 마이 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료 쿠폰을 드립니다!"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="sec2 banner">
          <div className="Max1200">
            <div className="imgBx">
              <img
                src="http://image.istarbucks.co.kr/upload/common/img/main/2020/20_spring_bean.png"
                alt="스프링 시즌 블렌드"
              />
            </div>
            <div className="details">
              <img
                src="http://image.istarbucks.co.kr/upload/common/img/main/2020/20_spring_bean_tit.png"
                alt="스프링 시즌 블렌드"
              />
              <button className="detail-btn">자세히 보기</button>
            </div>
          </div>
        </section>
        <div className="small-banner">
          <div className="Max1200">
            <div className="imgBx">
              <img
                src="http://image.istarbucks.co.kr/upload/common/img/main/2020/20_spring_reserve_txt.png"
                alt="예술을 사랑하는 마을, 엘살바도르 라 팔마 입 안 가득 퍼지는 산뜻하고 달콤한 봄의 향기"
              />
              <button className="detail-btn">자세히 보기</button>
            </div>
          </div>
        </div>
        <section className="sec3 banner">
          <div className="Max1200-center">
            <div className="imgBx">
              <img
                src="https://www.starbucks.co.kr/common/img/main/fav_prod_txt01.png"
                alt="이미지가 너무 많아..."
              />
              <img
                src="https://www.starbucks.co.kr/common/img/main/fav_prod_txt02.png"
                alt="이미..지.."
              />
              <button className="detail-btn">자세히 보기</button>
            </div>
            <img
              src="http://image.istarbucks.co.kr/upload/common/img/main/2020/20_blossom_fav.png"
              alt="이미지.."
            />
          </div>
        </section>
        <section className="sec4 banner">
          <div className="Max1200-center">
            <div className="imgBx">
              <div className="front"></div>
              <div className="back"></div>
            </div>
          </div>
        </section>
        <section className="sec5 banner">
          <div className="Max1200">
            <div className="imgBx">
              <img
                src="https://www.starbucks.co.kr/common/img/main/store_exp_img02.png"
                alt="매장 사진"
              />
              <img
                src="https://www.starbucks.co.kr/common/img/main/store_exp_img01.png"
                alt="드라이브 스루"
              />
              <img
                src="https://www.starbucks.co.kr/common/img/main/store_exp_img03.png"
                alt="커피 원두 그림"
              />
              <img
                src="https://www.starbucks.co.kr/common/img/main/store_txt01.png"
                alt="스타벅스를 가까이에서 경험해보세요. 고객님과 가장 가까이 있는 매장을 찾아보세요!"
              />
              <img
                src="https://www.starbucks.co.kr/common/img/main/store_txt02.png"
                alt="차별화된 커피 경험을 누릴 수 있는 리저브 매장, 다양한 방법으로 편리하게 즐길 수 있는 드라이브 스루 매장, 함께해서 더 따뜻할수 있는 지역사회 소통 공간 커뮤니티 매장"
              />
              <img
                src="https://www.starbucks.co.kr/common/img/main/store_exp_img04.png"
                alt="매점 아이콘?"
              />
              <button className="detail-btn">자세히 보기</button>
            </div>
          </div>
        </section>
        <footer>
          <div className="Max1200-center">
            <ul className="footer-ul">
              <li className="footer-item">
                <a href="#!">COMPANY</a>
                <ul>
                  <li>
                    <a href="#!">한눈에 보기</a>
                  </li>
                  <li>
                    <a href="#!">스타벅스 사명</a>
                  </li>
                  <li>
                    <a href="#!">스타벅스 소개</a>
                  </li>
                  <li>
                    <a href="#!">국내 뉴스룸</a>
                  </li>
                  <li>
                    <a href="#!">세계의 스타벅스</a>
                  </li>
                  <li>
                    <a href="#!">글로벌 뉴스룸</a>
                  </li>
                </ul>
              </li>
              <li className="footer-item">
                <a href="#!">CORPORATE SALES</a>
                <ul>
                  <li>
                    <a href="#!">단체 및 기업 구매 안내</a>
                  </li>
                </ul>
              </li>
              <li className="footer-item">
                <a href="#!">PARTNERSHIP</a>
                <ul>
                  <li>
                    <a href="#!">신규 입점 제의</a>
                  </li>
                  <li>
                    <a href="#!">협력 고객사 등록신청</a>
                  </li>
                </ul>
              </li>
              <li className="footer-item">
                <a href="#!">ONLINE COMMUNITY</a>
                <ul>
                  <li>
                    <a href="#!">페이스북</a>
                  </li>
                  <li>
                    <a href="#!">트위터</a>
                  </li>
                  <li>
                    <a href="#!">유튜브</a>
                  </li>
                  <li>
                    <a href="#!">블로그</a>
                  </li>
                  <li>
                    <a href="#!">인스타그램</a>
                  </li>
                </ul>
              </li>
              <li className="footer-item">
                <a href="#!">RECRlT</a>
                <ul>
                  <li>
                    <a href="#!">처음 소개</a>
                  </li>
                  <li>
                    <a href="#!">처음 지원하기</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="imgBx">
            <div className="Max1200-center">
              <img
                src="http://image.istarbucks.co.kr/common/img/footer/footer_award17_01.jpg"
                alt="농식품 상생협력 활동 우수사레 기업"
              />
              <img
                src="http://image.istarbucks.co.kr/common/img/footer/footer_award17_02.jpg"
                alt="농식품 상생협력 활동 우수사레 기업"
              />
              <img
                src="http://image.istarbucks.co.kr/common/img/footer/footer_award17_03.jpg"
                alt="농식품 상생협력 활동 우수사레 기업"
              />
              <img
                src="http://image.istarbucks.co.kr/common/img/footer/footer_award17_04.jpg"
                alt="농식품 상생협력 활동 우수사레 기업"
              />
              <img
                src="http://image.istarbucks.co.kr/common/img/footer/footer_award17_05.jpg"
                alt="농식품 상생협력 활동 우수사레 기업"
              />
              <img
                src="http://image.istarbucks.co.kr/common/img/footer/footer_award17_06.jpg"
                alt="농식품 상생협력 활동 우수사레 기업"
              />
            </div>
          </div>
          <ul className="footer-service">
            <li>
              <a href="#!" className="ff1">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="#!">영상정보처리기기 운영관리 방침</a>
            </li>
            <li>
              <a href="#!">홈페이지 이용약관</a>
            </li>
            <li>
              <a href="#!">위치정보 이용약관</a>
            </li>
            <li>
              <a href="#!">스타벅스 카드 이용약관</a>
            </li>
            <li>
              <a href="#!">비회원 이용약관</a>
            </li>
            <li>
              <a href="#!">윤리경영 핫라인</a>
            </li>
          </ul>
          <div className="btnBx">
            <button>찾아오시는 길</button>
            <button>신규입접제의</button>
            <button>사이트맵</button>
          </div>
          <address>
            <ul>
              <li>
                사업자등록번호 : 201-81-21515 <span>ㅣ</span>{" "}
              </li>
              <li>
                (주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭{" "}
                <span>ㅣ</span>{" "}
              </li>
              <li>
                TEL : 1522-3232 <span>ㅣ</span>{" "}
              </li>
              <li>
                개인정보 책임자 : 장석현 <span>ㅣ</span>{" "}
              </li>
            </ul>
            <p className="copyright">
              ⓒ 2020 Starbucks Coffee Company. All Rights Reserved.
            </p>
          </address>
        </footer>
      </div>
    </div>
  );
}
