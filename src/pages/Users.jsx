import React from "react";

export default function Users({ icons, title, description }) {
  return (
    <div className="min-w-[230px] flex-wrap z-[999] h-full   grid grid-cols-2  gap-1 mb-1 bg-slate-50 pr-3 rounded-lg  hover:bg-zinc-300  ] transition  duration-75 border border-gray-50">
      <div className=" flex items-center ml-3  justify-start p-1 ">
        {" "}
        {icons}{" "}
      </div>
      <div className="grid grid-flow-row leading-4 text-gray-700 whitespace-normal font-raleway -ml-7   ">
        <p className=" col-span-1 text-sm font-semibold flex-wrap sm:text-base">
          {" "}
          {title}
        </p>
        <p className="text-xs text-gray-500 font-manrope mb-1">
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
}
