const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../server');

describe('PowerLevels', () => {
  describe('GET /api/v1/powerlevels', (done) => {
    it('should return powerlevels data', function (done) {
      request(app)
        .get('/api/v1/powerlevels')
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.length.above(0);
          done();
        });
    });

    it('should return 404 on other endpoints', function (done) {
      request(app)
        .get('/api/v1/powerlevels/spiderman')
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });
});
