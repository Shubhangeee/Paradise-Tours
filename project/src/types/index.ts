export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'user' | 'admin';
  created_at: string;
}

export interface Booking {
  id: string;
  user_id: string;
  service_type: 'taxi' | 'tour';
  vehicle_type?: string;
  destination: string;
  pickup_location: string;
  pickup_date: string;
  pickup_time: string;
  passenger_count: number;
  total_amount: number;
  advance_amount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  special_requests?: string;
  created_at: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: number;
  price_per_km: number;
  image_url: string;
  features: string[];
  available: boolean;
}

export interface TourPackage {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image_url: string;
  destinations: string[];
  includes: string[];
}

export interface Review {
  id: string;
  customer_name: string;
  rating: number;
  comment: string;
  location: string;
  created_at: string;
}