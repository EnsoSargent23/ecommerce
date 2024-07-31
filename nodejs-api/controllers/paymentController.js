const db = require('../config/database');

exports.addPayment = (req, res) => {
  const { order_id, amount, payment_date, status } = req.params;
  const sql = 'INSERT INTO payments (order_id, amount, payment_date, status) VALUES (?, ?, ?, ?)';

  db.query(sql, [order_id, amount, payment_date, status], (err, result) => {
    if (err) {
      return res.status(500).send('Database insert error');
    }
    res.send('Payment added...');
  });
};
