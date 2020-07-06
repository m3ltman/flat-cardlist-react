export default function getData() {
  return fetch(`http://localhost:3004/flats`, {
    headers: { 'Content-Type': 'application/json' },
  });
} 