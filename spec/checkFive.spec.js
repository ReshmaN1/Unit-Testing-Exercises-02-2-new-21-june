const checkFive = require('../checkFive.js');
const assert = require('assert');

describe("checkFive", function(){

   it("checkFive should return 'num' is less than 5 when passed a number less than 5.", function(){
      let output =  assert  ('+2 is less than 5.') ;
      assert.strictEqual(output, "+ 2 is less than 5.");
   });
it("checkFive should return 'num' is less than 5 when passed a number grater than 5.", function(){
      let output =  assert  ('+2 is less than 5.') + '2 is graterthan 5';
      assert.strictEqual(output, " +2 is less than 5.");
   });
it("checkFive should return 'num' is less than 5 when passed a number grater than 5.", function(){
      let output =  assert  ('2 is less than 5.') + '2 is graterthan 5';
      assert.strictEqual(output, "2 is less than 5.");
   });

});
