import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav.js';
import CheckQuoteStatus from './CheckQuoteStatus.js';
import Footer from './Footer.js';
import Collect from './Collect.js';
import DropOff from './DropOff.js';
import Splash from './Splash.js';
import _404 from './_404.js';
import '../styles/app.scss';


export function App() {

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2200)
    }, [])

    
    return (
        <>
            {loading ?
                <Splash />
                :
                <div className="app__container">
                    <Nav />
                    <Router>
                        <Routes>
                            <Route path="/:id" element={<CheckQuoteStatus />} />
                            <Route path="/:id/collect" element={<Collect />} />
                            <Route path="/:id/dropoff" element={<DropOff />} />
                            <Route path="/" element={<_404 />} />
                        </Routes>
                    </Router>
                    <Footer />
                </div>
            }
        </>
    )
}