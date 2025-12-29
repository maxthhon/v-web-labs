import { createStore } from 'zustand';
import type { TAppState } from './types';
import type { TProduct } from '../../app/store/types';

export const createShopStore = (initialProducts: TProduct[]) => {
	return createStore<TAppState>((set, get) => ({
		products: initialProducts,
		cart: [],
		favorites: [],
		searchQuery: '',

		addToCart: (id) =>
			set((state) => {
				const existing = state.cart.find((item) => item.productId === id);
				if (existing) {
					// Если уже есть, увеличиваем кол-во
					return {
						cart: state.cart.map((item) =>
							item.productId === id ? { ...item, quantity: item.quantity + 1 } : item,
						),
					};
				}
				// Если нет, добавляем
				return { cart: [...state.cart, { productId: id, quantity: 1 }] };
			}),

		removeFromCart: (id) =>
			set((state) => ({
				cart: state.cart.filter((item) => item.productId !== id),
			})),

		increaseQuantity: (id) =>
			set((state) => ({
				cart: state.cart.map((item) =>
					item.productId === id ? { ...item, quantity: item.quantity + 1 } : item,
				),
			})),

		decreaseQuantity: (id) =>
			set((state) => ({
				cart: state.cart
					.map((item) =>
						item.productId === id ? { ...item, quantity: item.quantity - 1 } : item,
					)
					.filter((item) => item.quantity > 0), // Удаляем, если стало 0
			})),

		toggleFavorite: (id) =>
			set((state) => {
				if (state.favorites.includes(id)) {
					return { favorites: state.favorites.filter((fid) => fid !== id) };
				}
				return { favorites: [...state.favorites, id] };
			}),

		setSearchQuery: (query) => set({ searchQuery: query }),
	}));
};