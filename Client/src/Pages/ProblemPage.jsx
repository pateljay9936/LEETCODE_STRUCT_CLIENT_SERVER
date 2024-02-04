import React from "react";
import Nav from "../Components/Nav";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import Submissions from "../Components/Submissions";

export default function ProblemPage() {
    const { id } = useParams();
    // Now you can use the id to fetch the problem data
    const [solution, setSolution] = useState([]); // This is the solution that the user types in
    const [problem, setProblem] = useState([]);
    const [shouldRerender, setShouldRerender] = useState(false);
    useEffect(() => {
        fetchProblem();
    }, []);

    const fetchProblem = async () => {
        try {
            const response = await fetch(`http://localhost:3000/problem/${id}`, { method: "GET" });
            const data = await response.json();
            setProblem(data);
        } catch (error) {
            console.error('Error fetching problem:', error);
        }
    };


    return(
        <div className="h-screen">
        <Nav />
    <div className="flex p-8 text-white ">
        <div className="flex flex-col w-1/2 h-full border-spacing-1 border rounded-xl p-4">
            <h1 className="text-5xl font-bold mb-4 text-blue-400">{problem.title}</h1>
            <p className="mb-4">{problem.description}</p>
            <div className="mb-3">
                <div className="border-spacing-1 border rounded-xl px-2">
                    <h2 className="text-3xl font-semibold mt-6 mb-4">Examples</h2>
                    {/* Replace this with your actual examples */}
                    <div className="grid grid-cols-3 gap-6 m-4  ">
                        <div><p>{problem.exampleIn1}</p><p>output: {problem.exampleOut1}</p><br /></div>
                        <div><p>{problem.exampleIn2}</p><p>output: {problem.exampleOut2}</p><br /></div>
                        <div><p>{problem.exampleIn3} </p><p>output: {problem.exampleOut3}</p><br /></div>
                    </div>
                </div>
                <div className="border-spacing-1 border rounded-xl px-2 mt-2">
                <Submissions
                    problemID={id}
                />
                </div>
            </div>  
        </div>
        <hr className="border-l-4 border-r-4 border-transparent"/>
        <div className="flex w-1/2 h-full border-spacing-1 border rounded-xl p-4">
            <div className="flex flex-col w-full h-full ">
                <h1 className="text-5xl font-semibold mb-4 text-blue-400">Solution</h1>
                {/* Replace this with your actual solution */}
                <div className="w-full h-full bg-black rounded-2xl border-4 border-spacing-1 border-white p-4 ">
                    <textarea
                        onChange={(e) => setSolution(e.target.value)}
                        value={solution} 
                        className="mb-4 font-mono font-medium w-full h-full border rounded-lg p-2 text-slate-700 " 
                        placeholder="Write your solution here">
                    </textarea>
                    <div className="flex flex-col">
                    </div>
                </div>
                <div className="flex justify-end m-4 ">
                    <button 
                        className="border-4 p-2 rounded-xl font-extrabold bg-blue-400 text-black "
                        onClick={
                            async(e) => {
                                const response = await fetch(`http://localhost:3000/submission`, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        problemId: id,
                                        submissions: solution,
                                    }),
                                    headers: {
                                        'authorization': localStorage.getItem('token'), // Send the token in the header for authentication
                                        'Content-Type': 'application/json'  // Make sure to set the content type
                                        }  
                                    })
                                    const data = await response.json();
                                    console.log(data);
                                    // setShouldRerender(prev => !prev);
                            }
                        }
                        >SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    )
}
