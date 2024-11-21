import React, { createContext, useReducer, ReactNode } from 'react';
import { UserContextValueType } from '../../types';

type UserState = UserContextValueType | null;

type UserAction = { type: 'SET'; payload: UserContextValueType } | { type: 'CLEAR' };

type UserContextType = [UserState, React.Dispatch<UserAction>];

const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'SET':
            return action.payload;
        case 'CLEAR':
            return null;
        default:
            return state;
    }
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const [user, userDispatch] = useReducer(userReducer, null); // Initialize state as null

    return (
        <UserContext.Provider value={[user, userDispatch]}>{props.children}</UserContext.Provider>
    );
};
