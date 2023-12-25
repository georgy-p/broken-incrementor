import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store';
import './value.css';

export const Value: FC = () => {
  const { value } = useSelector((state: RootState) => state.counter);
  return <div className='value'>Значение: <span>{value}</span></div>;
};
