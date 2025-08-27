import React from "react";
import "./HeaderTop.css"; // import file CSS riêng
import { content } from "../data/content"; // import từ file riêng
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone , faLocationDot, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

interface HeaderTopProps {
  lang: "en" | "vi";
  setLang: React.Dispatch<React.SetStateAction<"en" | "vi">>;
}

const HeaderTop: React.FC<HeaderTopProps> = ({ lang, setLang }) => {
  const text = lang === "en" ? content.en.headertop : content.vi.headertop;
  const LANGUAGES = [
    { code: "vn", label: "Tiếng Việt" },
    { code: "us", label: "English" },
  ];
  const [selected, setSelected] = React.useState(LANGUAGES[0]);

  const handleSelect = (langObj: { code: string; label: string }) => {
    setSelected(langObj);
    if (setLang) {
      setLang(langObj.code === "us" ? "en" : "vi");
    }
  };

  return (
    <>
      <div className="flex justify-center bg-[#001D2D] p-4 ">
        <div className="flex flex-row grow-1 justify-end items-center ">
          <h1 className="font-bold text-xl text-white pr-5">{text.advise}</h1>
          <div className="content-center">
             <span className="text-sky-700 pr-1.5" ><FontAwesomeIcon icon={faPhone} /></span>
             <a className="text-white">{text.number}</a>
          </div>
        </div>
        <div className="flex gap-4 grow-8 justify-center">
          <div className="flex gap-6 items-center">
            <div className="flex items-center">
              <span className="text-sky-700"><FontAwesomeIcon icon={faLocationDot} className="text-sky-700 pr-1.5" /></span>
              <p className="text-white">{text.address}</p>
            </div>
            <div>
              <span className="text-sky-700 pr-1.5"><FontAwesomeIcon icon={faEnvelope} /></span>
              <a className="text-white">{text.email}</a>
            </div>
            <div className="flex items-center">
              <span className="text-sky-700 pr-1.5"><FontAwesomeIcon icon={faClock} /></span>
              <p className="text-white">{text.workingHours}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white ">
            <div className="language-dropdown">
              <button className="dropdown-btn">
                <span className="lang-code">{selected.code}</span> {selected.label}
                <span className="arrow">▼</span>
              </button>
              <div className="dropdown-menu">
                {LANGUAGES.map((langObj) => (
                  <div
                    key={langObj.code}
                    className={`dropdown-item${selected.code === langObj.code ? " selected" : ""}`}
                    onClick={() => handleSelect(langObj)}
                  >
                    <span className="lang-code">{langObj.code}</span> {langObj.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
