-- Amazon orders table to store extracted information from emails
CREATE TABLE IF NOT EXISTS amazon_orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_name TEXT NOT NULL,
  price_cents INTEGER NOT NULL, -- Store price in cents to avoid floating point issues
  order_id TEXT NOT NULL,
  used INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a unique index on order_id to prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_order_id ON amazon_orders(order_id);