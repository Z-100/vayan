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
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            setDarkMode(false)
        } else {
            document.documentElement.classList.add('dark');
            setDarkMode(true)
        }
    }

    return (
        <>
            <BrowserRouter>
                <div className="flex flex-row bg-neutral-primary dark:bg-light-neutral-primary">
                    <SideBar
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                    <div className="ml-16">
                        <Router />
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
