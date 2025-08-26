import React, { useState } from "react";
import HeaderTop from "../Header/HeaderTop";

const Head: React.FC = () => {
  const [lang, setLang] = useState<"en" | "vi">("en");

  return (
    <header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <HeaderTop lang={lang} setLang={setLang} />
      </div>
    </header>
  );
};

export default Head;
