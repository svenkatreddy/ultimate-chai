const ultimateChai = require('../');
const expect = ultimateChai.expect;
const sinon = require('sinon');


describe('index.js', () => {
  context('when ultimateChai is used', () => {
    it('should have ok method from dirty-chai', (done) => {
      expect('ok').to.be.ok();
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
    it('should have exist method from dirty-chai', (done) => {
      expect('test').to.exist();
      done();
    });
    it('should have empty method from dirty-chai', (done) => {
      expect('').to.be.empty();
      done();
    });
    it('should have empty method from dirty-chai', (done) => {
      expect('').to.be.empty();
      done();
    });
  });
  
  context('when ultimateChai is used', () => {
    const testspy = sinon.spy();
    
    it('should have called method from sinon-chai', () => {
      testspy("foo");    
      expect(testspy).to.have.been.called();
    });
        
    it('should have calledWith method from sinon-chai', () => {
      testspy("foo");    
      expect(testspy).to.have.been.calledWith("foo");
    });
    
    it('should have calledWith method from sinon-chai', () => {
      const callCountSpy = sinon.spy();
      callCountSpy();
      callCountSpy('foo');
      callCountSpy('wow');
      expect(callCountSpy).to.have.callCount(3);
    });
    
    it('should have calledOnce method from sinon-chai', () => {
      const callCountSpy = sinon.spy();
      callCountSpy();
      expect(callCountSpy).to.have.been.calledOnce();
    });
    
    it('should have calledTwice method from sinon-chai', () => {
      const callCountSpy = sinon.spy();
      callCountSpy();
      callCountSpy('foo');
      expect(callCountSpy).to.have.been.calledTwice();
    });
    
    it('should have calledThrice method from sinon-chai', () => {
      const callCountSpy = sinon.spy();
      callCountSpy();
      callCountSpy('foo');
      callCountSpy('bar');
      expect(callCountSpy).to.have.been.calledThrice();
    });
    
    it('should have calledBefore method from sinon-chai', () => {
      const spy1 = sinon.spy();
      const spy2 = sinon.spy();
      spy1();
      spy2();
      expect(spy1).to.have.been.calledBefore(spy2);
    });
    
    it('should have calledBefore method from sinon-chai', () => {
      const spy1 = sinon.spy();
      const spy2 = sinon.spy();
      spy1();
      spy2();
      expect(spy1).to.have.been.calledBefore(spy2);
    });
    
    it('should have calledAfter method from sinon-chai', () => {
      const spy1 = sinon.spy();
      const spy2 = sinon.spy();
      spy1();
      spy2();
      expect(spy2).to.have.been.calledAfter(spy1);
    });
    
    it('should have calledAfter method from sinon-chai', () => {
      const spy = sinon.spy();
      new spy();
      expect(spy).to.have.been.calledWithNew();
    });
    
    it('should have alwaysCalledWithNew method from sinon-chai', () => {
      const spy = sinon.spy();
      new spy();
      new spy();
      expect(spy).to.always.have.been.calledWithNew();
    });
    
  });
  
  context('when ultimateChai is used', () => {
    const sampleSuccess = () => new Promise((resolve, reject) => {
     setTimeout(function(){
       resolve({foo: "bar"});
     },100); 
    });
    
    const sampleReject = () => new Promise((resolve, reject) => {
     setTimeout(function(){
       reject(new Error('error'));
     },100); 
    });
        
    it('should have eventually method from chai-as-promised', () => {
      return expect(sampleSuccess()).to.eventually.have.property("foo");
    });
    
    it('should have fulfilled method from chai-as-promised', () => {
      return expect(sampleSuccess()).to.be.fulfilled();
    });
    
    it('should have become method from chai-as-promised', () => {
      return expect(sampleSuccess()).to.become({foo: "bar"});
    });
    
    it('should have rejected method from chai-as-promised', () => {
      return expect(sampleReject()).to.be.rejected();
    });
    
    it('should have rejected method from chai-as-promised', () => {
      return expect(sampleReject()).to.be.rejectedWith(Error);
    });
    
  });

});