# Backend

# E-commerce API docs

The E-commerce API is a REST API for an E-commerce App. It offers a limited subset of the kinds of things you can do on a regular E-commerce App.

At this time, there is no user authentication. Instead, a hardcoded user is always logged in, `garo99`. You cannot log out, or switch users.

# Setup and ports

Run `yarn install` to install dependencies, you must be at C:\project-m5-e-commerce\server>

by runnig yarn start from the root it will run at the same time the client and the server side

The server runs on port _4000_, so you can access the server at `http://localhost:4000/`. As a test, you can go to `http://localhost:4000/api/me/profile`. You should see a JSON object shown in the browser:

```json
{
  "profile": {
    "id": "garo99",
    "displayName": "Andrea, Aml",
    "avatarSrc": "/assets/user1.jpg",
    "location": "Whitehall, London",
    "email": "garo99@gmail.com"
  }
}
```

# Endpoints

Endpoints are grouped in 3 categories:

- **buyer** - relating to users/buyers
- **seller** - Relating to sellers/companies
- **item** - single item
- **products** - groups of items

## buyer Endpoints

These endpoints control user-specific things: getting buyer info

### GET /api/me/profile

Get the profile for the currently-logged-in user.

Should come in this structure:

```json
{
  "profile": {
    "id": "garo99",
    "displayName": "Andrea, Aml",
    "avatarSrc": "/assets/user1.jpg",
    "location": "Whitehall, London",
    "email": "garo99@gmail.com"
  }
}
```

## seller Endpoints

These endpoints control seller-specific things: getting seller info

### GET /api/seller/:sellerId

Get the profile for an specific seller.

Should come in this structure:

```json
{
  "name": "Barska",
  "url": "http://www.barska.com/",
  "country": "United States",
  "_id": 19962
}
```

## item Endpoints

### GET /api/item/:itemId

Returns data about the specified item.

Example:

```json
 {
    "name": "Ekho Fit-18 Heart Rate Monitor 12-2042",
    "price": "$105.99",
    "body_location": "Wrist",
    "category": "Fitness",
    "_id": 6549,
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/.............more
    "numInStock": 0,
    "companyId": 17748
  },
```

### PUT /api/item/:itemId

To reduce the inventory once a sale has been posted

**Important**: You'll need to specify the quantity to reduce from the inventory with a JSON body:

```json
{ "purchasedAmount": 3 }
```

If everything goes well, you'll get a response that looks like this:

```json
{
  "success": true
}
```

You'll get an error if you try to sell more than the quantity available

## Filtered Endpoints

A group of items selected by:

- **"keyword":** "Ekho" ==> the word is included in the name
- **"price_range":** [0, 105.99, <exact/near>] ==> the product is widthin the range (min, max)
- **"body_location":** "Wrist" ==> all product for the same body location [<location1, location2,..., locationN>]
- **"category":** ["Fitness"] ==> all product for the same category [<category1>,<category2>,..., <categoryN>]
- **"qty":** [10, <random>] ==> all product for the same category [<qty to return>]

**Important**: You'll need to specify the filters with a JSON body:

```json
{ "keyword": "Ekho", "price_range": "[0, 105.99, exact]", "qty": "10" }
```

All Products endpoints return data in the following structure:

```json
[
  {
    "name": "Ekho Fit-18 Heart Rate Monitor 12-2042",
    "price": "$105.99",
    "body_location": "Wrist",
    "category": "Fitness",
    "_id": 6549,
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/ygggL/AMGYKotCZZn5dlb8842LzMyrOtIO4ToAn0AhuG8EEB6ggggCCCCAIIIIAggggCCCCA//2Q==....more",
    "numInStock": 0,
    "companyId": 17748
  },
  {
    "name": "Ekho FiT-9 Women's Heart Rate Monitor 12-2041",
    "price": "$95.12",
    "body_location": "Wrist",
    "category": "Medical",
    "_id": 6550,
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/VKqIgIiICIiAiIgIiICIiD//Z........more",
    "numInStock": 2,
    "companyId": 17748
  },.....
  ]
```
