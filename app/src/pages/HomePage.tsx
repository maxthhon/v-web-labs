import { useState } from 'react';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { ProductCard } from '../entities/product/ProductCard';
import type { TProduct } from '../entities/product/types';

// Типизируем массив данных
const PRODUCTS: TProduct[] = [
	{ id: 1, name: 'Кроссовки', price: 1500, image: '/images/cross.png' },
	{ id: 2, name: 'Джинсы', price: 3400, image: '/images/dzhins.png' },
	{ id: 3, name: 'Худи', price: 1900, image: '/images/hoodie.png' },
];

export const HomePage = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	const filteredProducts = PRODUCTS.filter((product) =>
		product.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className='flex min-h-screen flex-col pb-10'>
			<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

			<main className='flex-grow'>
				<section className='mb-12 grid grid-cols-[repeat(auto-fit,220px)] justify-start gap-8 p-6'>
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}

					{filteredProducts.length === 0 && (
						<div className='col-span-full mt-10 text-center text-xl opacity-60'>
							Товары не найдены
						</div>
					)}
				</section>
			</main>

			<Footer />
		</div>
	);
};