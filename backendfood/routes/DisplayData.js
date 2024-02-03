const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
  try {
    // Log to check if global.food_items and global.foodCategory have expected data
    console.log('food_items:', global.food_items);
    console.log('foodCategory:', global.foodCategory);

    res.json([global.food_items, global.foodCategory]);
  } catch (error) {
    // Log any error that might occur during processing
    console.error('foodData route error:', error.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
