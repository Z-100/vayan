import React from 'react';
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {Footer, Navbar, Router, ScrollToTop} from './components';
import {inject} from "@vercel/analytics";
import {BackgroundProvider} from "./components/background/BackgroundProvider";

inject();

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <div className="flex flex-col min-h-screen justify-between items-center">
                <Navbar/>
                <BackgroundProvider/>
                <Router/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
