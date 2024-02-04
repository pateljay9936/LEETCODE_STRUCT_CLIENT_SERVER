import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import { useNavigate } from "react-router-dom";

const problems1 = [
    { number: "200", title: "Bitwise AND of Numbers Range", difficulty: "Medium", acceptance: "42%" },
    { number: "201", title: "Bitwise AND of Numbers Range", difficulty: "Medium", acceptance: "32%" },
    { number: "202", title: "Happy Number", difficulty: "Easy", acceptance: "54.9%" },
    { number: "203", title: "Remove Linked List Elements", difficulty: "Hard", acceptance: "42%" },
    { number: "204", title: "Count Primes", difficulty: "Easy", acceptance: "30%" },
    { number: "205", title: "Isomorphic Strings", difficulty: "Medium", acceptance: "39%" },
    { number: "206", title: "Reverse Linked List", difficulty: "Hard", acceptance: "60%" },
    { number: "207", title: "Course Schedule", difficulty: "Medium", acceptance: "42%" },
    // Add more problems here
];

const problems2 = [
    { number: "208", title: "Implement Trie (Prefix Tree)", difficulty: "Hard", acceptance: "35%" },
    { number: "209", title: "Minimum Size Subarray Sum", difficulty: "Medium", acceptance: "48%" },
    { number: "210", title: "Course Schedule II", difficulty: "Medium", acceptance: "37%" },
    { number: "211", title: "Add and Search Word - Data structure design", difficulty: "Hard", acceptance: "32%" },
    { number: "212", title: "Word Search II", difficulty: "Hard", acceptance: "26%" },
    { number: "213", title: "House Robber II", difficulty: "Medium", acceptance: "36%" },
    { number: "214", title: "Shortest Palindrome", difficulty: "Hard", acceptance: "29%" },
    { number: "215", title: "Kth Largest Element in an Array", difficulty: "Medium", acceptance: "51%" },
    // Add more problems here
];

function ProblemSetPage() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetchProblems();
    }, []);

    const fetchProblems = async () => {
        try {
            const response = await fetch('http://localhost:3000/problemset/all', { method: "GET" });
            const data = await response.json();
            setProblems(data.problems);
        } catch (error) {
            console.error('Error fetching problems:', error);
        }
    };

    // rest of your code


    return (
    <div className=''>
        
        <Nav />
        
        
        <div className='h-full w-full flex flex-col justify-center items-center'>
            {/* <h1 className='text-blue-400 text-6xl font-bold justify-center mt-6'>Leetcode</h1> */}
            
            {/* <div className='mt-8'>
                <button className="px-2 m-4 border-2 border-blue-700 rounded-lg bg-slate-300 hover:bg-blue-700" onClick={() => {
                    setProblems(problems => [...problems1]);
                }}>1</button>

                <button className="px-2 m-4 border-2 border-blue-700 rounded-lg bg-slate-300 hover:bg-blue-700" onClick={() => {
                    setProblems(problems => [...problems2]);
                }}>2</button>
            </div> */}
            <div className='w-80% mx-auto bg-gray-200 p-4 rounded-md shadow-md my-12'>
                <table className='bg-slate-400 w-full table-auto border-black border-spacing-1 border-2 min-w-96 h-48 text-center'>
                    <thead>
                    <tr className=''>{/* padding for the table-header given here */}
                        <th className=' w-5% border p-3 border-slate-800 px-8'>No.</th>  
                        <th className=' w-55% border  border-slate-800 px-96'>Problem</th>
                        <th className=' w-20% border  border-slate-800 px-24'>Acceptance</th>
                        <th className=' w-20% border  border-slate-800 px-24'>Difficulty</th>
                    </tr>
                    </thead>
                    <tbody >
                    {problems.map((problem) => (
                        <ProblemStatement
                            key={problem.problemId}
                            number={problem.problemId}
                            title={problem.title}
                            acceptance={problem.acceptance}
                            difficulty={problem.difficulty}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}


// A demo component
function ProblemStatement(props) {
    const number = props.number;
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    const handleClick = () => {
        const protocol = window.location.protocol;  // http or https
        const currentHost = window.location.host;   // localhost:(port)
        const newUrl = `${protocol}//${currentHost}/problem/${number}`;
        window.location.href = newUrl;   
        // console.log(`newUrl: ${newUrl}`);
    };

    return (<tr className='' onClick={handleClick}>
                <td className='p-2 w-5% border border-slate-600'>{number}</td>
                <td className='w-55% border border-slate-600'>{title}</td>
                <td className='w-20% border border-slate-600'>{acceptance}</td>
                <td className='w-20% border border-slate-600'>{difficulty}</td>
            </tr>)
}
export default ProblemSetPage;