import React from 'react';
import { useReducer } from 'react';
import { actionTypes } from '../helpers/actionTypes';

const ItemContext = React.createContext();

const initialDiaryState = [
    {
        id: -1,
        title: 'This is my first item',
        content: 'blah blah blah... lots of waffle',
        date: new Date()
    },
    {
        id: -2,
        title: 'This is my second item',
        content: 'lets get back to some hardcore coding!!!',
        date: new Date()
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.create:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                    date: new Date() 
                }
            ];
        case actionTypes.update:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return item;
                }
            });
        case actionTypes.delete:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    };
}

export const ItemProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialDiaryState);
    const addItem = (title, content, callback) => {
        dispatch({type: actionTypes.create, payload: {title, content}});
        if (callback) callback();
    }
    const deleteItem = (id, callback) => {
        dispatch({type: actionTypes.delete, payload: {id: id}});
        if (callback) callback();
    }
    const updateItem = (id, title, content, date, callback) => {
        dispatch({type: actionTypes.update, payload: {id, title, content, date}});
        if (callback) callback();
    }
    return (
        <ItemContext.Provider value={{
            state: state, 
            create: addItem,
            remove: deleteItem,
            update: updateItem
        }}>
            {children}
        </ItemContext.Provider>
    );
}

export default ItemContext;