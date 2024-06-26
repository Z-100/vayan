import React from 'react';
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {Footer, Navbar, Router, ScrollToTop} from './components';
import {inject} from "@vercel/analytics";

inject();

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <div className="flex flex-col min-h-screen justify-between items-center">
                <Navbar/>
                <Router/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
