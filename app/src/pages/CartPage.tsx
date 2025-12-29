import { Trash2, Minus, Plus, Heart } from 'lucide-react';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { useStore } from '../app/store/hooks';

export const CartPage = () => {
	const products = useStore((state) => state.products);
	const cart = useStore((state) => state.cart);
	const increaseQty = useStore((state) => state.increaseQuantity);
	const decreaseQty = useStore((state) => state.decreaseQuantity);
	const removeFromCart = useStore((state) => state.removeFromCart);

	// Собираем полные данные о товарах в корзине
	const cartItems = cart.map((cartItem) => {
		const product = products.find((p) => p.id === cartItem.productId);
		return {
			...product!,
			quantity: cartItem.quantity,
		};
	}).filter(item => item.id); // Фильтр на случай ошибок

	// Расчеты
	const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
	const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const totalOldPrice = cartItems.reduce((acc, item) => acc + (item.oldPrice || item.price) * item.quantity, 0);
	const discount = totalOldPrice - totalPrice;

	return (
		<div className='flex min-h-screen flex-col bg-white'>
			<Header />

			<main className='container mx-auto flex-grow px-4 py-8'>
				<h2 className='mb-6 text-2xl font-bold'>Корзина</h2>

				{cartItems.length === 0 ? (
					<div className='text-center py-20 text-gray-500'>Корзина пуста</div>
				) : (
					<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
						{/* Левая колонка - Список товаров */}
						<div className='lg:col-span-2'>
							<div className='mb-4 flex items-center justify-between border-b pb-4'>
								<label className='flex items-center gap-2 cursor-pointer select-none'>
									<input type='checkbox' className='h-4 w-4 rounded border-gray-300' checked readOnly />
									<span className='text-sm font-medium'>Выбрать все</span>
								</label>
								<button className='text-gray-400 hover:text-red-500'>
									<Trash2 size={18} />
								</button>
							</div>

							<div className='space-y-6'>
								{cartItems.map((item) => (
									<div key={item.id} className='flex gap-4 border-b border-gray-100 pb-6 last:border-0'>
										<div className='flex items-start pt-2'>
											<input type='checkbox' className='h-4 w-4 rounded border-gray-300' checked readOnly />
										</div>
										
										{/* Картинка */}
										<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-50'>
											<img src={item.image} alt={item.name} className='h-full w-full object-contain mix-blend-multiply' />
										</div>

										{/* Инфо */}
										<div className='flex flex-grow flex-col justify-between sm:flex-row'>
											<div className='flex-grow pr-4'>
												<h3 className='text-base font-medium text-gray-900'>{item.name}</h3>
												<div className='mt-2 flex gap-3'>
													<button className='flex items-center gap-1 text-xs text-gray-500 hover:text-black'>
														<Heart size={14} /> В избранное
													</button>
													<button 
														onClick={() => removeFromCart(item.id)}
														className='flex items-center gap-1 text-xs text-gray-500 hover:text-red-500'
													>
														<Trash2 size={14} /> Удалить
													</button>
												</div>
											</div>

											{/* Цена и Контрол */}
											<div className='mt-4 flex items-end justify-between sm:mt-0 sm:flex-col sm:items-end'>
												<div className='text-right'>
													<div className='font-bold'>{item.price * item.quantity} ₽</div>
													{item.oldPrice && (
														<div className='text-xs text-gray-400 line-through'>
															{item.oldPrice * item.quantity} ₽
														</div>
													)}
												</div>

												{/* Каунтер */}
												<div className='mt-3 flex items-center rounded-md border border-gray-200'>
													<button 
														onClick={() => decreaseQty(item.id)}
														className='p-1 px-2 hover:bg-gray-100'
													>
														<Minus size={14} />
													</button>
													<span className='min-w-[30px] text-center text-sm font-medium'>{item.quantity}</span>
													<button 
														onClick={() => increaseQty(item.id)}
														className='p-1 px-2 hover:bg-gray-100'
													>
														<Plus size={14} />
													</button>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Правая колонка - Саммари (Счет) */}
						<div className='h-fit rounded-lg border border-gray-200 p-6 lg:sticky lg:top-4'>
							<h3 className='mb-4 text-lg font-bold'>Ваша корзина</h3>
							
							<div className='mb-2 flex justify-between text-sm'>
								<span className='text-gray-500'>Товары ({totalCount})</span>
								<span>{totalOldPrice > 0 ? totalOldPrice : totalPrice} ₽</span>
							</div>
							
							{discount > 0 && (
								<div className='mb-4 flex justify-between text-sm text-red-500'>
									<span>Скидка</span>
									<span>- {discount} ₽</span>
								</div>
							)}

							<div className='mb-6 flex justify-between border-t border-gray-100 pt-4 text-lg font-bold'>
								<span>Итого</span>
								<span>{totalPrice} ₽</span>
							</div>

							<button className='w-full rounded-md bg-black py-3 text-white transition-colors hover:bg-gray-800'>
								Перейти к оформлению
							</button>
						</div>
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
};