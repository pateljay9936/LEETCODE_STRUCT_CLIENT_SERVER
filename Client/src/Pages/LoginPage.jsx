import React, { useState } from "react";
import Nav from "../Components/Nav";    
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    
    return (
        <div className="h-full">
            <Nav />
            
        
            

            <div className='flex flex-col items-center justify-center h-[80%] mb-4 '>
                <div className='flex flex-col items-center gap-4'>
                    <input 
                        className="border border-slate-800 rounded-lg px-1 py-1 text-2xl" 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)} />
                    <input 
                        className="border border-slate-800 rounded-lg px-1 py-1 text-2xl" 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <div className='flex gap-2'>
                        <button className="border border-slate-800 rounded-lg bg-black text-white hover:bg-white hover:text-black px-2 py-1 mx-3 text-2xl"
                           
                           onClick={async(e) => {
                                const response = await fetch('http://localhost:3000/login', {
                                    method: "POST",
                                    body: JSON.stringify({
                                        username: username,
                                        password: password }),
                                    headers: {
                                        'Content-Type': 'application/json'  // Make sure to set the content type
                                        }  
                                    })
                                    const data = await response.json();
                                    console.log(data.token);
                                    localStorage.setItem('token', data.token); // Store the token in localStorage for login
                                    Navigate('/problemset/all');
                            }}>Login</button>

                        <button className="border border-slate-800 rounded-lg bg-black text-white hover:bg-white hover:text-black px-2 py-1 mx-3 text-2xl"
                            onClick={async(e) => {
                                const response = await fetch('http://localhost:3000/signup', {
                                    method: "POST",
                                    body: JSON.stringify({
                                        username: username,
                                        password: password }),
                                    headers: {
                                        'Content-Type': 'application/json'  // Make sure to set the content type
                                        }  
                                    })
                                    const data = await response.json();
                                    console.log(data);
                            }}>Signup</button>
                    </div>
                </div>
            </div>



        </div>
    )
}