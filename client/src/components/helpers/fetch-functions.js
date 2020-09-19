export async function fetchItems(filters = '') {
  const url = `/api/items/?${filters}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log('FETCHING ITEMS ERROR', err));
  return response;
}
