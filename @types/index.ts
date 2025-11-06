

export interface toggle_menutype{
    id: number;
    title: string;
    path: string;
}

export interface HeaderMenuType{
    id: number;
    title: string;
}

export interface ProductType{
    id: string;
    name: string;
    price: number;
    img: string;
    currentPrice: number;
    discount: number;
    rate: number;
}

export interface ProductInfoType  {
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