export async function onRequest() {
  const response = await fetch('https://localhost:8000');
  return response;
}