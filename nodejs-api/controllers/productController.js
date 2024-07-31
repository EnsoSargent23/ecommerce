const db = require('../config/database');

exports.addProduct = (req, res) => {
  const { product_name, product_description, product_price, product_stock } = req.params;
  const generated_at = new Date().toISOString().split('T')[0];
  const sql = 'INSERT INTO products (product_name, product_description, product_price, product_stock, generated_at) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [product_name, product_description, product_price, product_stock, generated_at], (err, result) => {
    if (err) {
      return res.status(500).send('Database insert error');
    }
    res.send('Product added...');
  });
};

exports.getProducts = (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Database query error');
    }
    res.json(results);
  });
};
