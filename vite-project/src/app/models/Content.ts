import { Article } from "./Article";

export interface Content {
  id: string;
  title: string;
  description?: string;
  createAt: Date | null;
  status: boolean;
  articleId: string;
  article: Article[];
}
