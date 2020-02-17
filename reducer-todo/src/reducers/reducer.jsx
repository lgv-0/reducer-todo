import React from "react";

export default reducerState =
{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const baseReducer = (state, action) =>
{
    return (
        {
            ...state,
            item: "test"
        }
    );
};