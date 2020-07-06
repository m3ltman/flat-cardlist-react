export default function handleLike(id, bool) {
  return fetch(`http://localhost:3004/flats/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      like: bool
    })
  });
}