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
  it("should be able to calculate whether enough paint is true", function(){
    decorator.addPaint(paintOne); //10
    decorator.addPaint(paintTwo); //5 total is 15
    const actual = decorator.enoughPaint(roomOne); //area is 12
    assert.strictEqual(actual, true);
  });

  it("should be able to calculate whether enough paint is false", function(){
    decorator.addPaint(paintOne);
    const actual = decorator.enoughPaint(roomOne);
    assert.strictEqual(actual, false);
  });

  // paint room if has enough paint in stock
  it("should be able to paint room if enough paint is true", function(){
    decorator.addPaint(paintOne);
    decorator.addPaint(paintTwo);
    decorator.paintRoom(roomOne);
    const actual = roomOne.painted;
    assert.strictEqual(actual, true)
  });

  it("should be able to paint room if enough paint is false", function(){
    decorator.addPaint(paintOne);
    decorator.paintRoom(roomOne);
    const actual = roomOne.painted;
    assert.strictEqual(actual, false)
  });


})
