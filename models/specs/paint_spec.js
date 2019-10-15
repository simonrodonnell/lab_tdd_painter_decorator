const assert = require("assert");
const Paint = require("../paint.js");

describe("Paint", function(){

  let paint;

  beforeEach( function(){
    paint = new Paint(2)
  });

  it("should have some paint", function(){
    const actual = paint.amount;
    assert.strictEqual(actual, 2);
  });

  it("should check if empty", function(){
    const actual = paint.isEmpty;
    assert.strictEqual(actual, false)
  })

  it("should become empty", function(){
    paint.emptyPaint()
    const actual = paint.isEmpty;
    assert.strictEqual(actual, true);
  })

});
