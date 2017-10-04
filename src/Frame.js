function Frame(i, j){
  if(i<0 || j<0){
     throw new Error('Invalid Frame');
  }
  this._firstThrow = i;
  this._secondThrow = j;
};

Frame.prototype.firstThrow = function(){
  return this._firstThrow;
};
Frame.prototype.secondThrow = function(){
  return this._secondThrow;
};

Frame.prototype.isStrike = function(){
  return (this._firstThrow == 10)
};

Frame.prototype.sum = function(){
  return this._firstThrow + this._secondThrow;
};

Frame.prototype.isSpare = function(){
  return (!this.isStrike() && (this._firstThrow + this._secondThrow)==10);
};

module.exports = Frame;
