import express from 'express';
import mongoose from 'mongoose';
import Wishlist from '../models/Wishlist';

const router = express.Router();

router.get('/', async (req, res) => {
  const wishlist = await Wishlist.find({ userId: req.user.id });
  res.json(wishlist);
});

router.post('/', async (req, res) => {
  const { productId } = req.body;
  const wishlist = await Wishlist.findOne({ userId: req.user.id, productId });
  if (!wishlist) {
    const newWishlist = new Wishlist({ userId: req.user.id, productId });
    await newWishlist.save();
    res.json(newWishlist);
  } else {
    res.status(400).json({ error: 'Product already in wishlist' });
  }
});

router.delete('/:productId', async (req, res) => {
  const { productId } = req.params;
  await Wishlist.findOneAndRemove({ userId: req.user.id, productId });
  res.json({ message: 'Product removed from wishlist' });
});

export default router;