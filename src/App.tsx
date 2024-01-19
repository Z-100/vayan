import React from 'react';
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {Router, SideBar} from './components';

function App() {

    return (
        <BrowserRouter>
            <div className="flex flex-row bg-neutral-primary dark:bg-light-neutral-primary">
                <SideBar/>
                <div className="ml-16">
                    <Router/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
