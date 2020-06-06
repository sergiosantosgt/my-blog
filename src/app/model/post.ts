import { PostCategorias } from './category';

export class Post {
  id: number;
  title: string;
  subtitle: string;
  publication_date: string;
  content: string;
  postCategorias: PostCategorias;
}
