export async function fetchItems(filters = {}) {
  const status = { key: 'hello' };
  const url = '/api/items/';
  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(filters),
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.log('FETCHING ITEMS ERROR', err));
  return response;
}
