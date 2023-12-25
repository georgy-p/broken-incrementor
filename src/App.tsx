import { useDispatch, useSelector } from "react-redux";
import { Value } from "./components/value/Value";
import { Button } from "./components/button/Button";
import "./styles.css";
import { RootState } from './store/store';
import {
    cancelAction,
    decrementAsync,
    incrementAsync,
} from './store/reducers/counter';
import { FC } from 'react';
import { Input } from './components/input/Input';
import { Spinner } from './components/spinner/Spinner';
import { CancelButton } from './components/button/CancelButton';

const App: FC = () => {
  const { value, isLoading } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAsync(value));
  const decrement = () => dispatch(decrementAsync(value));
  const cancel = () => dispatch(cancelAction());

  return (
    <div className="App">
        <Value />
        <div className="btn-group">
            <Button isDisabled={isLoading} text="Увеличить" onClick={increment} />
            <Button isDisabled={isLoading} text="Уменьшить" onClick={decrement} />
        </div>
        <Input />
        {isLoading && <Spinner />}
        {isLoading && <CancelButton text="Отменить" onClick={cancel} />}
    </div>
  );
}

export default App;
