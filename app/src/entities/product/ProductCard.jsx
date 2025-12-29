import { Button } from '../../shared/ui/Button';
import { useCartStore } from '../../features/cartStore';

export const ProductCard = ({ product }) => {
	const { id, name, price, image } = product;
	
	// Подключаем Zustand
	const addToCart = useCartStore((state) => state.addToCart);
	const cartItems = useCartStore((state) => state.cartItems);
	const isInCart = cartItems.includes(id);

	return (
		<article className="
			flex h-[280px] w-[200px] flex-col items-center justify-between rounded-[10px] 
			border-2 border-[#a0522d] bg-[#fff8dc] p-4 text-center shadow-[0_6px_6px_rgba(139,69,19,0.3)]
			hover:-translate-y-[5px] hover:shadow-[0_10px_15px_rgba(139,69,19,0.4)] transition-all duration-300
		">
			<img src={image} alt={name} className="mb-2 h-[200px] w-[200px] rounded-lg border border-[#b5895c] object-cover" />
			
			<div className="flex w-full items-center justify-between pb-2">
				<h3 className="m-0 text-base font-bold">{name}</h3>
				<span className="m-0 text-base font-bold text-[#a0522d]">{price}р</span>
			</div>

			<Button onClick={() => addToCart(id)} disabled={isInCart}>
				{isInCart ? 'В корзине' : 'Добавить в корзину'}
			</Button>
		</article>
	);
};