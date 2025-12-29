import { Input } from '../shared/ui/Input';

type THeaderProps = {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
};

export const Header = ({ searchQuery, setSearchQuery }: THeaderProps) => {
	return (
		<header className='bg-[#c97d60] px-4 pb-2 pt-2 text-[#fff8dc]'>
			<nav className='flex flex-col items-center justify-between gap-2 sm:flex-row'>
				<h1 className='text-2xl font-bold'>Магазин</h1>
				<Input
					placeholder='Поиск товаров...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</nav>
		</header>
	);
};