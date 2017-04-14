# ultimate-chai
[![Build Status](https://travis-ci.org/svenkatreddy/ultimate-chai.svg?branch=master)](https://travis-ci.org/svenkatreddy/ultimate-chai)

[![NPM](https://nodei.co/npm/json-remote-search.png?stars=true)](https://nodei.co/npm/ultimate-chai/)

chai with sinon-chai, dirty-chai, sinon-as-promised with mixed features


## Install
```
npm install ultimate-chai --save-dev

```

# Dirty Chai Assertions

The following built-in assertions are modified by this plugin to now use the function-call form:

<table>
    <thead>
        <tr>
            <th>method</th>
            <th>assertion</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ok</td>
            <td>expect('sample').to.be.ok()</td>
        </tr>
        <tr>
            <td>true</td>
            <td>expect(true).to.be.true()</td>
        </tr>
        <tr>
            <td>false</td>
            <td>expect(false).to.be.true()</td>
        </tr>
        <tr>
            <td>null</td>
            <td>expect(null).to.be.null()</td>
        </tr>
        <tr>
            <td>undefined</td>
            <td>expect(undefined).to.be.true()</td>
        </tr>
        <tr>
            <td>exist</td>
            <td>expect('sample').to.exist()</td>
        </tr>
        
        <tr>
            <td>empty</td>
            <td>expect('').to.empty()</td>
        </tr>
        <tr>
            <td>arguments</td>
            <td>arguments()</td>
        </tr>
        <tr>
            <td>Arguments</td>
            <td>Arguments()</td>
        </tr>
        
    </tbody>
</table>

## Examples

```
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
```

# chai-as-promised

Please note there is () invocation at end

```
return promise.should.be.fulfilled();
return promise.should.eventually.deep.equal("foo");
return promise.should.become("foo"); // same as `.eventually.deep.equal`
return promise.should.be.rejected();
return promise.should.be.rejectedWith(Error); // other variants of Chai's `throw` assertion work too.

```

## Examples

```
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
```


# Sinon.JS Assertions for Chai

please note the difference all methods ends with () invocation

All of your favorite Sinon.JS assertions made their way into Sinon–Chai. We show the `should` syntax here; the `expect`
equivalent is also available.

<table>
    <thead>
        <tr>
            <th>Sinon.JS property/method</th>
            <th>Sinon–Chai assertion</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>called</td>
            <td>spy.should.have.been.called()</td>
        </tr>
        <tr>
            <td>callCount</td>
            <td>spy.should.have.callCount(n)</td>
        </tr>
        <tr>
            <td>calledOnce</td>
            <td>spy.should.have.been.calledOnce()</td>
        </tr>
        <tr>
            <td>calledTwice</td>
            <td>spy.should.have.been.calledTwice()</td>
        </tr>
        <tr>
            <td>calledThrice</td>
            <td>spy.should.have.been.calledThrice()</td>
        </tr>
        <tr>
            <td>calledBefore</td>
            <td>spy1.should.have.been.calledBefore(spy2)</td>
        </tr>
        <tr>
            <td>calledAfter</td>
            <td>spy1.should.have.been.calledAfter(spy2)</td>
        </tr>
        <tr>
            <td>calledWithNew</td>
            <td>spy.should.have.been.calledWithNew()</td>
        </tr>
        <tr>
            <td>alwaysCalledWithNew</td>
            <td>spy.should.always.have.been.calledWithNew()</td>
        </tr>
        <tr>
            <td>calledOn</td>
            <td>spy.should.have.been.calledOn(context)</td>
        </tr>
        <tr>
            <td>alwaysCalledOn</td>
            <td>spy.should.always.have.been.calledOn(context)</td>
        </tr>
        <tr>
            <td>calledWith</td>
            <td>spy.should.have.been.calledWith(...args)</td>
        </tr>
        <tr>
            <td>alwaysCalledWith</td>
            <td>spy.should.always.have.been.calledWith(...args)</td>
        </tr>
        <tr>
            <td>calledWithExactly</td>
            <td>spy.should.have.been.calledWithExactly(...args)</td>
        </tr>
        <tr>
            <td>alwaysCalledWithExactly</td>
            <td>spy.should.always.have.been.calledWithExactly(...args)</td>
        </tr>
        <tr>
            <td>calledWithMatch</td>
            <td>spy.should.have.been.calledWithMatch(...args)</td>
        </tr>
        <tr>
            <td>alwaysCalledWithMatch</td>
            <td>spy.should.always.have.been.calledWithMatch(...args)</td>
        </tr>
        <tr>
            <td>returned</td>
            <td>spy.should.have.returned(returnVal)</td>
        </tr>
        <tr>
            <td>alwaysReturned</td>
            <td>spy.should.have.always.returned(returnVal)</td>
        </tr>
        <tr>
            <td>threw</td>
            <td>spy.should.have.thrown(errorObjOrErrorTypeStringOrNothing)</td>
        </tr>
        <tr>
            <td>alwaysThrew</td>
            <td>spy.should.have.always.thrown(errorObjOrErrorTypeStringOrNothing)</td>
        </tr>
    </tbody>
</table>

## examples

```
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
```