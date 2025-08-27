import React, { useState } from "react";
import HeaderTop from "../Header/HeaderTop";
import Menu from "../Header/Menu";

const Head: React.FC = () => {
  const [lang, setLang] = useState<"en" | "vi">("en");

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
