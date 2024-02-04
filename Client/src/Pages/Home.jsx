import React from "react";
import Nav from "../Components/Nav";

export default function Home() {
    return (
        <div className="h-full w-full items-center">
            {<Nav />}
            <div className=" h-full w-full text-7xl text-white flex items-center justify-center">
                <h1 className="text-center h-[40%]">Welcome to LEETCODE!</h1>
            </div>
        </div>
    )
}