export interface IMenuItem {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
}

export interface IMenuItemForm {
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string;
}
