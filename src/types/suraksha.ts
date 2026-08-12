export type PageView =
  | 'home'
  | 'book-test'
  | 'packages'
  | 'consult-doctor'
  | 'centres'
  | 'download-report'
  | 'about'
  | 'blog'
  | 'contact';

export interface TestItem {
  id: string;
  name: string;
  code: string;
  category: string;
  sampleType: string;
  tat: string; // e.g. "Same Day"
  fasting: string;
  price: number;
  originalPrice: number;
  popular?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  concern: 'heart' | 'liver' | 'kidney' | 'thyroid' | 'diabetes' | 'bone' | 'senior' | 'women';
  gender: 'all' | 'female' | 'male';
  ageGroup: string;
  testCount: number;
  price: number;
  originalPrice: number;
  testsIncluded: string[];
  description: string;
  popular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experienceYears: number;
  qualification: string;
  centreName: string;
  city: string;
  avatar: string;
  availableDays: string[];
  consultFee: number;
}

export interface Centre {
  id: string;
  name: string;
  state: string;
  city: string;
  locality: string;
  address: string;
  phone: string;
  timings: string;
  mapsUrl: string;
  hasImaging: boolean;
  hasHomePickup: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  type: 'test' | 'package';
  quantity: number;
}
