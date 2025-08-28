import React from "react";
import { content } from "../data/content";

interface Section1Props {
	lang: "en" | "vi";
}

const Section1: React.FC<Section1Props> = ({ lang }) => {
	const data = content[lang].home;
	return (
		<section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-300 to-black">
			{/* Nút trái */}
			<button className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg">
				&#60;
			</button>
			<div className="max-w-2xl mx-auto text-left">
				<h1 className="text-5xl font-bold text-blue-700 mb-8">{data.h1}</h1>
				<div className="space-y-4">
					<p className="text-lg text-gray-800">{data.p[0]}</p>
					<p className="text-lg text-gray-800">{data.p[1]}</p>
					<ul className="list-none pl-0 mt-2">
						{data.p.slice(2).map((line: string, idx: number) => (
							<li key={idx} className="text-lg text-gray-900 mb-1">{line}</li>
						))}
					</ul>
				</div>
				<div className="flex gap-4 mt-12">
					<button className="bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg hover:bg-blue-800 transition">{data.btn1}</button>
					<button className="bg-gray-900 text-white px-8 py-3 rounded font-semibold text-lg hover:bg-gray-800 transition">{data.btn2}</button>
				</div>
			</div>
			{/* Nút phải */}
			<button className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg">
				&#62;
			</button>
		</section>
	);
};

export default Section1;
