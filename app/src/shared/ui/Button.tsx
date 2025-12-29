import type { ReactNode } from 'react';

type TButtonProps = {
	children: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
};

export const Button = ({ children, onClick, disabled, className = '' }: TButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`
        w-full cursor-pointer rounded-[5px] border-none px-4 py-2 font-bold text-[#fff8dc] transition-colors
        bg-[#d2691e] hover:bg-[#a0522d]
        disabled:bg-[#6b8e23] disabled:cursor-default
        ${className}
      `}
		>
			{children}
		</button>
	);
};