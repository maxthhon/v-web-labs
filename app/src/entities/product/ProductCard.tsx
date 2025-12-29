import { Heart } from 'lucide-react';
import { useStore } from '../../app/store/hooks';
import type { TProduct } from '../../app/store/types';

type TProductCardProps = {
	product: TProduct;
};

export const ProductCard = ({ product }: TProductCardProps) => {
	const { id, name, price, oldPrice, image } = product;

	const addToCart = useStore((state) => state.addToCart);
	const toggleFavorite = useStore((state) => state.toggleFavorite);
	
	const isFavorite = useStore((state) => state.favorites.includes(id));
	const isInCart = useStore((state) => state.cart.some((item) => item.productId === id));

	return (
		<article className='group relative flex flex-col rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-lg'>
			{/* Иконка избранного */}
			<button 
				onClick={() => toggleFavorite(id)}
				className='absolute right-3 top-3 z-10 text-gray-400 hover:text-red-500'
			>
				<Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} className={isFavorite ? 'text-red-500' : ''} />
			</button>

			{/* Картинка */}
			<div className='mb-3 flex h-[200px] items-center justify-center overflow-hidden rounded-md bg-gray-50'>
				<img src={image} alt={name} className='h-full w-full object-contain mix-blend-multiply' />
			</div>

			{/* Контент */}
			<div className='flex flex-grow flex-col'>
				<div className='mb-2'>
					<div className='flex items-baseline gap-2'>
						<span className='font-bold text-lg'>{price} ₽</span>
						{oldPrice && (
							<span className='text-sm text-gray-400 line-through'>{oldPrice} ₽</span>
						)}
					</div>
					<h3 className='text-sm text-gray-700 line-clamp-2'>{name}</h3>
				</div>

				{/* Кнопка на всю ширину */}
				<button
					onClick={() => addToCart(id)}
					className={`mt-auto w-full rounded-md py-2 text-sm font-medium transition-colors 
						${isInCart 
							? 'bg-gray-200 text-gray-800' 
							: 'bg-black text-white hover:bg-gray-800'
						}`}
				>
					{isInCart ? 'В корзине' : 'В корзину'}
				</button>
			</div>
		</article>
	);
};