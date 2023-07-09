import {
    WelcomePage,
    SideBar,
    AboutPage,
    ContactPage,
} from './components';
import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <SideBar />
                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/latest" element={<WelcomePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
