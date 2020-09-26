/**
  Endpoints related to profile information and user details
*/
const router = require('express').Router();

const { CURRENT_USER_ID } = require('./routes.helpers.js');

const userhistory = [
  {
    id: '1d87dd51-9a56-4877-bfc2-fd4ec93ef58b',
    status: 'pending',
    indexes: {},
    articles: [],
  },
];

router.get('/api/me/profile', (req, res) => {
  const profile = CURRENT_USER_ID;
  res.status(200).json(profile);
});

router.get('/api/me/profile/history', (req, res) => {
  const history = userhistory.find((element) => element.status === 'pending');
  res
    .status(200)
    .json(!!history ? history : { indexes: {}, state: 'empty', articles: [] });
});

router.post('/api/me/profile/history', (req, res) => {
  let history = userhistory.find((element) => element.status === 'pending');
  history = !!history ? history : {};
  if (Object.keys(history).length !== 0) {
    history = req.body;
    // these following two lines seem to be superfluous but generated errors - RL
    // const rest = userhistory.filter((element) => element.id !== history.id),
    //   userhistory = [history];
    console.log('USER_HISTORY', userhistory);
    return res.json({ success: true });
  }
  res.sendStatus(404);
});
module.exports = router;
