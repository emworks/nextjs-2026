export interface Brand {
  id: number;
  name: string;
}

export interface UserProduct {
  id: string;
  userId: number;
  productId: number;
  isFavorite: boolean;
}

export interface Racket {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: Brand;
  userData?: {
    isFavorite: boolean;
  };
}

export interface RacketResponse {
  product: Racket;
}
