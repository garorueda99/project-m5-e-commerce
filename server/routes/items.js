//Endpoints related to items

const router = require('express').Router();
const { items, FILTER_KEYS, filterItems } = require('./routes.helpers');

router.get('/api/items', (req, res) => {
  const body = req.body;
  if (JSON.stringify(body) === '{}') {
    res.status(200).json(items.slice(0, 30));
    return;
  }
  const validKeys = Object.keys(body).filter((element) =>
    FILTER_KEYS.includes(element)
  );

  if (validKeys.length === 0) {
    res.status(406).json({
      error: 'key not valid for filter',
    });
    return;
  }
  let filters = {};
  for (let filter of validKeys) {
    filters[filter] = body[filter];
  }
  return filterItems(res, filters);
});

router.get('/api/item/:itemId', (req, res) => {
  const item = items.find(
    (item) => item['_id'] === parseInt(req.params.itemId)
  );
  res.status(200).json(item);
});

router.put('/api/items/reduce', (req, res) => {
  const reducer = req.body;
  for (let element of Object.keys(reducer)) {
    const item = items.find((item) => item['_id'] === parseInt(element));

    if (!item) {
      res.sendStatus(404);
      return;
    }

    if (typeof reducer[element] !== 'number') {
      res.status(400).json({
        error:
          'Please specify a number to reduce from the current item quantity on hand.',
      });
      return;
    }

    if (item.numInStock < reducer[element]) {
      res.status(409).json({
        error:
          'You are not allowed to reduce inventory when quantity available is less than  quantity on hand.',
        _id: element,
      });
      return;
    }
    item.numInStock = item.numInStock - reducer[element];
  }
  return res.json({ success: true });
});

module.exports = router;
