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
  let totalAmount = this.totalPaint(); // forgot the brackets to tell JavaScript that it's a function! :)
  let roomArea = room.area;
  
  if (totalAmount >= roomArea) {
    return true;
  } else if (totalAmount < roomArea) {
    return false;
  };

};

Decorator.prototype.paintRoom = function (room) {
  if (this.enoughPaint(room)) {
    room.hasBeenPainted();
  };
};

module.exports = Decorator;
