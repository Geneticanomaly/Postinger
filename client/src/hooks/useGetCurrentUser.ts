import { useEffect } from 'react';
import { useUserDispatch, useUserValue } from '../context/userContext/useUserContext';
import userServices from '../services/user';

export const useGetCurrentUser = () => {
    const user = useUserValue();
    const userDispatch = useUserDispatch();

    useEffect(() => {
        const getCurrentUser = async () => {
            const current_user = await userServices.getCurrentUser();

            if (current_user) {
                userDispatch({ type: 'SET', payload: current_user });
            }
        };
        if (!user) getCurrentUser();
    }, [user, userDispatch]);
};
