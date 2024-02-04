import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Nav() {
    const location = useLocation();
    const Navigate = useNavigate();
    const [UserID, setUserId] = useState("");
    useEffect(() => {
        fetchUserId();
    }, []);

    const fetchUserId = async () => {
        try {
            const response = await fetch('http://localhost:3000/currentUser', 
            {   method: "GET", 
                headers: {
                    'authorization': localStorage.getItem('token'), // Send the token in the header for authentication
                    }});
            const data = await response.json();
            setUserId(data.userId);
        } catch (error) {
            console.error('Error fetching userID:', error);
        }
    };

    
    const Profile_click = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const dynamicRoute = "/";
            const newPath = `${dynamicRoute}`;
            console.log("newPath:", newPath )
            Navigate(newPath);  // Navigate to the new path, it will add new path to the current path nd render the page
        } else {
            const dynamicRoute = "/login";
            const newPath = `${dynamicRoute}`;
            console.log("newPath:", newPath )
            Navigate(newPath);
        }
    };

    
    if (location.pathname == '/login') {
        return (
            <div className="flex justify-between">
            <div>
                <h1 className="text-white text-4xl" onClick={() => Navigate('/problemset/all')}>
                    <span className="text-blue-400">L</span>eet<span className="text-blue-400">C</span>ode
                </h1>
            </div>

        </div>
        );
    }


    return (
        <div className="flex justify-between">
            <div>
                <h1 className="text-white text-4xl" onClick={() => Navigate('/problemset/all')}>
                    <span className="text-blue-400">L</span>eet<span className="text-blue-400">C</span>ode
                </h1>
            </div>
            <div className="flex">
            <LogoutButton />
                <div onClick={Profile_click} className="flex p-1 rounded-full transition duration-4000 ease-in-out hover:bg-gray-700 shadow-inner">
                    <h1 className="text-3xl text-white text-right mx-1">Profile: User#{UserID}</h1> 
                    <div className="rounded-full border border-white m-1"> 
                        <img className="rounded-full" src="https://lh3.google.com/u/0/ogw/ANLem4aaZ2S8fMiyIE5s_Zagx4Hn2gpkNDXCbA2XIpub=s32-c-mo" srcSet="https://lh3.google.com/u/0/ogw/ANLem4aaZ2S8fMiyIE5s_Zagx4Hn2gpkNDXCbA2XIpub=s32-c-mo 1x, https://lh3.google.com/u/0/ogw/ANLem4aaZ2S8fMiyIE5s_Zagx4Hn2gpkNDXCbA2XIpub=s64-c-mo 2x " alt="" aria-hidden="true" data-noaft=""></img>
                    </div>
                </div>
            </div>

        </div>
    )

}


function LogoutButton() {
    const [shouldRerender, setShouldRerender] = useState(false);
    const token = localStorage.getItem("token");
    const LogoutTokenRemover = () => {
        localStorage.removeItem("token");
        console.log("logout and remove the tokem from localStorage")
        setShouldRerender(prev => !prev); // Toggle shouldRerender to force a re-render
    };

    if (token) {
        return (
            <div onClick={LogoutTokenRemover} className="flex p-1 rounded-full transition duration-4000 ease-in-out hover:bg-gray-700">
                <h1 className="text-3xl text-white text-right mx-1">Logout</h1>    
            </div>
        );
    } else {
        return null;
    }
}