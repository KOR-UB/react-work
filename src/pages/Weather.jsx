import React, {useEffect} from "react";
import "./weather.scss";
import "./weather-icons.css";
import "./weather-icons-wind.css";
import cityKR from "../json/cityKR.list.json";

export default function Weather() {
  useEffect(() => {
    console.log(cityKR);
    const API_KEY = "64bb4412769a73988b668782663bd5f7";
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date();
    const today = date.getDay();

    const $weather = document.getElementById("weather");
    const $forecast = $weather.querySelector(".forecast");
    const $currently = $weather.querySelector(".currently");
    const $currentlyBtn = $weather.querySelector(".currently_btn");
    const $citySelect = $weather.querySelector(".city_select");
    const $currentOption = $weather.querySelector(".current_option");

    const $weatherContents = $forecast.querySelectorAll(".weather_content");
    const $weatherIcons = $forecast.querySelectorAll(".fas.fa-spinner");
    const $temps = $forecast.querySelectorAll(".temp");
    const $dayNmaes = $forecast.querySelectorAll(".day_name");

    // 네비게이터를 가져올 경우
    function geoSuccess(position) {
      const {coords} = position;
      const lat = coords.latitude;
      const lng = coords.longitude;

      $currentlyBtn.addEventListener("click", () => {
        getWeatherAll(lat, lng);
      });

      function getJson(fetchStr) {
        return fetch(fetchStr)
          .then((jsonData) => jsonData.json())
          .catch((e) => console.error(e));
      }
      async function getWeatherAll(lat, lng) {
        $currentlyBtn.firstElementChild.className = "fas fa-spinner";
        $currentlyBtn.disabled = true;
        $citySelect.disabled = true;
        let weatherData;
        let cityData;
        let koreaCityData;

        weatherData = await getJson(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`
        );
        async function weatherRender(weatherData) {
          const {daily} = weatherData;
          $weatherContents.forEach((_, i) => {
            switch (daily[i].weather[0].main) {
              case "Thunderstorm":
                $weatherIcons[i].className = "wi wi-lightning";
                break;
              case "Rain":
              case "Drizzle":
                $weatherIcons[i].className = "wi wi-rain";
                break;
              case "Snow":
                $weatherIcons[i].className = "wi wi-snowflake-cold";
                break;
              case "Mist":
              case "Smoke":
              case "Haze":
              case "Dust":
              case "Fog":
              case "Sand":
              case "Dust":
              case "Ash":
              case "Squall":
              case "Tornado":
                $weatherIcons[i].className = "wi wi-fog";
                break;
              case "Clear":
                $weatherIcons[i].className = "wi wi-day-sunny";
                break;
              case "Clouds":
                $weatherIcons[i].className = "wi wi-cloudy";
                break;
              default:
                $weatherIcons[i].className = "wi wi-refresh";
            }
            $temps[
              i
            ].textContent = `${daily[i].temp.min}°C / ${daily[i].temp.max}°C`;
            $dayNmaes[i].textContent =
              week[
                today + i === 7
                  ? 0
                  : today + i === 8
                  ? 1
                  : today + i === 9
                  ? 2
                  : today + i === 10
                  ? 3
                  : today + i
              ];
            $dayNmaes[0].textContent = "Today";
          });
        }
        weatherRender(weatherData);
        cityData = await getJson(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        );
        async function cityRender(cityData) {
          $currently.textContent = cityData.name;
          $currentOption.textContent = cityData.name;
          $currentOption.selected = true;
        }
        cityRender(cityData);
        // koreaCityData = await getJson("/json/cityKR.list.json");
        $citySelect.addEventListener("change", async ({target}) => {
          const cityObj = cityKR.filter((city) => city.name === target.value);
          const {coord} = cityObj[0];
          const {lat, lon} = coord;
          $weatherIcons.forEach((icon) => {
            icon.className = "fas fa-spinner";
          });
          getWeatherAll(lat, lon);
        });
        $currentlyBtn.firstElementChild.className = "";
        $currentlyBtn.disabled = false;
        $citySelect.disabled = false;
      }
      getWeatherAll(lat, lng);
    }
    // 네비게이터를 가져오지 못할경우
    function geoError() {
      $weatherContents.forEach(
        (content) => (content.textContent = "위치 정보를 가져올 수 없습니다.")
      );
    }
    // 네비게이터 가져오기
    function askForCoords() {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
    // 초기 설정
    function init() {
      askForCoords();
    }
    init();
  }, []);
  useEffect(() => {
    // state
    let customStyles = [];

    // DOMs
    const $main = document.querySelector("main");
    const $date = document.querySelector("#clock .date");
    const $time = document.querySelector("#clock .time");
    const $comment = document.querySelector("#clock .comment");
    const $btnHoursView = document.querySelector(".hoursView_outerToggle");
    const $btnSettingOpen = document.querySelector(".btn_settingOpen");
    const $setting = document.getElementById("setting");
    const $font = document.getElementById("font");
    const $fontColor = document.getElementById("font_color");
    const $bgc = document.querySelector(".container_bgc");
    const $state = document.querySelector(".item_state");
    const $btnSettingClose = document.querySelector(".btn_settingClose");

    let Today = new Date();

    // FUNCTIONs
    // date
    const printDate = () => {
      const year = Today.getFullYear();
      const month = Today.getMonth() + 1;
      const date = Today.getDate();
      const dayNams = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const day = dayNams[Today.getDay()];

      // print date
      $date.textContent = `${year}.${month}.${date}.${day}`;
    };

    // comment
    const printComment = (hour) => {
      // comments
      const [morning, afternoon, evening, night] = [
        "Good morning",
        "Good afternoon",
        "Good evening",
        "Good night",
      ];

      if (hour < 6) {
        $comment.textContent = night;
      } else if (hour < 12) {
        $comment.textContent = morning;
      } else if (hour < 18) {
        $comment.textContent = afternoon;
      } else {
        $comment.textContent = evening;
      }
    };

    // date, comment init
    const renderInit = () => {
      printDate();
      printComment(Today.getHours());
    };

    // clock
    const clock = setInterval(() => {
      // time
      Today = new Date();
      let hour = Today.getHours();
      hour = hour < 10 ? `0${hour}` : hour;
      let minute = Today.getMinutes();
      minute = minute < 10 ? `0${minute}` : minute;
      let second = Today.getSeconds();
      second = second < 10 ? `0${second}` : second;
      const ampm = hour < 12 ? "AM" : "PM";
      // change comment
      const timePoints = ["06:00:00", "12:00:00", "18:00:00", "00:00:00"];

      // print time 24hour
      $time.textContent = `${hour}:${minute}:${second}`;

      // print comment
      timePoints.forEach((timePoint) => {
        if (timePoint === $time.textContent) printComment(hour);
      });

      if ($btnHoursView.classList.contains("isAct")) {
        hour = hour % 12 || 12;
        hour = hour < 10 ? `0${hour}` : hour;

        $time.textContent = `${ampm} ${hour}:${minute}:${second}`;
      }
    }, 100);

    // 클래스 토글
    const classToggle = (element, className) => {
      element.classList.toggle(className);
    };

    // 클래스 추가
    const classAdd = (element, className) => {
      element.classList.add(className);
    };

    // 클래스 제거
    const classRemove = (element, className) => {
      element.classList.remove(className);
    };

    // 요소 숨김
    const hide = (element) => {
      element.style.visibility = "hidden";
    };

    // 요소 드러냄
    const show = (element) => {
      element.style.visibility = "visible";
    };

    // 선택된 요소만 클래스 추가
    const multiClassToggle = (element, className, target) => {
      [...element.children].forEach(($item) =>
        $item.classList.toggle(className, $item === target)
      );
    };

    // tabindex 추가
    const getTabindex = () => {
      $btnHoursView.setAttribute("tabindex", 0);
      $font.setAttribute("tabindex", 0);
      $fontColor.setAttribute("tabindex", 0);
      [
        ...document.querySelectorAll(".container_bgc > label"),
      ].forEach(($label) => $label.setAttribute("tabindex", 0));
      document.querySelector(".btn_settingSave").setAttribute("tabindex", 0);
      document.querySelector(".btn_settingClear").setAttribute("tabindex", 0);
      $btnSettingClose.setAttribute("tabindex", 0);
    };

    // tabindex 제거
    const removeTabindex = () => {
      $btnHoursView.setAttribute("tabindex", -1);
      $font.setAttribute("tabindex", -1);
      $fontColor.setAttribute("tabindex", -1);
      [
        ...document.querySelectorAll(".container_bgc > label"),
      ].forEach(($label) => $label.setAttribute("tabindex", -1));
      document.querySelector(".btn_settingSave").setAttribute("tabindex", -1);
      document.querySelector(".btn_settingClear").setAttribute("tabindex", -1);
      $btnSettingClose.setAttribute("tabindex", -1);
    };

    // 스타일 적용
    const setStyle = () => {
      customStyles.forEach((style) => {
        $main.style[style.name] = style.value;
      });
    };

    // 스타일 상태정보 추가
    const addState = (name, value) => {
      if (customStyles.every((style) => style.name !== name)) {
        customStyles = [{name, value}, ...customStyles];
      } else {
        customStyles = customStyles.map((style) =>
          style.name === name ? {...style, value: value} : style
        );
      }
    };

    // 초기값 설정
    const setInitStyle = () => {
      if (!JSON.parse(localStorage.getItem("customStyles"))) return;
      const data = JSON.parse(localStorage.getItem("customStyles"));
      const font = data.filter((style) => style.name === "fontFamily");
      const color = data.filter((style) => style.name === "color");
      const viewClass = data.filter((style) => style.name === "viewClass");

      // 폰트 초기설정
      if (font.length) {
        const $selectedFont = document.querySelector(
          `[value = "${font[0].value}"]`
        );
        $selectedFont.setAttribute("selected", "");
      }
      // 폰트 색 초기설정
      if (color.length) $fontColor.setAttribute("value", `${color[0].value}`);
      // hours view 설정
      if (viewClass[0]) classAdd($btnHoursView, "isAct");
    };

    // 초기값 해제
    const clearInitStyle = () => {
      if (!JSON.parse(localStorage.getItem("customStyles"))) return;
      const data = JSON.parse(localStorage.getItem("customStyles"));
      const font = data.filter((style) => style.name === "fontFamily");
      const color = data.filter((style) => style.name === "color");
      const viewClass = data.filter((style) => style.name === "viewClass");

      // 폰트 초기값 해제
      if (font.length) {
        const $selectedFont = document.querySelector(
          `[value = "${font[0].value}"]`
        );
        $selectedFont.removeAttribute("selected");
      }
      // 폰트 색 초기값 해제
      if (color.length) $fontColor.setAttribute("value", "");
      // hours view 초기값 해제
      if (viewClass[0]) classRemove($btnHoursView, "isAct");
    };

    // 배경색 랜덤추출
    const getRandomBgc = () => {
      const str = "abcdef0123456789";
      let random = "";

      for (let i = 0; i < 6; i++) {
        const count = Math.floor(Math.random() * str.length);

        random += str[count];
      }
      return random;
    };

    // 키보드 움직임 제어
    const keyMove = (attr, keyCode) => {
      const $selectedBg = document.querySelector(`label[for="${attr}"]`);

      if (keyCode === 37 && $selectedBg.htmlFor !== "bgc_1")
        $selectedBg.previousElementSibling.previousElementSibling.focus();
      if (keyCode === 39 && $selectedBg.htmlFor !== "bgc_9")
        $selectedBg.nextElementSibling.nextElementSibling.focus();
    };

    // 로컬스토리지에 저장되어있는 스타일 가져오기
    const loadStyle = () => {
      const initStyle = [
        {name: "font", value: "Noto Sans"},
        {name: "color", value: "rgb(0, 0, 0)"},
        {name: "backgroundColor", value: `#${getRandomBgc()}`},
      ];

      customStyles =
        JSON.parse(localStorage.getItem("customStyles")) || initStyle;

      setInitStyle();
      setStyle();
    };

    // 로컬스토리지에 커스텀 스타일 저장
    const saveStyle = () => {
      if (!customStyles.length) return;
      localStorage.setItem("customStyles", JSON.stringify(customStyles));
    };

    // 로컬스토리지 및 현 스타일 제거
    const clearStyle = () => {
      clearInitStyle();
      $main.style = "";
      localStorage.clear();
    };

    // eventBinding
    // 윈도우 로딩이벤트

    renderInit();
    loadStyle();

    // setting 메뉴 열기
    $btnSettingOpen.onclick = () => {
      classToggle($setting, "active");
      hide($btnSettingOpen);
      getTabindex($setting);
      $btnHoursView.focus();
    };

    // hours view 클래스 추가 & 제거
    // 1. 마우스 이벤트
    $btnHoursView.onclick = () => {
      classToggle($btnHoursView, "isAct");
      addState(
        "viewClass",
        `${$btnHoursView.classList[$btnHoursView.classList.length - 1]}`
      );
    };
    // 2. 키보드 이벤트
    $btnHoursView.onkeyup = ({keyCode}) => {
      if (keyCode === 39) classAdd($btnHoursView, "isAct");
      else if (keyCode === 37) classRemove($btnHoursView, "isAct");
    };

    // 폰트 설정
    $font.onchange = ({target}) => {
      addState($font.name, target.value);
      setStyle();
    };

    // 폰트 색 설정
    $fontColor.oninput = ({target}) => {
      addState($fontColor.name, target.value);
      setStyle();
    };

    // 배경 색 설정
    // 1. 마우스 이벤트
    $bgc.onchange = ({target}) => {
      const bgColor = window.getComputedStyle(target).backgroundColor;

      multiClassToggle($bgc, "select", target.previousElementSibling);
      addState(target.name, bgColor);
      setStyle();
    };
    // 2. 키보드 이벤트
    $bgc.onkeyup = ({keyCode, target}) => {
      keyMove(target.htmlFor, keyCode);
      if (keyCode !== 13) return;

      const bgColor = window.getComputedStyle(target).backgroundColor;
      multiClassToggle($bgc, "select", target);
      addState(target.nextElementSibling.name, bgColor);
      setStyle();
    };

    // 커스텀 스타일 저장 & 해제
    $state.onclick = ({target}) => {
      if (target.matches(".btn_settingSave")) saveStyle();
      else if (target.matches(".btn_settingClear")) clearStyle();
    };

    // setting 메뉴 내부 포커스 제어
    $btnSettingClose.onkeydown = (e) => {
      if (e.keyCode !== 9) return;

      $btnHoursView.focus();
      e.preventDefault();
    };

    // setting 메뉴 닫기
    $btnSettingClose.onclick = () => {
      classToggle($setting, "active");
      show($btnSettingOpen);
      removeTabindex();
      $btnSettingOpen.focus();
    };
    return () => {
      clearInterval(clock);
    };
  }, []);
  return (
    <div className="weather-body">
      <main>
        <h1 className="a11y_hidden">기상예보 페이지</h1>
        <section id="clock" className="clock">
          <h2 className="a11y_hidden">현재 시간</h2>
          <div className="clock_wrap">
            <p className="comment"></p>
            <p className="time">
              <i className="fas fa-spinner spinner"></i>
            </p>
            <time className="date"></time>
          </div>
        </section>
        <section id="weather">
          <h2 className="a11y_hidden">날씨</h2>
          <div className="weather_wrap">
            <ul className="forecast">
              <li className="weather_content">
                <i className="fas fa-spinner" id="first"></i>
                <p className="temp"></p>
                <p className="day_name"></p>
              </li>
              <li className="weather_content">
                <i className="fas fa-spinner"></i>
                <p className="temp"></p>
                <p className="day_name"></p>
              </li>
              <li className="weather_content">
                <i className="fas fa-spinner"></i>
                <p className="temp"></p>
                <p className="day_name"></p>
              </li>
              <li className="weather_content">
                <i className="fas fa-spinner"></i>
                <p className="temp"></p>
                <p className="day_name"></p>
              </li>
              <li className="weather_content">
                <i className="fas fa-spinner"></i>
                <p className="temp"></p>
                <p className="day_name"></p>
              </li>
            </ul>
            <p className="currently"></p>
            <div className="city_container">
              <select className="city_select">
                <optgroup label="현재">
                  <option className="current_option"></option>
                </optgroup>
                <optgroup label="도">
                  <option>경기도</option>
                  <option>강원도</option>
                  <option>충청북도</option>
                  <option>충청남도</option>
                  <option>경상북도</option>
                  <option>경상남도</option>
                  <option>전라북도</option>
                  <option>전라남도</option>
                  <option>제주도</option>
                </optgroup>
                <optgroup label="시">
                  <option>서울</option>
                  <option>부산</option>
                  <option>대구</option>
                  <option>인천</option>
                  <option>광주</option>
                  <option>대전</option>
                  <option>울산</option>
                </optgroup>
              </select>
              <button className="currently_btn">
                현재 위치
                <i
                  className=""
                  style={{fontSize: 0.5 + "em", marginLeft: 15 + "px"}}
                ></i>
              </button>
            </div>
          </div>
        </section>
        <button type="button" className="btn_settingOpen fas fa-cog"></button>
        <section id="setting">
          <h2 className="a11y_hidden">환경설정</h2>
          <ul>
            <li className="item_hourseView">
              <p className="hoursView_heading">hours View</p>
              <span>24hours</span>
              <button className="hoursView_outerToggle" tabIndex="-1">
                <span className="hoursView_innerToggle"></span>
              </button>
              <span>12hours</span>
            </li>
            <li className="item_font">
              <p className="font_heading">font</p>
              <select id="font" name="fontFamily" tabIndex="-1">
                <option value="Noto Sans">Noto Sans</option>
                <option value="B612 Mono">B612 Mono</option>
                <option value="Cutive Mono">Cutive Mono</option>
                <option value="Roboto Mono">Roboto Mono</option>
              </select>
            </li>
            <li className="item_fontColor">
              <p className="fontColor_heading">font color</p>
              <input id="font_color" type="color" name="color" tabIndex="-1" />
            </li>
            <li className="item_backgroundColor">
              <p className="backgroundColor_heading">background color</p>
              <div className="container_bgc">
                <label
                  htmlFor="bgc_1"
                  tabIndex="-1"
                  aria-label="Classic Blue"
                ></label>
                <input id="bgc_1" type="radio" name="backgroundColor" />
                <label
                  htmlFor="bgc_2"
                  tabIndex="-1"
                  aria-label="Living Coral"
                ></label>
                <input id="bgc_2" type="radio" name="backgroundColor" />
                <label
                  htmlFor="bgc_3"
                  tabIndex="-1"
                  aria-label="Ultra Violet"
                ></label>
                <input id="bgc_3" type="radio" name="backgroundColor" />
                <label
                  htmlFor="bgc_4"
                  tabIndex="-1"
                  aria-label="Greenery"
                ></label>
                <input id="bgc_4" type="radio" name="backgroundColor" />
                <label
                  htmlFor="bgc_5"
                  tabIndex="-1"
                  aria-label="Serenity"
                ></label>
                <input id="bgc_5" type="radio" name="backgroundColor" />
                <label
                  htmlFor="bgc_6"
                  tabIndex="-1"
                  aria-label="Rose Quartz"
                ></label>
                <input id="bgc_6" type="radio" name="backgroundColor" />
                <label
                  htmlFor="bgc_7"
                  tabIndex="-1"
                  aria-label="Marsala"
                ></label>
                <input id="bgc_7" type="radio" name="backgroundColor" />
                <label
                  htmlFor="bgc_8"
                  tabIndex="-1"
                  aria-label="Radiant Orchid"
                ></label>
                <input id="bgc_8" type="radio" name="backgroundColor" />
                <label
                  htmlFor="bgc_9"
                  tabIndex="-1"
                  aria-label="Emerald"
                ></label>
                <input id="bgc_9" type="radio" name="backgroundColor" />
              </div>
            </li>
            <li className="item_state">
              <p className="state_heading">setting save &amp; reset</p>
              <button type="button" className="btn_settingSave" tabIndex="-1">
                save
              </button>
              <button type="button" className="btn_settingClear" tabIndex="-1">
                reset
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="btn_settingClose fas fa-times-circle"
            tabIndex="-1"
          ></button>
        </section>
      </main>
    </div>
  );
}
