const Paint = function(amount){
  this.amount = amount;
  this.isEmpty = false;
}

Paint.prototype.emptyPaint = function () {
  this.isEmpty = true;
};

module.exports = Paint;
