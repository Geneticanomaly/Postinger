import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useIsAuthenticated = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = async () => {
            try {
                const res = await axios.get('http://localhost:3003/v1/auth/isAuthenticated', {
                    withCredentials: true,
                });

                if (res.data.redirect) {
                    navigate(res.data.redirect);
                }
            } catch (error) {
                console.error('Not authenticated', error);
            }
        };

        isAuthenticated();
    }, [navigate]);
};

export default useIsAuthenticated;
