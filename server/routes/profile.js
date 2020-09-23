/**
  Endpoints related to profile information and user details
*/
const router = require('express').Router();

const { CURRENT_USER_ID } = require('./routes.helpers.js');

const userhistory = [
  {
    id: '1d87dd51-9a56-4877-bfc2-fd4ec93ef58b',
    status: 'pending',
    cart: { 6625: 1 },
  },
];

router.get('/api/me/profile', (req, res) => {
  const profile = CURRENT_USER_ID;
  res.status(200).json(profile);
});

router.get('/api/me/profile/history', (req, res) => {
  const history = userhistory.find((element) => element.status === 'pending');
  console.log("I'm here", history);
  res.status(200).json(!!history ? history : {});
});

router.post('/api/me/profile/history', (req, res) => {
  let history = userhistory.find((element) => element.status === 'pending');
  history = !!history ? history : {};
  if (Object.keys(history).length !== 0) {
    history.cart = req.body;
    return res.json({ success: true });
  }
  res.sendStatus(404);
});
module.exports = router;
