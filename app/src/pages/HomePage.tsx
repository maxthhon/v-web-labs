import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { ProductCard } from '../entities/product/ProductCard';
import { useStore } from '../app/store/hooks';

export const HomePage = () => {
	// 1. Достаем товары и поисковый запрос из глобального стора
	const products = useStore((state) => state.products);
	const searchQuery = useStore((state) => state.searchQuery);

	// 2. Фильтруем товары по поиску (сразу по всем категориям)
	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	// 3. Получаем список уникальных категорий из тех товаров, что остались после фильтрации
	// (Set убирает дубликаты, Array.from превращает обратно в массив)
	const categories = Array.from(new Set(filteredProducts.map((p) => p.category)));

	return (
		<div className='flex min-h-screen flex-col bg-white'>
			<Header />

			<main className='container mx-auto flex-grow px-4 py-8'>
				{/* Если есть категории (значит есть товары), рендерим секции */}
				{categories.length > 0 ? (
					categories.map((category) => (
						<section key={category} className='mb-12'>
							{/* Заголовок категории (например: "Худи") */}
							<h2 className='mb-6 text-2xl font-bold text-gray-900'>{category}</h2>

							{/* Сетка товаров этой категории */}
							<div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-x-4 gap-y-8'>
								{filteredProducts
									.filter((p) => p.category === category)
									.map((product) => (
										<ProductCard key={product.id} product={product} />
									))}
							</div>
						</section>
					))
				) : (
					// Если ничего не найдено
					<div className='flex h-64 flex-col items-center justify-center text-center text-gray-500'>
						<p className='text-xl font-medium'>Товары не найдены</p>
						<p className='mt-2 text-sm'>Попробуйте изменить поисковый запрос</p>
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
};