import React from "react";

export const WrapperCardSkelton = ({ children }) => <div className="w-11/12 max-w-[320px] py-2 mx-auto backdrop-blur-sm shadow-xl bg-white/30 rounded-lg gap-0.5 overflow-x-auto overflow-hidden">{children}</div>
export const WrapperGroupCardSkelton = ({ children }) => <div className="flex flex-row gap-1 lg:flex-wrap lg:justify-center lg:items-center lg:gap-3 overflow-x-auto overflow-hidden">{children}</div>
