const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const sinonChai = require('sinon-chai');
const dirtyChai = require('dirty-chai');
const chaiEnzyme = require('chai-enzyme');

chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(dirtyChai);
chai.use(chaiEnzyme());

module.exports = chai;