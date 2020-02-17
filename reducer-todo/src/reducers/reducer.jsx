import React from "react";

export const reducerState =
    [
        {item: 'Learn about reducers', completed: false, id: 1},
        {item: 'Learn about react-dom', completed: false, id: 2},
        {item: 'Learn about react-router', completed: false, id: 3}
    ];

export const baseReducer = (state, action) =>
{
    switch (action.type)
    {
        case "addItem":
            {
                return (
                    [
                        ...state,
                        {item: action.title, completed: false, id: state[state.length - 1].id + 1}
                    ]
                );
            }
        case "clearCompleted":
            {
                return (
                    state.filter((i)=>
                        {
                            return !i.completed;
                        })
                );
            }
        case "toggleCompleted":
            {
                state[action.index].completed = !state[action.index].completed
                return (state);
            }
        default:
            console.log("Error");
    }

    return ("Error");
};