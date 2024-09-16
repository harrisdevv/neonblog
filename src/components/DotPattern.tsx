import React from 'react';

function DotPattern() {
  return (
    <div className="flex items-center justify-center opacity-80 absolute left-1/3 bottom-14">
      <div className="grid grid-cols-7 gap-5">
        {Array.from({ length: 21 }).map((_, index) => (
          <div key={index} className="w-1 h-1 bg-purple-200 rounded-full blur-none"></div>
        ))}
      </div>
    </div>
  );
}

export default DotPattern;
