import React from 'react';
import MultiLineClamp from 'react-multiline-clamp';

export default function AboutCube({ year, text, school }) {
  return (
    <div className="rounded-xl bg-[#060606] p-5 flex flex-col text-center h-[187px] justify-between border border-white/10">
      <span className="text-white text-2xl">{year}</span>
      <MultiLineClamp className="text-[#8D0C0C]" lines={3}>
        {text}
      </MultiLineClamp>
      <MultiLineClamp className="text-gray-600" lines={2}>
        {school}
      </MultiLineClamp>
    </div>
  );
}