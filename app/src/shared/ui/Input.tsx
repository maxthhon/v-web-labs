import type { ChangeEvent } from 'react';

type TInputProps = {
	placeholder?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ placeholder, value, onChange }: TInputProps) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className='
        w-[80%] max-w-[300px] rounded-[15px] border-2 border-[#b5895c] 
        bg-[#fff8dc] p-2 text-[#3b2e2e] transition-all duration-300
        placeholder:text-[#3b2e2e]/70
        focus:border-[#d2691e] focus:shadow-[0_0_5px_rgba(210,105,30,0.5)] focus:outline-none
      '
		/>
	);
};