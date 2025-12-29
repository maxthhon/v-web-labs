import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StoreProvider } from './app/store/provider'; // Импорт провайдера
import type { TProduct } from './app/store/types';
import './index.css';

// Выносим данные сюда (имитация данных с сервера)
const PRODUCTS_DATA: TProduct[] = [
	{ id: 1, category: 'Худи', name: 'Худи с принтом', price: 1199, oldPrice: 1599, image: '/images/hoodie.png' },
	{ id: 2, category: 'Худи', name: 'Худи оверсайз', price: 1500, image: '/images/hoodie.png' },
	{ id: 3, category: 'Шорты', name: 'Широкие шорты', price: 999, oldPrice: 1999, image: '/images/dzhins.png' },
	{ id: 4, category: 'Шорты', name: 'Джинсовые шорты', price: 1200, image: '/images/dzhins.png' },
	{ id: 5, category: 'Обувь', name: 'Кроссовки беговые', price: 2999, image: '/images/cross.png' },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreProvider initialProducts={PRODUCTS_DATA}>
				<App />
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>,
);