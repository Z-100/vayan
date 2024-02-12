import React from 'react';
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {Footer, Navbar, Router} from './components';

function App() {

    return (
        <BrowserRouter>
            <div className="flex-col">
                <Navbar/>
                <Router/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
