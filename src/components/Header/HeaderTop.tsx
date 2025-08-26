import React from "react";
import { content } from "../data/content"; // import từ file riêng

interface HeaderTopProps {
  lang: "en" | "vi";
  setLang: React.Dispatch<React.SetStateAction<"en" | "vi">>;
}

const HeaderTop: React.FC<HeaderTopProps> = ({ lang, setLang }) => {
  const text = lang === "en" ? content.en.headertop : content.vi;

  return (
    <>
      <div className="flex flex-col gap-2 mt-4">
        <div>
          <h1>{text.advise}</h1>
          <p>{text.number}</p>
        </div>
        <div className="flex gap-4">
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
    </>
  );
};

export default HeaderTop;
