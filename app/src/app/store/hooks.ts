import { useContext } from 'react';
import { useStore as useZustandStore } from 'zustand';
import { StoreContext } from './provider';
import type { TAppState } from './types';

// Кастомный хук, который соединяет Context и Zustand
export const useStore = <T>(selector: (state: TAppState) => T): T => {
	const store = useContext(StoreContext);

	if (!store) {
		throw new Error('useStore must be used within a StoreProvider');
	}

	return useZustandStore(store, selector);
};