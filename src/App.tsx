import {
    Router,
    SideBar
} from './components';
import React, {useState} from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';

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
