const assert = require("assert");
const Decorator = require("../decorator.js")
const Paint = require("../paint.js")
const Room = require("../room.js")

describe("Decorator", function(){

  let decorator;

  beforeEach( function(){
    decorator = new Decorator();
    paintOne = new Paint(10);
    paintTwo = new Paint(5);
    roomOne = new Room(12);
  });

  it("should have an empty paint stock", function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [])
  });

  it("should have paint added", function(){
    decorator.addPaint(paintOne);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1);
  });

  // calculate total litres paint it has in stock
  it("should have total amount of litres", function(){
    decorator.addPaint(paintOne);
    decorator.addPaint(paintTwo);
    const actual = decorator.totalPaint();
    assert.strictEqual(actual, 15);
  })


  // calculate whether is has enough paint
  it("should be able to calculate whether it has enough paint", function(){
    decorator.addPaint(paintOne);
    decorator.addPaint(paintTwo);
    const actual = decorator.enoughPaint(roomOne);
    assert.strictEqual(actual, false);

  })

  // paint room if has enough paint in stock


})
