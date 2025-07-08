/*
  # Update Nepal Tour Package

  1. Changes
    - Remove "Visa Assistance" from Nepal tour package includes array
    - Keep all other tour package data unchanged

  2. Security
    - No changes to RLS policies needed
*/

UPDATE tour_packages 
SET includes = '{"Accommodation", "Meals", "Guide", "Transportation"}'
WHERE name = 'Nepal Tour';