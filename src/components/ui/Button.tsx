import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-md font-medium transition-colors',
        variant === 'primary' && 'bg-blue-500 hover:bg-blue-600 text-white',
        variant === 'secondary' && 'bg-gray-500 hover:bg-gray-600 text-white',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};