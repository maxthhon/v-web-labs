import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Home } from 'lucide-react';
import { Input } from '../shared/ui/Input';
import { useStore } from '../app/store/hooks';

export const Header = () => {
	const searchQuery = useStore((state) => state.searchQuery);
	const setSearchQuery = useStore((state) => state.setSearchQuery);
	const cartItemsCount = useStore((state) => state.cart.length);
	const favoritesCount = useStore((state) => state.favorites.length);

	return (
		<header className='border-b border-gray-200 bg-white py-4'>
			<div className='container mx-auto flex items-center justify-between px-4'>
				{/* Логотип / Домой */}
				<Link to='/' className='text-gray-700 hover:text-black'>
					<Home size={24} />
				</Link>

				{/* Поиск (по центру) */}
				<div className='mx-4 flex w-full max-w-md items-center rounded-md border border-gray-300 px-3 py-2'>
					<Search size={20} className='text-gray-400' />
					<input
						type='text'
						placeholder='Поиск...'
						className='ml-2 w-full outline-none'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>

				{/* Иконки справа */}
				<div className='flex items-center gap-6'>
					<div className='relative cursor-pointer text-gray-700 hover:text-black'>
						<Heart size={24} />
						{favoritesCount > 0 && (
							<span className='absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white'>
								{favoritesCount}
							</span>
						)}
					</div>
					
					<Link to='/cart' className='relative cursor-pointer text-gray-700 hover:text-black'>
						<ShoppingCart size={24} />
						{cartItemsCount > 0 && (
							<span className='absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white'>
								{cartItemsCount}
							</span>
						)}
					</Link>
				</div>
			</div>
		</header>
	);
};