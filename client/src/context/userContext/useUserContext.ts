import { useContext } from 'react';
import { UserContext } from './UserContext';
import { User } from '../../types';

type UserState = User | undefined;

type UserAction = { type: 'SET'; payload: User } | { type: 'CLEAR' };

export const useUserValue = (): UserState => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserValue must be used within a UserContextProvider');
    }
    return context[0];
};

export const useUserDispatch = (): React.Dispatch<UserAction> => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserDispatch must be used within a UserContextProvider');
    }
    return context[1];
};
