
export type TProduct = {
	id: number;
	name: string;
	price: number;
	oldPrice?: number; // Опционально, для скидки
	image: string;
	category: string; // Добавим категорию для группировки (как на макете)
};

export type TCartItem = {
	productId: number;
	quantity: number;
};

export type TAppState = {
	products: TProduct[];
	cart: TCartItem[]; // Теперь массив объектов {id, quantity}
	favorites: number[]; // Массив ID избранного
	searchQuery: string;

	addToCart: (id: number) => void;
	removeFromCart: (id: number) => void;
	increaseQuantity: (id: number) => void;
	decreaseQuantity: (id: number) => void;
	toggleFavorite: (id: number) => void;
	setSearchQuery: (query: string) => void;
};