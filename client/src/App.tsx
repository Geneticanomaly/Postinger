import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './components/RegisterForm';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';
import { Theme, ThemeContext } from './context/themeContext.ts';

function App() {
    const [theme, setTheme] = useState<Theme>('dark');
    return (
        <>
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                    </Routes>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
