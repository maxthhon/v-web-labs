import { create } from 'zustand';

export const useCartStore = create((set) => ({
	cartItems: [],
	addToCart: (productId) => set((state) => ({ cartItems: [...state.cartItems, productId] })),
}));