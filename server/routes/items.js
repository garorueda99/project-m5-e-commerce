//Endpoints related to items

const router = require('express').Router();
const { items } = require('./routes.helpers');

router.get('/api/item/:itemId', (req, res) => {
  const item = items.find((item) => (item['_id'] = req.params.itemId));
  res.status(200).json(item);
});

router.put('/api/item/:itemId', (req, res) => {
  const { purchasedAmount } = req.body;
  const item = items.find((item) => (item['_id'] = req.params.itemId));
  if (!item) {
    res.sendStatus(404);
    return;
  }

  if (typeof purchasedAmount !== 'number') {
    res.status(400).json({
      error:
        'Please specify a number to reduce from the current item quantity on hand.',
    });
    return;
  }

  if (item.numInStock <= 0) {
    res.status(409).json({
      error:
        'You are not allowed to reduce inventory when quantity on hand is equal to 0.',
    });
    return;
  }

  console.log(item.numInStock);
  item.numInStock = item.numInStock - purchasedAmount;
  console.log(item.numInStock);

  return res.json({ success: true });
});

module.exports = router;
