import React, {useState} from 'react';
import './App.css'
import {
    BrowserRouter,
} from 'react-router-dom';
import {
    Router,
    SideBar
} from './components';

function App() {

    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

    return (
        <>
            <BrowserRouter>
                <SideBar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <Router/>
            </BrowserRouter>
        </>
    );
}

export default App;
