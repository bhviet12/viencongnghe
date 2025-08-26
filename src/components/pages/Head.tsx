import React, { useState } from "react";
import HeaderTop from "../Header/HeaderTop";

const Head: React.FC = () => {
  const [lang, setLang] = useState<"en" | "vi">("en");

  return (
    <header>
      <div className="">
        <HeaderTop lang={lang} setLang={setLang} />
      </div>
    </header>
  );
};

export default Head;
