import { useEffect } from 'react';
import { useUserDispatch, useUserValue } from '../context/userContext/useUserContext';

export const useGetCurrentUser = () => {
    const user = useUserValue();
    const userDispatch = useUserDispatch();

    useEffect(() => {
        const getCurrentUser = async () => {
            const loggedUserJSON = window.localStorage.getItem('user');
            if (loggedUserJSON) {
                const user = JSON.parse(loggedUserJSON);
                userDispatch({ type: 'SET', payload: user });
            }
        };
        if (!user) getCurrentUser();
    }, [user, userDispatch]);
};
