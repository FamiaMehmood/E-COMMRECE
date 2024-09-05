import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import cartRoutes from './routes/cartRoutes';
import checkoutRoutes from './routes/checkoutRoutes';
import wishlistRoutes from './routes/wishlistRoutes';

const app = express();

mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/wishlist', wishlistRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});