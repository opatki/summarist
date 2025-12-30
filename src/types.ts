export interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string; // You might want to use a union type here later, e.g., 'audio' | 'video'
  status: string; // You might want to use a union type here later, e.g., 'active' | 'archived'
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}