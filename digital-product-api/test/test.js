const request = require('supertest');
const app = require('../server');

let chai;
let expect;

(async function () {
  chai = (await import('chai')).default;
  expect = chai.expect;

  describe('Product API', () => {
    it('should create a new product', async () => {
      const response = await request(app)
        .post('/products')
        .send({
          productId: "123456",
          productName: 'Test Product',
          productDescription: "This is a test product",
          price: 100,
          availabilityStatus: true
        })
        .expect('Content-Type', /json/)
        .expect(201);
      
      expect(response.body).to.have.property('_id');
      expect(response.body.productName).to.equal('Test Product');
    });

    it('should get all products', async () => {
      const response = await request(app)
        .get('/products')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(response.body).to.be.an('array');
    });

    it('should get a product by ID', async () => {
      // Assuming the ID '123456' exists
      const response = await request(app)
        .get('/products/123456')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(response.body).to.have.property('_id');
    });

    it('should update a product', async () => {
      // Assuming the ID '123456' exists
      const response = await request(app)
        .put('/products/123456')
        .send({
          price: 150,
        })
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(response.body.price).to.equal(150);
    });

    it('should delete a product', async () => {
      // Assuming the ID '123456' exists
      await request(app)
        .delete('/products/123456')
        .expect(200);
    });
  });
})();
