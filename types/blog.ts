export interface Author {
  name: string;
  avatar?: string;
}

export interface Section {
  heading: string;
  items?: string[];
  paragraphs?: string[];
}

export interface ArticleData {
  slug: string;
  title: string;
  readTime?: string;
  author: Author;
  heroImage?: string;
  content: {
    intro?: string;
    sections?: Section[];
    image?: string;
    conclusion?: string;
  };
  createdAt?: string;
}
