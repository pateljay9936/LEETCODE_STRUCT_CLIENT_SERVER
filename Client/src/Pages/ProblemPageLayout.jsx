import React from "react";
import Nav from "../Components/Nav";

export default function ProblemPageLayout() {
    return (
        <div className="h-full">
            <Nav />
        <div className="flex h-full p-8 text-white">
            <div className="flex flex-col w-1/2 h-full border-spacing-1 border rounded-xl p-4">
                <h1 className="text-5xl font-bold mb-4 text-blue-400">Title</h1>
                <p className="mb-4">Description</p>
                <div className="mb-4">
                    <h2 className="text-3xl font-semibold mt-6 mb-4">Examples</h2>
                    {/* Replace this with your actual examples */}
                    <div className="flex flex-col gap-2 ">
                        <p>Example 1</p>
                        <p>Example 2</p>
                        <p>Example 3</p>
                    </div>
                </div>  
            </div>
            <hr className="border-l-4 border-r-4 border-transparent"/>
            <div className="flex w-1/2 h-full border-spacing-1 border rounded-xl p-4">
                <div className="flex flex-col w-full h-full ">
                    <h1 className="text-5xl font-semibold mb-4 text-blue-400">Solution</h1>
                    {/* Replace this with your actual solution */}
                    <div className="w-full h-full bg-black rounded-2xl border-4 border-spacing-1 border-white p-4 ">
                        <p className="mb-4 font-serif font-thin">Solution</p>
                        <div className="flex flex-col">
                        </div>
                    </div>
                    <div className="flex justify-end m-4 ">
                    <button className="border-4 p-2 rounded-xl font-extrabold bg-blue-400 text-black ">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}