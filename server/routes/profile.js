/**
  Endpoints related to profile information and user details
*/
const router = require('express').Router();

const { CURRENT_USER_ID } = require('./routes.helpers.js');

let userhistory = [
  {
    id: '1d87dd51-9a56-4877-bfc2-fd4ec93ef58b',
    status: 'pending',
    indexes: {},
  },
];

router.get('/api/me/profile', (req, res) => {
  const profile = CURRENT_USER_ID;
  res.status(200).json(profile);
});

router.get('/api/me/profile/history', (req, res) => {
  const history = userhistory.find(
    (element) => element.status === 'pending' || element.status === 'pending'
  );
  res
    .status(200)
    .json(!!history ? history : { indexes: {}, state: 'empty', articles: [] });
});

router.post('/api/me/profile/history', (req, res) => {
  newCart = req.body;
  const newHistory = userhistory.filter((element) => element.id !== newCart.id);
  userhistory = [...newHistory, newCart];
  // const rest = userhistory.filter((element) => element.id !== history.id),
  //   userhistory = [history];
  return res.json({ success: true });
});
module.exports = router;
