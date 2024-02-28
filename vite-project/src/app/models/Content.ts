import { Article } from "./Article";

export interface Content {
  id: string;
  title: string;
  description?: string;
  createAt: string;
  status: boolean;
  article: Article[];
}
