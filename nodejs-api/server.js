require('dotenv').config;
const express = require('express');
const configureBodyParser = require('./middleware/bodyParser');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const productRoutes = require('./routes/productRoutes');

console.log(orderRoutes.all)

const app = express();

// Body-Parser Middleware einbinden
configureBodyParser(app);

// Einfache Route zum Testen
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routen einbinden
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);
app.use('/products', productRoutes);

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
