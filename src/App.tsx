import React from 'react';
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {Footer, Navbar, Router} from './components';
import {Analytics} from "@vercel/analytics/react";

function App() {

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen justify-between items-center">
                <Navbar/>
                <Router/>
                <Footer/>
            </div>
            <Analytics/>
        </BrowserRouter>
    );
}

export default App;
