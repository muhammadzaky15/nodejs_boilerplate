//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../../server');
let should = chai.should();
let expect = require('chai').expect;

chai.use(chaiHttp);

//Our parent block
describe('User', () => {
    beforeEach((done) => { //Before each test we empty the database
        done();       
    });
  /*
  * Test the /GET route
  */
  describe('/GET address', () => {
      it('it should GET address', (done) => {
        chai.request(server)
            .get('/get-address')
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.a.property('address');
              done();
            });
      });
  });

});