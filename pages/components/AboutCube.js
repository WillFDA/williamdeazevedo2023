import React from 'react';

export default function AboutCube() {
  return (
    <div className='flex justify-start gap-8'>
    <div className="rounded-xl bg-gray-300 p-5 flex flex-col text-center h-[187px] justify-between">
        <span className="text-black text-2xl">2017</span>
        <p className="text-[#8D0C0C]">BAC PRO<br />Production<br />graphique</p>
      <span className="text-gray-600">Lycée<br />Claude Garamont</span>
    </div>
    <div className="rounded-xl bg-gray-300 px-7 py-4 flex flex-col text-center h-[187px] justify-between">
        <span className="text-black text-2xl">2019</span>
        <p className="text-[#8D0C0C]">BTS<br />ERPC</p>
      <span className="text-gray-600">Ecole<br />Estienne ESAIG</span>
    </div>
    <div className="rounded-xl bg-gray-300 px-6 py-5 flex flex-col text-center h-[187px] justify-between">
        <span className="text-black text-2xl">2023</span>
        <p className="text-[#8D0C0C]">Formations<br />Intégrateur Web</p>
      <span className="text-gray-600">Openclassrooms</span>
    </div>
    </div>
  );
}