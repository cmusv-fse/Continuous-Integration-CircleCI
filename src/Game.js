var Frame = require('./Frame.js');

function Game(){
    this._frames = [];
    this._bonusThrow = 0;
    this._bonusThrows = [];
    this._gameSize = 10;
};

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
};

Game.prototype.score = function() {
      var gameScore = 0;
      for(var i=0;i<10;i++){
        gameScore += this.frameScore(i+1);
      }
      return gameScore;
};

Game.prototype.isStrike = function(i) {
		return this._frames[i-1].isStrike();
};

Game.prototype.bonusThrowsScores = function() {
		var total = 0;
		for(var i=0;i<2;i++) {

			total+=this._bonusThrows[i] || 0;
		}
		return total;
};

Game.prototype.frameScore = function(i) {

		if( i < this._gameSize && this._frames[i].isStrike() && this._frames[i-1].isStrike()) {
			if (i+1 == 10) {
				return (this._frames[i-1].sum() + this._frames[i].sum()) + this._bonusThrows[0];
			} else {
				return(this._frames[i-1].sum() +
						this._frames[i].sum() +
						this._frames[i+1].firstThrow());
			}

		}
		else if (this._frames[i-1].isStrike()) {
			if (i < this._gameSize) {
				return (this._frames[i-1].sum() +	this._frames[i].sum());
			}else {
				return this._frames[i-1].sum()+this.bonusThrowsScores();
			}
		}
		else if(i < this._gameSize
				&& this._frames[i-1].isSpare()
				&& this._frames[i].isSpare()) {
			return this._frames[i-1].sum();
		}
		else if(this._frames[i-1].isSpare()) {
			if (i < this._gameSize) {
				return (this._frames[i-1].sum() +
				this._frames[i].firstThrow());
			} else {
				return this._frames[i-1].sum()+this.bonusThrowsScores();
			}
		}
		else {
			return this._frames[i-1].sum();
		}
};

Game.prototype.isSpare = function(i) {
  return this._frames[i-1].isSpare();
};

Game.prototype.addBonusThrow = function(bonusThrow) {
  this._bonusThrows[this._bonusThrow++] = bonusThrow;
};

module.exports = Game;
