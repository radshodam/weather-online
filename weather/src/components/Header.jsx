import React from "react";
import LogoWhite from "../../src/assets/images/logo/logo-white.png";

export default function Header() {
    return <div className="full bg-gradient-to-r from-sky-700 to-sky-600/70 ">
        <div className="max-w-9xl mx-auto flex justify-between py-2">
            <div>
                <img src={LogoWhite} className="w-32 py-1 px-2 h-auto" />
            </div>
            {/* //sign up and navbar */}
            <ul>
                <li></li>
            </ul>
        </div>
    </div>;
}
