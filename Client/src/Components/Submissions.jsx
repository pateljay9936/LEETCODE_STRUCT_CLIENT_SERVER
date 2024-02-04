import Nav from "./Nav";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function submissions(props){
    const [Submission, setSubmission] = useState([]);
    const problemId = props.problemID;

    useEffect(() => {
        fetchSubmission();
    }, []);

    const fetchSubmission = async () => {
        try {
            const response = await fetch(`http://localhost:3000/submissions/${problemId}`, 
            { 
                method: "GET",
                headers: {
                    'authorization': localStorage.getItem('token'), // Send the token in the header for authentication
                }
            });
            const data = await response.json();
            
            setSubmission(data.submissions);
            console.log(data.submissions);
        } catch (error) {
            console.error('Error fetching submissions:', error);
        }
    };


    return(
        <div className="h-full w-full">
            <h2 className="text-3xl font-semibold my-3">Submissions</h2>
            <div className="grid grid-cols-3 gap-4 text-sm">
                {Submission.map((Submission) => (
                <RenderSubmission
                    key={Submission.submissionId}
                    submissionId={Submission.submissionId}
                    submissions={Submission.submissions}
                    status={Submission.Status}
                />
                ))}
            </div>
        </div>
    )
}

function RenderSubmission(props){
    const submissionId = props.submissionId;
    const submissions = props.submissions;
    const status = props.status;
    return(
                <div className="border-2 border-slate-800 rounded-xl p-4">
                    <p className=" font-semibold mb-4">Submission ID: {submissionId}</p>
                    <p className=" font-semibold mb-4">Submission: {submissions}</p>
                    <p className=" font-semibold mb-4">Status: {status}</p>
                </div> 
    )}