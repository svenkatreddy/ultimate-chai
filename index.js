const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const sinonChai = require('sinon-chai');
const dirtyChai = require('dirty-chai');

chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(dirtyChai);

module.exports = chai;