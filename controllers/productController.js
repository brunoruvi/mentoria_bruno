const connection = require('../db');

class ProductController {
  // GET all products
  static getAllProducts(req, res) {
    const query = 'SELECT * FROM products';
    
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Erro ao buscar produtos:', err);
        return res.status(500).json({ error: 'Erro ao buscar produtos' });
      }
      res.json(results);
    });
  }

  // GET product by ID
  static getProductById(req, res) {
    const { id } = req.params;
    const query = 'SELECT * FROM products WHERE id = ?';
    
    connection.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erro ao buscar produto:', err);
        return res.status(500).json({ error: 'Erro ao buscar produto' });
      }
      
      if (results.length === 0) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      
      res.json(results[0]);
    });
  }

  // CREATE new product
  static createProduct(req, res) {
    const { name, description, price, quantity } = req.body;
    
    // Validação básica
    if (!name || !price) {
      return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
    }
    
    const query = 'INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)';
    
    connection.query(query, [name, description, price, quantity || 0], (err, result) => {
      if (err) {
        console.error('Erro ao criar produto:', err);
        return res.status(500).json({ error: 'Erro ao criar produto' });
      }
      
      res.status(201).json({
        id: result.insertId,
        name,
        description,
        price,
        quantity: quantity || 0
      });
    });
  }

  // UPDATE product
  static updateProduct(req, res) {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    
    if (!name || !price) {
      return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
    }
    
    const query = 'UPDATE products SET name = ?, description = ?, price = ?, quantity = ? WHERE id = ?';
    
    connection.query(query, [name, description, price, quantity || 0, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar produto:', err);
        return res.status(500).json({ error: 'Erro ao atualizar produto' });
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      
      res.json({
        id: parseInt(id),
        name,
        description,
        price,
        quantity: quantity || 0
      });
    });
  }

  // DELETE product
  static deleteProduct(req, res) {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    
    connection.query(query, [id], (err, result) => {
      if (err) {
        console.error('Erro ao deletar produto:', err);
        return res.status(500).json({ error: 'Erro ao deletar produto' });
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      
      res.status(204).send();
    });
  }
}

module.exports = ProductController;
