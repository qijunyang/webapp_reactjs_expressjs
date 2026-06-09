const request = require('supertest');
const app = require('./server');

describe('GET /health', () => {
  it('returns status 200 with body { status: "UP" }', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'UP' });
  });
});
