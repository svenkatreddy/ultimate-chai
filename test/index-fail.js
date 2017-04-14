const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');


describe('index.js', () => {
  context('ultimateChai is used', () => {
    it('should have exist method from dirty-chai', (done) => {
      expect('test').to.exist();
      done();
    });
    it('should have false method from dirty-chai', (done) => {
      expect(true).to.be.true.and.not.false();
      done();
    });
    it('should have true method from dirty-chai', (done) => {
      expect(true).to.be.true();
      done();
    });
    it('should have null method from dirty-chai', (done) => {
      expect(null).to.be.null();
      done();
    });
    it('should have exist method from dirty-chai', (done) => {
      expect(undefined).to.be.undefined();
      done();
    });
  });

});