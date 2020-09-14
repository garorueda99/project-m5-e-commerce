/**
  Endpoints related to profile information and user details
*/
const router = require('express').Router();

const { CURRENT_USER_ID } = require('./routes.helpers.js');

router.get('/api/me/profile', (req, res) => {
  const profile = CURRENT_USER_ID;
  res.status(200).json(profile);
});

module.exports = router;
