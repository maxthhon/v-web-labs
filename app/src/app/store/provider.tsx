import { createContext, type ReactNode, useState } from 'react';
import { type StoreApi } from 'zustand';
import { type TAppState } from './types';
import { createShopStore } from './store';
import type { TProduct } from './types';

// Создаем контекст
export const StoreContext = createContext<StoreApi<TAppState> | null>(null);

type TStoreProviderProps = {
	children: ReactNode;
	initialProducts: TProduct[]; // Мы будем передавать товары при инициализации
};

export const StoreProvider = ({ children, initialProducts }: TStoreProviderProps) => {
	// Гарантируем создание стора один раз (как в лекции)
	const [store] = useState(() => createShopStore(initialProducts));

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};