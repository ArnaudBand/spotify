import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  disabled,
  ...props
}, ref) => {
  return (
    <input
      className={twMerge(`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-neutral-600`, className)}
      type={type}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  );
})

Input.displayName = 'Input';

export default Input;