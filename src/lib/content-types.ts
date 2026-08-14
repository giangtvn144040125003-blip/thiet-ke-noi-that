export type ContentProject = {
  id: string;
  slug: string;
  title: string;
  location: string | null;
  machineCount: number | null;
  category: string | null;
  duration: string | null;
  summary: string;
  content: string | null;
  coverImage: string | null;
};

export type ContentPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string | null;
  coverImage: string | null;
  category: string | null;
};

export type ContentService = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  content: string | null;
  benefits: string[];
  deliverables: string[];
  coverImage: string | null;
};

export type ContentPackage = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  machineMin: number;
  machineMax: number;
  priceFrom: number | null;
  priceTo: number | null;
  features: string[];
  featured: boolean;
};

export type ContentFaq = {
  id: string;
  question: string;
  answer: string;
  category: string | null;
};


