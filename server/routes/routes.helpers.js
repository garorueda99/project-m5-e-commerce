const items = require('../data/items.json');
const sellers = require('../data/companies.json');

// HARDCODED CURRENT USER.
const CURRENT_USER_ID = {
  profile: {
    id: 'garo99',
    displayName: 'Andrea, Aml',
    avatarSrc: '/assets/user1.jpg',
    location: 'Whitehall, London',
    email: 'garo99@gmail.com',
  },
};

module.exports = {
  CURRENT_USER_ID,
  items,
  sellers,
};
