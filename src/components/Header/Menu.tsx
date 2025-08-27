
import React from "react";
import { content } from "../data/content";
import{ FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube,faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
  lang: "en" | "vi";
}

const Menu: React.FC<MenuProps> = ({ lang }) => {
  const menuItems = lang === "en" ? content.en.menu : content.vi.menu;
  return (
    <nav className="flex items-center justify-between bg-white px-8 min-h-[70px] shadow-sm">
      <div className="flex items-center">
        <img src="/public/vite.svg" alt="Logo" className="h-12" />
      </div>
      <ul className="flex gap-8 list-none m-0 p-0">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <a href="#" className="font-semibold text-gray-800 text-[17px] hover:text-blue-600 transition-colors">{item}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            className="border border-gray-200 rounded-full pl-9 pr-4 py-1 text-[15px] focus:border-blue-600 outline-none transition w-36"
            type="text"
            placeholder="Tìm kiếm..."
          />
        </div>
        <div className="flex gap-2">
          <a href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span><FontAwesomeIcon icon={faFacebook} /></span></a>
          <a href="#" title="Youtube" className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span><FontAwesomeIcon icon={faYoutube} /></span></a>
          <a href="#" title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span><FontAwesomeIcon icon={faLinkedinIn} /></span></a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
  