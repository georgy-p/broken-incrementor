import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../store/store';

export const Value: FC = () => {
  const { value } = useSelector((state: RootState) => state.counter);
  return <div>Значение: {value}</div>;
};
