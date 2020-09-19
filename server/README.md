# Backend

# E-commerce API docs

The E-commerce API is a REST API for an E-commerce App. It offers a limited subset of the kinds of things you can do on a regular E-commerce App.
At this time, there is no user authentication. Instead, a hardcoded user is always logged in as `garo99`. You cannot log out, or switch users for now.

# Setup and ports

Run `yarn install` to install dependencies, you must be at .\project-m5-e-commerce\server>. From there you can also execute `yarn start` and will start the backend up

By running `yarn start` from the root .\project-m5-e-commerce> it will run at the same time the client and the server sides.

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

Endpoints are grouped into 3 categories:

- **buyer** - relating to users/buyers
- **seller** - Relating to sellers/companies
- **items** - single item / group of filtered items / info about available categories or body locations

## Buyer Endpoints

This endpoint control user-specific things: getting buyer info

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

## Seller Endpoints

These endpoints control seller-specific things: getting seller info

### GET /api/seller/:sellerId

Get the profile for a specific seller.

Should come in this structure:

```json
{
  "name": "Barska",
  "url": "http://www.barska.com/",
  "country": "United States",
  "_id": 19962
}
```

## Item Endpoints

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
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/.............more",
    "numInStock": 0,
    "companyId": 17748
  },
```

### PUT /api/item/reduce

Reduces the inventory once a sale has been posted

**Important**: You'll need to specify the quantity to reduce from the inventory with a JSON body:

```json
{ "6547": 3, "6625": 2 }
```

If everything goes well, you'll get a response that looks like this:

```json
{
  "success": true
}
```

You'll get an error if you try to sell more than the quantity available

## Filtered Endpoints

## OPTION 1 - DEPRECATED

### GET <POST> /api/items

- if body not present will sent firts 30,
- if body will send result according to the filter parameters

A group of items selected by:

- **"keyword":** "Ekho" ==> the word is included in the name. Doesn't not requiere a exact match of capital letters. Type: string

- **"price_range":** [0, 105.99] ==> the product is widthin the range (min, max). If the array has more than 2 elements, the elements after the secondone won't be taken into account. Type: array of two elements = [type: float, type: float]

- **"body_location":** "Wrist" ==> all product for the same body location [<location1, location2,..., locationN>].Doesn't not requiere a exact match of capital letters.
  Type: array of many elements as body_locations [Type: string,...., Type: string]

- **"category":** ["Fitness"] ==> all product for the same category [<category1>,. <category2>,..., <categoryN>]Doesn't not requiere a exact match of capital letters.
  Type: array of many elements as categories [Type: string,...., Type: string]

- **"query_result_maxqty":** 10, ==> # of results of filterd products that the front wants to receive [<qty to return>] Type: integer

- **"available":** true/false ==> the product is available in the inventory.
  True = more than 0 on hand / False = no available. Type: boolean

- **"companyId":** Products of the same company. Type: integer

- **"initial_index":** This will let the back know where in the array found will start sending the info. E.G. It was found 230 items. but will sent up 30.
  therefore if you need the next 30, it will requiere that this is set as 31. Type: integer

**Important**: You'll need to specify the filters with a JSON body:

```json
{
  "keyword": "Ekho",
  "price_range": "[0, 105.99, exact]",
  "query_result_maxqty": "10"
}
```

## OPTION 2

### GET /api/items

```
http://localhost:4000/api/items/?keyword="watch"&min=3&max=100.5
```

Using route query parameters. if doubts check this article

https://stackabuse.com/get-query-strings-and-parameters-in-express-js/

Will process the following keys:

- **keyword=**"long string" ==> each keyword separated by an space. for now the search won't be strict.

- **min=** number ==> min. price accepted.
  send float numbers width two decimal positions

- **max=** number ==> max. price accepted.
  send float numbers width two decimal positions

- **body_location=** "long string" ==> All products that matches the body location(s). Each word on the string will be used as a location. Doesn't not requiere a exact match of capital letters.
- **category=** "long string" ==> All products that matches the category/categories. Each word on the string will be used as a category. not requiere a exact match of capital letters.
- **query_result_maxqty=** 10, ==> # of results of filterd products that the front wants to receive [<qty to return>] Type: integer

- **available=** true/false ==> the product is available in the inventory.
  True = more than 0 on hand / False = no available. Type: boolean

- **companyId=** Products of the same company. Type: integer

- **initial_index=** This will let the back know where in the array found, it will start sending the info. E.G. by default when there aren't any filters, it means all products. However, for security and efficiency purposes, the BE will only return the first 30. The FE can ask for fewer results using query_result_maxqty but not more. Therefore if the user wants to check all items it will be required to send as many requests (fetch) as items/query_result_maxqty or items/30 and set in each request the initial_index. E.G, first request, the FE receives the first 30 items of 248, in order to receive the next tranche, 31 to 60, the initial index_should be 30. Remember that positions in an array start in 0.

All Products endpoints return data in the following structure:

totalFound: returns the total amount of items found with the query 👆
Result: returns the number of items found up to 30. If the query 👆 includes _query_result_maxqty_ parameter it will return as many items as defined there, up to 30.

Because the Back-end probably won't pass all items the response will include the  
"nextIndex" key. that let know the front-end what index should request to show when the user ask for more items or qhen rendering E.G. page 2 of 4 or page 3 of 4, etc

```json
{
  "nextIndex": 6,
  "totalFound": 269,
  "result": [
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
    },
    "..."
  ]
}
```

It provides an array with a list of all the categories

```json
{
  "categories": [
    "Fitness",
    "Medical",
    "Lifestyle",
    "Entertainment",
    "Industrial",
    "Pets and Animals",
    "Gaming"
  ]
}
```

### GET /api/items/body_locations

It provides an array with a list of all the body locations

```json
{
  "body_locations": [
    "Wrist",
    "Arms",
    "Head",
    "Waist",
    "Chest",
    "Hands",
    "Neck",
    "Feet",
    "Torso"
  ]
}
```
