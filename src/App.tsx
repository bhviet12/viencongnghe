import React, { useState } from "react";
import Head from './components/pages/Head';
import Home from './components/pages/Home';

function App() {
  const [lang, setLang] = useState<"en" | "vi">("vi");
  return (
    <>
      <div className="">
        <Head lang={lang} setLang={setLang} />
        <Home lang={lang} setLang={setLang} />
      </div>
    </>
  );
}

export default App;
