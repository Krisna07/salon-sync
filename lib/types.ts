export interface Business {
  id?: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  imageUrl: string;
  rating: number;
  activeHours: string;
  type: string;
  services: string[];
  employees?: Employee[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Employee {
  id?: number;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}
