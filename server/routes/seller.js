//Endpoints related to the sellers

const router = require('express').Router();
const { sellers } = require('./routes.helpers');

router.get('/api/seller/:sellerId', (req, res) => {
  const seller = sellers.find(
    (seller) => (seller['_id'] = req.params.sellerId)
  );
  res.status(200).json(seller);
});

module.exports = router;
