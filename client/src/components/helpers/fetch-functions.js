export async function fetchItems(filters = '') {
  const url = `/api/items/?${filters}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch(function (error) {
      if (error.status == 404) {
        window.location.href = '/404';
      } else {
        window.location.href = '/technical-issue';
      }
    });
  return response;
}

export async function fetchItem(id) {
  const url = `/api/item/${id}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch(function (error) {
      if (error.status == 404) {
        window.location.href = '/404';
      } else {
        window.location.href = '/technical-issue';
      }
    });
  return response;
}

export async function postCart(cart) {
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
    .catch(function (error) {
      if (error.status == 404) {
        window.location.href = '/404';
      } else {
        window.location.href = '/technical-issue';
      }
    });
  return response;
}

export async function fetchCart() {
  const url = `/api/me/profile/history`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch(function (error) {
      if (error.status == 404) {
        window.location.href = '/404';
      } else {
        window.location.href = '/technical-issue';
      }
    });
  return response;
}
