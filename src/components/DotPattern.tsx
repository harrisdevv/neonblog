import React from 'react';

function DotPattern() {
  return (
    <div className="flex items-center justify-center opacity-80 absolute md:left-72 md:bottom-36 ">
      <div className="grid grid-cols-7 gap-5">
        {Array.from({ length: 21 }).map((_, index) => (
          <div key={index} className="w-1 h-1 bg-blue-500 rounded-full blur-none"></div>
        ))}
      </div>
    </div>
  );
}

export default DotPattern;
