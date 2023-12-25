import { useDispatch, useSelector } from "react-redux";
import { Value } from "./components/Value";
import { Button } from "./components/button/Button";
import "./styles.css";
import { RootState } from './store/store';
import {
    decrementAsync,
    decrementByValueAsync,
    incrementAsync,
    incrementByValueAsync,
    setInput
} from './store/reducers/counter';
import { FC } from 'react';
import { Input } from './components/Input/Input';
import { Spinner } from './components/spinner/Spinner';

const App: FC = () => {
  const { value, isLoading } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAsync(value));
  const decrement = () => dispatch(decrementAsync(value));

  return (
    <div className="App">
        <Value />
        <div className="btn-group">
            <Button isDisabled={isLoading} text="Увеличить" onClick={increment} />
            <Button isDisabled={isLoading} text="Уменьшить" onClick={decrement} />
        </div>
        <Input />
        {isLoading && <Spinner />}
    </div>
  );
}

export default App;
