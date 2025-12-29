import { useState } from 'react';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { ProductCard } from '../entities/product/ProductCard';

// Данные о товарах (аналог твоего HTML)
const PRODUCTS = [
	{ id: 1, name: 'Кроссовки', price: 1500, image: '/images/cross.png' },
	{ id: 2, name: 'Джинсы', price: 3400, image: '/images/dzhins.png' },
	{ id: 3, name: 'Худи', price: 1900, image: '/images/hoodie.png' },
];

export const HomePage = () => {
	const [searchQuery, setSearchQuery] = useState('');

	// Фильтрация (Реактивность React)
	const filteredProducts = PRODUCTS.filter((p) => 
		p.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="flex min-h-screen flex-col pb-10">
			<Header searchValue={searchQuery} onSearchChange={setSearchQuery} />
			
			<main className="flex-grow">
				<section className="grid grid-cols-[repeat(auto-fit,220px)] justify-start gap-8 p-6">
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
					
					{filteredProducts.length === 0 && (
						<p className="col-span-full text-center opacity-60">Товары не найдены</p>
					)}
				</section>
			</main>

			<Footer />
		</div>
	);
};