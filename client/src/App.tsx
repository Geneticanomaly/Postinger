import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import { useState } from 'react';
import { Theme, ThemeContext } from './context/themeContext.ts';
import './index.css';
import Authentication from './pages/Authentication.tsx';
import PostStatus from './pages/PostStatus.tsx';
import Profile from './pages/Profile.tsx';

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
                        <Route path="/register" element={<Authentication />} />
                    </Routes>
                    <Routes>
                        <Route path="/login" element={<Authentication />} />
                    </Routes>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path="/:username" element={<Profile />} />
                    </Routes>
                    <Routes>
                        <Route path="/:username/status/:postId" element={<PostStatus />} />
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
