const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');


dotenv.config();
connectDB();

const app = express();

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      return res.status(400).send({ error: 'Invalid JSON format' });
    }
    next();
});

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
