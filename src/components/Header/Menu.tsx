
import React from "react";
import { content } from "../data/content";

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
        <input className="border border-gray-200 rounded-full px-4 py-1 text-[15px] focus:border-blue-600 outline-none transition" type="text" placeholder="Tìm kiếm..." />
        <div className="flex gap-2">
          <a href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span>f</span></a>
          <a href="#" title="Youtube" className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span>▶</span></a>
          <a href="#" title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span>in</span></a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
  