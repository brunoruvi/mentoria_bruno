-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  quantity INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO products (name, description, price, quantity) VALUES
('Notebook Dell', 'Notebook Dell Inspiron 15', 2500.00, 10),
('Mouse Logitech', 'Mouse sem fio Logitech MX Master', 350.00, 25),
('Teclado Mecânico', 'Teclado Mecânico RGB', 450.00, 15);
