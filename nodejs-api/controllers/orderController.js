const db = require('../config/database');

exports.addOrder = (req, res) => {
  const { customer_id, order_date, total, status } = req.params;
  const sql = 'INSERT INTO orders (customer_id, order_date, total, status) VALUES (?, ?, ?, ?)';

  db.query(sql, [customer_id, order_date, total, status], (err, result) => {
    if (err) {
      return res.status(500).send('Database insert error');
    }
    res.send('Order added...');
  });
};

exports.addOrderItem = (req, res) => {
  const { order_id, product_id, quantity, price } = req.params;
  const sql = 'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)';

  db.query(sql, [order_id, product_id, quantity, price], (err, result) => {
    if (err) {
      return res.status(500).send('Database insert error');
    }
    res.send('Order item added...');
  });
};
