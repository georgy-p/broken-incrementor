import {
    DECREMENT_ASYNC,
    DECREMENT_BY_VALUE_ASYNC,
    INCREMENT_ASYNC,
    INCREMENT_BY_VALUE_ASYNC
} from './reducers/counter';

export type OnlyValue = { value: number };

export type ValueAndInput = { value: number; input: number };

export interface IncrementAction {
    type: typeof INCREMENT_ASYNC;
    payload: OnlyValue;
}

export interface DecrementAction {
    type: typeof DECREMENT_ASYNC;
    payload: OnlyValue;
}

export interface IncrementByValueAction {
    type: typeof INCREMENT_BY_VALUE_ASYNC;
    payload: ValueAndInput;
}

export interface DecrementByValueAction {
    type: typeof DECREMENT_BY_VALUE_ASYNC;
    payload: ValueAndInput;
}