const assert = require('assert');
const app = require('../server');

// Use built-in fetch (Node 18+) and start the app on an ephemeral port for tests.
describe('API', () => {
  let server;
  let base;

  before((done) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      base = `http://127.0.0.1:${port}`;
      done();
    });
  });

  after((done) => {
    server.close(done);
  });

  it('GET / should return status JSON', async () => {
    const res = await fetch(base + '/');
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert(body.app && body.status);
  });

  it('GET /search-tax-deed with parcel_id returns risk', async () => {
    const res = await fetch(base + '/search-tax-deed?parcel_id=C-18-123');
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.risk_score, 40);
    assert.strictEqual(body.risk_level, 'bajo');
  });

  it('GET /search-tax-deed without parcel_id returns 400', async () => {
    const res = await fetch(base + '/search-tax-deed');
    assert.strictEqual(res.status, 400);
  });
});
