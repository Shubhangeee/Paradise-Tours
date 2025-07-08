/*
  # Paradise Tours Database Schema

  1. New Tables
    - `profiles` - User profile information
      - `id` (uuid, references auth.users)
      - `name` (text)
      - `phone` (text)
      - `role` (text, default 'user')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `vehicles` - Available vehicles
      - `id` (uuid, primary key)
      - `name` (text)
      - `type` (text)
      - `capacity` (integer)
      - `price_per_km` (decimal)
      - `image_url` (text)
      - `features` (text array)
      - `available` (boolean, default true)
      - `created_at` (timestamp)
    
    - `tour_packages` - Tour packages
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `duration` (text)
      - `price` (decimal)
      - `image_url` (text)
      - `destinations` (text array)
      - `includes` (text array)
      - `available` (boolean, default true)
      - `created_at` (timestamp)
    
    - `bookings` - Customer bookings
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `service_type` (text) - 'taxi' or 'tour'
      - `vehicle_id` (uuid, references vehicles)
      - `tour_package_id` (uuid, references tour_packages)
      - `customer_name` (text)
      - `customer_phone` (text)
      - `customer_email` (text)
      - `pickup_location` (text)
      - `destination` (text)
      - `pickup_date` (date)
      - `pickup_time` (time)
      - `passenger_count` (integer)
      - `total_amount` (decimal)
      - `advance_amount` (decimal)
      - `status` (text, default 'pending')
      - `special_requests` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `reviews` - Customer reviews
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `rating` (integer)
      - `comment` (text)
      - `location` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Add policies for admin users to manage all data
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name text NOT NULL,
  phone text,
  role text DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create vehicles table
CREATE TABLE IF NOT EXISTS vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  capacity integer NOT NULL,
  price_per_km decimal(10,2) NOT NULL,
  image_url text,
  features text[] DEFAULT '{}',
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create tour_packages table
CREATE TABLE IF NOT EXISTS tour_packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  duration text NOT NULL,
  price decimal(10,2) NOT NULL,
  image_url text,
  destinations text[] DEFAULT '{}',
  includes text[] DEFAULT '{}',
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  service_type text NOT NULL CHECK (service_type IN ('taxi', 'tour')),
  vehicle_id uuid REFERENCES vehicles ON DELETE SET NULL,
  tour_package_id uuid REFERENCES tour_packages ON DELETE SET NULL,
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text,
  pickup_location text,
  destination text,
  pickup_date date,
  pickup_time time,
  passenger_count integer DEFAULT 1,
  total_amount decimal(10,2) DEFAULT 0,
  advance_amount decimal(10,2) DEFAULT 0,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  special_requests text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  location text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Vehicles policies (public read, admin write)
CREATE POLICY "Anyone can read vehicles"
  ON vehicles
  FOR SELECT
  TO anon, authenticated
  USING (available = true);

-- Tour packages policies (public read, admin write)
CREATE POLICY "Anyone can read tour packages"
  ON tour_packages
  FOR SELECT
  TO anon, authenticated
  USING (available = true);

-- Bookings policies
CREATE POLICY "Users can read own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Reviews policies (public read, authenticated write)
CREATE POLICY "Anyone can read reviews"
  ON reviews
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample data
INSERT INTO vehicles (name, type, capacity, price_per_km, image_url, features) VALUES
  ('Swift Dzire', 'Sedan', 4, 12.00, '/swift dzire.jpeg', '{"AC", "Music System", "GPS", "Comfortable Seats"}'),
  ('Honda Amaze', 'Sedan', 4, 13.00, '/honda amaze.jpeg', '{"AC", "Safety Features", "Spacious Interior", "Fuel Efficient"}'),
  ('Maruti Ertiga', 'MUV', 6, 15.00, '/maruti ertiga.jpeg', '{"Spacious", "AC", "Large Luggage Space", "7 Seater"}'),
  ('Innova Crysta', 'Premium MUV', 7, 18.00, '/innova crysta.jpeg', '{"Premium Comfort", "AC", "Entertainment System", "Captain Seats"}'),
  ('Tempo Traveller', 'Mini Bus', 12, 25.00, '/tempo traveller.jpeg', '{"Group Travel", "AC", "Reclining Seats", "Entertainment"}');

INSERT INTO tour_packages (name, description, duration, price, image_url, destinations, includes) VALUES
  ('Varanasi Spiritual Tour', 'Experience the spiritual essence of Varanasi with visits to ancient temples and ghats', '2 Days / 1 Night', 8999.00, 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800', '{"Kashi Vishwanath", "Dashashwamedh Ghat", "Sarnath"}', '{"Accommodation", "Meals", "Guide", "Transportation"}'),
  ('Ayodhya Pilgrimage', 'Sacred journey to the birthplace of Lord Rama', '3 Days / 2 Nights', 12999.00, 'https://images.pexels.com/photos/8078381/pexels-photo-8078381.jpeg?auto=compress&cs=tinysrgb&w=800', '{"Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhawan"}', '{"Accommodation", "Meals", "Guide", "Transportation"}'),
  ('Mathura Vrindavan', 'Divine tour of Krishna''s birthplace and childhood home', '2 Days / 1 Night', 9999.00, 'https://images.pexels.com/photos/8078382/pexels-photo-8078382.jpeg?auto=compress&cs=tinysrgb&w=800', '{"Krishna Janmabhoomi", "Banke Bihari", "ISKCON Temple"}', '{"Accommodation", "Meals", "Guide", "Transportation"}'),
  ('Nepal Tour', 'Explore the beautiful landscapes and culture of Nepal', '5 Days / 4 Nights', 24999.00, 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800', '{"Kathmandu", "Pokhara", "Lumbini"}', '{"Accommodation", "Meals", "Guide", "Transportation", "Visa Assistance"}'),
  ('Madhya Pradesh Heritage', 'Discover the rich heritage and architecture of Madhya Pradesh', '4 Days / 3 Nights', 18999.00, 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800', '{"Khajuraho", "Orchha", "Gwalior"}', '{"Accommodation", "Meals", "Guide", "Transportation"}'),
  ('Gujarat Cultural Tour', 'Experience the vibrant culture and heritage of Gujarat', '6 Days / 5 Nights', 28999.00, 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800', '{"Dwarka", "Somnath", "Rann of Kutch"}', '{"Accommodation", "Meals", "Guide", "Transportation"}');

INSERT INTO reviews (customer_name, rating, comment, location) VALUES
  ('Rajesh Kumar', 5, 'Excellent service! The driver was very professional and the car was clean and comfortable. Highly recommend Paradise Tours for anyone visiting Varanasi.', 'Varanasi, UP'),
  ('Priya Sharma', 5, 'Amazing tour package to Ayodhya. Everything was well organized and the guide was very knowledgeable. Will definitely book again for our next trip.', 'Delhi'),
  ('Amit Singh', 4, 'Great experience with Paradise Tours. The Innova was spacious and perfect for our family trip. Driver was punctual and helpful throughout the journey.', 'Mumbai'),
  ('Sunita Devi', 5, 'Very reliable service. Used their taxi for airport pickup and they were right on time. Clean vehicle and reasonable pricing. Recommended!', 'Varanasi, UP'),
  ('Vikash Gupta', 5, 'Booked tempo traveller for our group pilgrimage. Excellent service, comfortable journey, and the driver was very cooperative. Thank you Paradise Tours!', 'Lucknow, UP'),
  ('Meera Joshi', 4, 'Good service overall. The car was in good condition and the driver was polite. Booking process was smooth through WhatsApp. Will use again.', 'Pune');

-- Function to handle user profile creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, name, phone, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'user')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();