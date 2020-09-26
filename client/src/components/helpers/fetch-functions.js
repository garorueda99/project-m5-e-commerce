export async function fetchItems(filters = '') {
  const url = `/api/items/?${filters}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log('FETCHING ITEMS ERROR', err));
  return response;
}

export async function fetchItem(id) {
  const url = `/api/item/${id}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(`FETCHING ITEM ${id} ERROR`, err));
  return response;
}

export async function postCart(cart) {
  console.log('==>', cart);
  const url = `/api/me/profile/history`;
  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(cart),
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.log(`POSTING CART ${cart} ERROR`, err));
  return response;
}

export async function fetchCart() {
  const url = `/api/me/profile/history`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(`FETCHING USER CART ERROR`, err));
  return response;
}
