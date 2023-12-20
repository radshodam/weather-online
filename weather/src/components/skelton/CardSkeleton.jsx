import React from "react";

export const CardSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-left bg-gray-300 h-6 w-40 mb-4"></h2>
            <div className="w-40 h-40 bg-gray-300 rounded-full mb-4"></div>
            <div className="flex justify-center space-x-5 items-center">
                <p className="text-4xl bg-gray-300 h-8 w-20"></p>
                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    );
}

