import { createAction, createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: 0,
    isLoading: false,
    input: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setInput: (state, { payload }) => {
            state.input = payload;
        },
        setOperationLoading: (state) => {
            state.isLoading = true;
        },
        setOperationSuccess: (state, { payload }) => {
            state.value = payload;
            state.isLoading = false;
        },
    },
});

    export const INCREMENT_ASYNC = 'counter/INCREMENT_ASYNC';
    export const incrementAsync = createAction(INCREMENT_ASYNC, (value: number) => ({payload: {value}}));

    export const DECREMENT_ASYNC = 'counter/DECREMENT_ASYNC';
    export const decrementAsync = createAction(DECREMENT_ASYNC, (value: number) => ({payload: {value}}));

    export const INCREMENT_BY_VALUE_ASYNC = 'counter/INCREMENT_BY_VALUE_ASYNC';
    export const incrementByValueAsync = createAction(INCREMENT_BY_VALUE_ASYNC,(value: number, input: number) => ({payload: {value, input}}));

    export const DECREMENT_BY_VALUE_ASYNC = 'counter/DECREMENT_BY_VALUE_ASYNC';
    export const decrementByValueAsync = createAction(DECREMENT_BY_VALUE_ASYNC, (value: number, input: number) => ({payload: {value, input}}));

    export const { setInput, setOperationLoading, setOperationSuccess } = counterSlice.actions;

    export default counterSlice.reducer;
