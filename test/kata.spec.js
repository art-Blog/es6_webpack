var mocha = require('mocha');
var chai = require('chai');

chai.should();

var kata = require('../src/lib/kata')
describe('範例類別', () => {
    it('#測試1', () => {
        var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
        var expected = [10, -65]
        var actual = new kata().Do(data)
        actual.should.deep.equal(expected);
    });
    
    it('#測試2',  () =>{
        var data = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
        var expected = [8, -50];
        var actual = new kata().Do(data)
        actual.should.deep.equal(expected);
    });
    
});

