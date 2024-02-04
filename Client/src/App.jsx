import LoginPage from "./Pages/LoginPage"
import ProblemPageLayout from "./Pages/ProblemPageLayout"
import ProblemPage from "./Pages/ProblemPage"
import ProblemSetPage from "./Pages/ProblemSetPage"
import Submission from "./Components/Submissions"
import Home from "./Pages/Home"
import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


export default function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/problemset/all" element={<ProblemSetPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/problemLayout" element={<ProblemPageLayout />} />
                <Route path="/problem/:id" element={<ProblemPage />} />
            </Routes>
        </Router>
    );
}
