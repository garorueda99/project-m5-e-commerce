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
