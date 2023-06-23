import {
    Header,
    AboutPage,
    WelcomePage,
    PortfolioPage,
    ContactPage,
} from './components';
import React from 'react';

function App() {
    return (
        <>
            <Header/>

            <WelcomePage/>
            <AboutPage/>
            <PortfolioPage/>

            <ContactPage/>
        </>
    );
}

export default App;
