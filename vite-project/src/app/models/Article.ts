import { Category } from "./Category";

export interface Article {
  id: string;
  articleName: string;
  status: boolean;
  category: Category[];
}
