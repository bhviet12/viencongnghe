
import React from "react";
import Section1 from "../Home/Section1";

interface HomeProps {
  lang: "en" | "vi";
  setLang: React.Dispatch<React.SetStateAction<"en" | "vi">>;
}

const Home: React.FC<HomeProps> = ({ lang, setLang }) => {
  return (
    <>
      <Section1 lang={lang} />
    </>
  );
};

export default Home;