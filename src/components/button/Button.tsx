import { FC } from 'react';
import './button.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  isDisabled: boolean
}

export const Button: FC<ButtonProps> = ({ text, onClick, isDisabled }) => {
  return <button className={isDisabled ? 'btn disabled' : 'btn'} onClick={onClick}>{text}</button>;
};
