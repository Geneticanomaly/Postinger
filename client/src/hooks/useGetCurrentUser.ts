import { useEffect } from 'react';
import { useUserDispatch, useUserValue } from '../context/userContext/useUserContext';
import userServices from '../services/user';
import { useNavigate } from 'react-router-dom';

export const useGetCurrentUser = () => {
    const navigate = useNavigate();
    const user = useUserValue();
    const userDispatch = useUserDispatch();

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const res = await userServices.getCurrentUser();
                const backgroundImage = res.backgroundImage;
                userDispatch({
                    type: 'SET',
                    payload: {
                        ...res,
                        backgroundImage: {
                            mimetype: backgroundImage ? backgroundImage.mimetype : null,
                            buffer: backgroundImage ? backgroundImage.buffer : null,
                        },
                    },
                });
                // console.log('user', );
            } catch (e: unknown) {
                console.log(e);
                navigate('/login');
            }
        };
        if (!user) getCurrentUser();
    }, [navigate, user, userDispatch]);
};
