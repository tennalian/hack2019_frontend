export class Category {
  id: string;
  name: string;
  description: string;
}

export class CategoryResponse {
  categories: Category[];
}

export enum CategoriesTypes {
  negative = '1',
  positive = '2'
}