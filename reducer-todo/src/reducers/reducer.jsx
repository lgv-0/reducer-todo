import React from "react";

export const reducerState =
    [
        {item: 'Learn about reducers', completed: false, id: 1},
        {item: 'Learn about react-dom', completed: false, id: 2},
        {item: 'Learn about react-router', completed: false, id: 3}
    ];

export const baseReducer = (state, action) =>
{
    return (
        {
            ...state,
            item: "test"
        }
    );
};