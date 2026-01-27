export interface BlogPost {
  slug: string; // The URL part (e.g., 'how-to-finance')
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  content: string; // The actual body text
}