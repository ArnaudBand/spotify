import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      disabled={disabled}
      type={type}
      className={twMerge(
        `px-4 py-2 bg-green-600 text-black rounded-md hover:opacity-80 transition `, className)
      }
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button