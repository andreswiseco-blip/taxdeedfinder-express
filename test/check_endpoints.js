// small health-check script for local development
// Usage: start the server (PORT=3000 node server.js) then run: node test/check_endpoints.js

const base = process.env.BASE_URL || 'http://localhost:3000';

async function check(path) {
  try {
    const res = await fetch(base + path);
    const json = await res.json();
    console.log(path, '=>', res.status);
    console.log(JSON.stringify(json, null, 2));
  } catch (err) {
    console.error(path, 'ERROR:', err.message);
  }
}

async function main() {
  console.log('Checking', base);
  await check('/');
  await check('/search-tax-deed?parcel_id=C-18-123');
  await check('/search-tax-deed');
}

main();
