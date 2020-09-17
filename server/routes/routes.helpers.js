const items = require('../data/items.json');
const sellers = require('../data/companies.json');
const CATEGORIES = [
  'Fitness',
  'Medical',
  'Lifestyle',
  'Entertainment',
  'Industrial',
  'Pets and Animals',
  'Gaming',
];

const BODY_LOCATIONS = [
  'Wrist',
  'Arms',
  'Head',
  'Waist',
  'Chest',
  'Hands',
  'Neck',
  'Feet',
  'Torso',
];

// HARDCODED CURRENT USER.
const CURRENT_USER_ID = {
  profile: {
    id: 'garo99',
    firstName: 'Andrea',
    lastName: 'Aml',
    address: '123 Main Street',
    province: 'Quebec',
    country: 'Canada',
    email: 'garo99@gmail.com',
    avatarSrc: '/assets/user1.jpg',
  },
};

/////INDEXATION FUNCTION DB MAINTENANCE /////

//GET CATEGORY INDEX
function ListOfCategories() {
  const LIST_OF_CATEGORIES = [];
  items.map((element) =>
    LIST_OF_CATEGORIES.includes(element.category)
      ? ''
      : LIST_OF_CATEGORIES.push(element.category)
  );
}

//GET BODY LOCATION INDEX
function ListOfBodyLocations() {
  const LIST_OF_BODY = [];
  items.map((element) =>
    LIST_OF_BODY.includes(element.body_location)
      ? ''
      : LIST_OF_BODY.push(element.body_location)
  );
}

const FILTER_KEYS = [
  'keyword',
  'price_range',
  'body_location',
  'category',
  'query_result_maxqty',
  'initial_index',
  'available',
  'companyId',
];

function filterItems(res, filters) {
  console.log("I'm here", filters);
  let newFilteredItems = [...items];
  for (let filter of Object.keys(filters)) {
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
    }
  }
  console.log();
  newFilteredItems = quantityReview(
    newFilteredItems,
    filters['initial_index'],
    filters['query_result_maxqty']
  );
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

function quantityReview(items, initialIndex = 0, maxQueryResult = 30) {
  const totalFound = items.length;

  const newList = {
    totalFound,
    result: items.slice(initialIndex, maxQueryResult),
  };

  newList.nextIndex = totalFound > maxQueryResult ? maxQueryResult : null;

  return newList;
}

module.exports = {
  CURRENT_USER_ID,
  items,
  sellers,
  FILTER_KEYS,
  filterItems,
  CATEGORIES,
  BODY_LOCATIONS,
};
