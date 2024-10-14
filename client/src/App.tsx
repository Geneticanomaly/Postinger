import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/ksdjlk" element={<LandingPage />} />
                </Routes>
                <Routes>
                    <Route path="/" element={<Register />} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
