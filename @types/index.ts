

export interface toggle_menutype {
    id: number;
    title: string;
    path: string;
}

export interface HeaderMenuType {
    id: number;
    title: string;
}

export interface ProductType {
    id: string;
    name: string;
    price: number;
    img: string;
    currentPrice: number;
    discount: number;
    rate: number;
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export interface ProductInfoType {
    id: string;
    name: string;
    img: string;
    price: number;
    currentPrice: number;
    discount: number;
    rate: number;
    color: string[];
    size: string[];
};

export interface ProductState {
    items: ProductType[];
}
export interface RootState {
    products: ProductState;
};

export interface RootStates {
    likes: ProductState;
};
export interface UserType {
    id: string;
    name: string;
    decr: string;
    month: string;
}