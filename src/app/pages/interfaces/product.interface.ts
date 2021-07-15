export interface Product {
  productId: string;
  productName: string;
  price: number;
  description: string;
  quantity: number;
  // ? es para dejar el campo como null
  reviewDTOList?: Review[];
}

export interface Review {
  reviewId: number;
  subject: string;
  description: string;
  date: Date;
  score: number;
  productId: string;
}
