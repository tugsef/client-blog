export interface Category {
  id: number;
  name: string;
}

export interface GetAllPosts {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  published: boolean;
  authorId: number;
  approve: number;
  hashtag: string;
  story: string;
  authorUserName: string;
  url:string;
  categories: Category[];
}
