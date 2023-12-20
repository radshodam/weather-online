import React from "react";
import LogoWhite from "../../src/assets/images/logo/logo-white.png";
import SearchComponent from "./search/SearchComponent";

export default function Header() {
    return <div className="full bg-gradient-to-r backdrop:blur-2xl shadow-xl from-sky-700/50 to-sky-600/30 ">
        <div className="max-w-9xl mx-auto flex justify-between py-4">
            <div>
                <img src={LogoWhite} className="w-32 py-1 px-2 h-auto" />
            </div>
            <SearchComponent />
        </div>
    </div>;
}
