import { useDispatch, useSelector } from "react-redux";
import { Value } from "./components/Value";
import { Button } from "./components/Button";
import "./styles.css";
import { RootState } from './store/store';
import {
    decrementAsync,
    decrementByValueAsync,
    incrementAsync,
    incrementByValueAsync,
    setInput
} from './store/reducers/counter';

export default function App() {
  const { input, value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAsync(value));
  const decrement = () => dispatch(decrementAsync(value));
  const incrementByValue = () => dispatch(incrementByValueAsync(value, input));
  const decrementByValue = () => dispatch(decrementByValueAsync(value, input));
  const setInputValue = (value: string) => dispatch(setInput(Number(value)));

  return (
    <div className="App">
      <Value />
      <div style={{ marginBottom: 16 }}>
        <Button text="Увеличить" onClick={increment} />
        <Button text="Уменьшить" onClick={decrement} />
      </div>
      <div>
        <input
          placeholder="изменить на значение"
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
        />
        <div>
          <Button
            text="Увеличить на значение"
            onClick={() => {
              incrementByValue();
            }}
          />
          <Button
            text="Уменьшить на значение"
            onClick={() => {
              decrementByValue();
            }}
          />
        </div>
      </div>
    </div>
  );
}
