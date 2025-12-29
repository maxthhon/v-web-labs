import { create } from 'zustand';

// Описываем тип состояния и действий с префиксом T (по заданию)
type TCartState = {
	cartItems: number[]; // Массив ID добавленных товаров
	addToCart: (productId: number) => void; // Функция ничего не возвращает (void)
	isInCart: (productId: number) => boolean; // Функция возвращает true/false
};

// Создаем стор, передавая Generic тип <TCartState>
export const useCartStore = create<TCartState>((set, get) => ({
	cartItems: [],

	addToCart: (productId) => {
		// Получаем текущее состояние
		const state = get();
		// Если товара еще нет в корзине — добавляем
		if (!state.cartItems.includes(productId)) {
			set({ cartItems: [...state.cartItems, productId] });
		}
	},

	isInCart: (productId) => {
		// Проверяем наличие id в массиве
		return get().cartItems.includes(productId);
	},
}));