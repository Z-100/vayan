import React from 'react';
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {Footer, Navbar, Router} from './components';

function App() {

    return (
        <BrowserRouter>
            <Router/>
            <Navbar/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
