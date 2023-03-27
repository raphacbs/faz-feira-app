export interface Product {
  code: string;
  description: string;
  brand: string;
  thumbnail?: null;
  createdAt: string;
  updateAt: string;
  unit?: null;
  priceHistories?: null[] | null;
}
