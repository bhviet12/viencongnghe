import React from "react";
import { content } from "../data/content"; // import từ file riêng
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone , faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface HeaderTopProps {
  lang: "en" | "vi";
  setLang: React.Dispatch<React.SetStateAction<"en" | "vi">>;
}

const HeaderTop: React.FC<HeaderTopProps> = ({ lang, setLang }) => {
  const text = lang === "en" ? content.en.headertop : content.vi.headertop;

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
          <div>
            <div className="flex items-center text-white">
              <span className="text-sky-700"><FontAwesomeIcon icon={faLocationDot} className="text-sky-700 pr-1.5" /></span>
              <p>{text.address}</p>
            </div>
            <div>
              <span></span>
              <a></a>
            </div>
            <div>
              <span></span>
              <p></p>
            </div>
          </div>
          <div>
          <button
            className={`px-3 py-1 rounded ${lang === "en" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => setLang("en")}
         >
            English
          </button>
          <button
            className={`px-3 py-1 rounded ${lang === "vi" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => setLang("vi")}
          >
            Tiếng Việt
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
