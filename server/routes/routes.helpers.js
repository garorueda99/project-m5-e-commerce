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

const FILTER_KEYS = [
  'keyword',
  'price_range',
  'body_location',
  'category',
  'query_result_qty',
  'available',
  'companyId',
];

function filterItems(res, filters) {
  let newFilteredItems = [...items];

  for (let filter of Object.keys(filters)) {
    console.log(filter);
    switch (filter) {
      case 'price_range':
        newFilteredItems = filterByPrice(newFilteredItems, ...filters[filter]);
        break;
      case 'body_location':
        newFilteredItems = filterByBodyLocation(
          newFilteredItems,
          ...filters[filter]
        );
        break;
      case 'keyword':
        newFilteredItems = filterByKeyword(
          newFilteredItems,
          filters['keyword']
        );
        break;
      case 'available':
        newFilteredItems = filterByAvailability(
          newFilteredItems,
          filters['available']
        );
        break;
      case 'companyId':
        newFilteredItems = filterByCompanyId(
          newFilteredItems,
          filters['companyId']
        );
        break;
      case 'category':
        newFilteredItems = filterByCategory(
          newFilteredItems,
          filters['category']
        );
        break;
      default:
        return [];
    }
  }
  res.status(200).json(newFilteredItems);
  return;
}

function filterByPrice(items, min, max) {
  if (max < min) {
    return [];
  }
  const newList = items.filter(
    (element) =>
      Number(element.price.replace(/[^0-9\.-]+/g, '')) <= max &&
      Number(element.price.replace(/[^0-9\.-]+/g, '')) >= min
  );
  return newList;
}

function filterByBodyLocation(items, bodyLocation) {
  //Missing to work with complex body_location = 2 or more
  const newList = items.filter(
    (element) =>
      element.body_location.toLowerCase() === bodyLocation.toLowerCase()
  );
  return newList;
}

function filterByKeyword(items, keyword) {
  const newList = items.filter((element) =>
    element.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return newList;
}

function filterByAvailability(items, flag) {
  const newList = items.filter((element) =>
    flag ? element.numInStock > 0 : element.numInStock <= 0
  );

  return newList;
}

function filterByCompanyId(items, companyId) {
  const newList = items.filter((element) => element.companyId === companyId);

  return newList;
}

function filterByCategory(items, category) {
  const newList = items.filter(
    (element) => element.category.toLowerCase() === category.toLowerCase()
  );
  return newList;
}

module.exports = {
  CURRENT_USER_ID,
  items,
  sellers,
  FILTER_KEYS,
  filterItems,
};
