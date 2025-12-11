const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/products', productRoutes);

// Root
app.get('/', (req, res) => {
  res.send('BioGlow API is running!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
