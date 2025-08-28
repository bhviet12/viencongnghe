
import React from "react";
import HeaderTop from "../Header/HeaderTop";
import Menu from "../Header/Menu";

interface HeadProps {
  lang: "en" | "vi";
  setLang: React.Dispatch<React.SetStateAction<"en" | "vi">>;
}

const Head: React.FC<HeadProps> = ({ lang, setLang }) => {
  return (
    <header>
      <div className="">
        <HeaderTop lang={lang} setLang={setLang} />
        <Menu lang={lang}/>
      </div>
    </header>
  );
};

export default Head;
