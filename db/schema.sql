DROP DATABASE IF EXISTS electronics_dev;
CREATE DATABASE electronics_dev;

\c electronics_dev;

CREATE TABLE electronics (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  price DECIMAL(10, 2)
);