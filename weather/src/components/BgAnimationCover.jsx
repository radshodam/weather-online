import { Children } from "react";

export default function BgAnimationCover() {
    return (
        <div className="flex bg-gray-200 min-h-screen flex-col items-center justify-center py-2 fixed top-0 left-0 w-full -z-[1]">
            <div className="w-full  flex items-center justify-center px-16">
                <div className="relative w-full">
                    <div className="absolute top-0 -left-4 w-48 h-48 md:w-80 md:h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                    <div className="absolute top-0 -right-4 w-48 h-48 md:w-80 md:h-80 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-48 h-48 md:w-80 md:h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="absolute -bottom-48 left-auto w-48 h-48 md:w-80 md:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="absolute -bottom-48 right-48 w-48 h-48 md:w-80 md:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="absolute -bottom-18 left-5 w-48 h-48 md:w-80 md:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="absolute bottom-8 left-1/2 w-48 h-48 md:w-96 md:h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>

                </div>
            </div>
        </div>
    )
}
