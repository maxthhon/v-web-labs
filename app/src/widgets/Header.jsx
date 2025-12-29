import { Input } from '../shared/ui/Input';

export const Header = ({ searchValue, onSearchChange }) => {
	return (
		<header className="bg-[#c97d60] px-4 py-2 text-[#fff8dc]">
			<nav className="flex flex-col items-center justify-between gap-2 sm:flex-row">
				<h1 className="text-2xl font-bold">Магазин</h1>
				<Input 
					placeholder="Поиск товаров..." 
					value={searchValue} 
					onChange={(e) => onSearchChange(e.target.value)} 
				/>
			</nav>
		</header>
	);
};