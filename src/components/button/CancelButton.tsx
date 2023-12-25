import { FC } from 'react';
import './button.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
}


export const CancelButton: FC<ButtonProps> = ({ text, onClick }) => {
    return <button className='btn cancel' onClick={onClick}>{text}</button>;
};
