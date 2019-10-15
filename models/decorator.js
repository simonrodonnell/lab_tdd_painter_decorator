const Decorator = function(){
  this.stock = [];
};

Decorator.prototype.addPaint = function (paint) {
  this.stock.push(paint);
};

Decorator.prototype.totalPaint = function () {
  let total = 0
  for(let currentPaint of this.stock){
    total += currentPaint.amount
  }
  return total;
};

Decorator.prototype.enoughPaint = function (room) {
  let totalAmount = this.totalPaint
  let roomArea = room.area

  let enoughPaintBoolean;

  if (totalAmount >= roomArea) {
    enoughPaintBoolean = true;
  } else if (totalAmount < roomArea) {
    enoughPaintBoolean = false;
  };

  return enoughPaintBoolean;

};

module.exports = Decorator;
