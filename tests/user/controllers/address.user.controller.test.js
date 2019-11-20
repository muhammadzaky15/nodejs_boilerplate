require('module-alias/register');

let assert = require('assert');
let expect = require('chai').expect;
let should = require('chai').should();
const { mockRequest, mockResponse } = require('mock-req-res');

const UserAddressController = require('@user/controllers/address.user.controller.js');
const userAddressController = new UserAddressController('Bandung');

it('should return true if valid address', function(){
  this.skip()
  let isValid = userAddressController.getAddress(mockRequest, mockResponse);
  //assert.equal(isValid, true);
  expect(isValid).to.be.true
});

it('should return false if invalid adress', function(){
  this.skip();
  let isValid = userAddressController.isValidAddress('abc1234')
  //assert.equal(isValid, false);
  isValid.should.equal(false)
});