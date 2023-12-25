import { Button } from '../button/Button';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementByValueAsync, incrementByValueAsync, setInput } from '../../store/reducers/counter';
import { RootState } from '../../store/store';
import './input.css';

export const Input: FC = () => {
    const { input, value, isLoading } = useSelector((state: RootState) => state.counter);
    const IntegerInput = Number(input);
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();

    const errorMessage = 'Введенный символ не является числом. Введите числовое значение!';
    const incrementByValue = () => {

        if (Number.isInteger(IntegerInput)) {
            setIsError(false);
            dispatch(incrementByValueAsync(value, IntegerInput));
            dispatch(setInput(''))
        } else {
            setIsError(true);
            console.log(input);
        }

    };
    const decrementByValue = () => {
        if (Number.isInteger(IntegerInput)) {
            setIsError(false);
            dispatch(decrementByValueAsync(value, IntegerInput));
            dispatch(setInput(''))
        } else {
            setIsError(true);
            console.log(input);
        }
    }
    const setInputValue = (value: string) => dispatch(setInput(value));

    return (
        <div className="input-container">
            <input
                className={isError ? 'input error' : 'input'}
                placeholder="изменить на значение"
                value={input}
                onChange={({ target }) => {
                    setInputValue(target.value);
                }}
            />
            {isError && <p className="error-message">{errorMessage}</p>}
            <div className='btn-group'>
                <Button
                    isDisabled={isLoading}
                    text="Увеличить на значение"
                    onClick={incrementByValue}
                />
                <Button
                    isDisabled={isLoading}
                    text="Уменьшить на значение"
                    onClick={decrementByValue}
                />
            </div>
        </div>
    );
};
