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
  'min',
  'max',
  'body_location',
  'category',
  'query_result_maxqty',
  'initial_index',
  'available',
  'companyId',
];

function filterItems(res, obj) {
  clearObj(obj);
  let newFilteredItems = [...items];
  for (let filter of Object.keys(obj)) {
    switch (filter) {
      case 'min':
        newFilteredItems = filterByMinPrice(newFilteredItems, obj[filter]);
        break;
      case 'max':
        newFilteredItems = filterByMaxPrice(newFilteredItems, obj[filter]);
        break;
      case 'body_location':
        newFilteredItems = filterByBodyLocation(newFilteredItems, obj[filter]);
        break;
      case 'keyword':
        newFilteredItems = filterByKeyword(newFilteredItems, obj[filter]);
        break;
      case 'available':
        newFilteredItems = filterByAvailability(newFilteredItems, obj[filter]);
        break;
      case 'companyId':
        newFilteredItems = filterByCompanyId(newFilteredItems, obj[filter]);
        break;
      case 'category':
        newFilteredItems = filterByCategory(newFilteredItems, obj[filter]);
        break;
      default:
    }
  }
  newFilteredItems = reviewQtyOfItemsInResponse(
    newFilteredItems,
    obj['initial_index'],
    obj['query_result_maxqty']
  );
  res.status(200).json(newFilteredItems);
  return;
}

function filterByMinPrice(items, min) {
  let minfloat = parseFloat(min);
  if (minfloat < 0) {
    minfloat = 0;
  }

  // /[^0-9\.-]+/g regex to validate is is a Number
  const newList = items.filter(
    (element) => Number(element.price.replace(/[^0-9\.-]+/g, '')) >= minfloat
  );
  return newList;
}

function filterByMaxPrice(items, max) {
  let maxfloat = parseFloat(max);
  if (maxfloat < 0) {
    maxfloat = 0;
  }

  // /[^0-9\.-]+/g regex to validate is is a Number
  const newList = items.filter(
    (element) => Number(element.price.replace(/[^0-9\.-]+/g, '')) <= maxfloat
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

//Removes this characters from the values |&;$%@"'<>()+,
function clearObj(obj) {
  for (const [key, value] of Object.entries(obj)) {
    obj[key] = obj[key].replace(/[|&;$%@"'<>()+,]/g, '');
  }
}

function filterByKeyword(items, keyword) {
  const newList = items.filter((element) =>
    element.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return newList;
}

function filterByAvailability(items, flag) {
  const newList = items.filter((element) =>
    flag.toLowerCase() === 'true'
      ? element.numInStock > 0
      : element.numInStock <= 0
  );

  return newList;
}

function filterByCompanyId(items, companyId) {
  const intCompanyId = parseInt(companyId);
  const newList = items.filter((element) => element.companyId === intCompanyId);

  return newList;
}

function filterByCategory(items, category) {
  const newList = items.filter(
    (element) => element.category.toLowerCase() === category.toLowerCase()
  );
  return newList;
}

function reviewQtyOfItemsInResponse(
  items,
  initialIndex = 0,
  maxQueryResult = 30
) {
  const totalFound = items.length;
  const initialPoint = parseInt(initialIndex);
  const endPoint = initialPoint + parseInt(maxQueryResult);
  const newList = {
    totalFound,
    result: items.slice(initialPoint, endPoint),
  };

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
