export type Food = {
  image: string;
  id: string;
  itemId: number;

  name: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  totalRatings: number;
  totalOrders: number;
  cookingTime: number;
  todaysOrders: number;
  category: string;
  categoryId: number;
  todaySpecial: boolean;
  count: number;
};

export type Foodsemi = {
  ItemId: number;
  Quantity: number;
  Email: number;
};
export interface dataC {
  id: number;
  image: string;
  totalItems: number;
  name: string;
  description: string;
}
