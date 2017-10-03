var expect = require('expect.js');
var Frame = require('../src/Frame.js');
var Game = require('../src/Game.js');


suite('Bowling Score Test', function(){

  test('Create Frame', function(done){
        var frame = new Frame(2,4);
        expect(2).to.eql(frame.firstThrow());
        expect(4).to.eql(frame.secondThrow());
        done();
  });

  test('Frame Score', function(done){
        var frame = new Frame(2,6);
        expect(8).to.eql(frame.sum());
        done();
  });

  test('Game Score', function(done){
        var game = new Game();
        game.addFrame(new Frame(1,5));
        game.addFrame(new Frame(3,6));
        game.addFrame(new Frame(7,2));
        game.addFrame(new Frame(3,6));
        game.addFrame(new Frame(4,4));
        game.addFrame(new Frame(5,3));
        game.addFrame(new Frame(3,3));
        game.addFrame(new Frame(4,5));
        game.addFrame(new Frame(8,1));
        game.addFrame(new Frame(2,6));
        expect(81).to.eql(game.score());
        done();
  });

  test('Identify Strike Frame', function(done){
    	var frame = new Frame(10,0);
    	expect(frame.isStrike()).to.be.ok();
    	frame = new Frame(9,1);
    	expect(frame.isStrike()).to.not.be.ok();
      done();
  });

  test('Score A Strike Frame', function(done){
    	var game = new Game();
    	game.addFrame(new Frame(1,5));
        game.addFrame(new Frame(3,6));
        game.addFrame(new Frame(10,0));
        game.addFrame(new Frame(9,1));
        expect(game.isStrike(3)).to.be.ok();
        expect(20).to.be.eql(game.frameScore(3));
        done();
  });

  test('Identify Spare Frame', function(done){
    	var frame = new Frame(1,9);
    	expect(frame.isSpare()).to.be.ok();
    	frame = new Frame(0,9);
      expect(frame.isSpare()).to.not.be.ok();
      done();
  });

  test('Score A Spare Frame', function(done){
    	var game = new Game();
    	game.addFrame(new Frame(1,5));
      game.addFrame(new Frame(3,6));
      game.addFrame(new Frame(1,9));
      game.addFrame(new Frame(3,6));
      expect(game.isSpare(3)).to.be.ok();
      expect(13).to.eql(game.frameScore(3));
      done();
  });

  test('Strike Followed By Spare', function(done){
    	var game = new Game();
    	game.addFrame(new Frame(10,0));
      game.addFrame(new Frame(5,5));
      game.addFrame(new Frame(3,6));

      expect(20).to.eql(game.frameScore(1));
      expect(13).to.eql(game.frameScore(2));
      done();
  });

  test('Identify Multiple Strikes', function(done){
    	var game = new Game();
    	game.addFrame(new Frame(10,0));
      game.addFrame(new Frame(10,0));
      expect(game.isStrike(1) && game.isStrike(2)).to.be.ok();
      done();
  });

  test('Multiple Strike Score First Strike', function(done){
    	var game = new Game();
    	game.addFrame(new Frame(10,0));
      game.addFrame(new Frame(10,0));
      game.addFrame(new Frame(7,2));
      expect(27).to.eql(game.frameScore(1));
      done();
  });

  test('MulipleStrikeScoreSecondStrike', function(done){
    	var game = new Game();
    	game.addFrame(new Frame(10,0));
      game.addFrame(new Frame(10,0));
      game.addFrame(new Frame(7,2));
      expect(19).to.eql(game.frameScore(2));
      done();
  });

  test('Multiple Strikes Game Score', function(done){
    	var game = new Game();
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(7,2));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(4,4));
    	game.addFrame(new Frame(5,3));
    	game.addFrame(new Frame(3,3));
    	game.addFrame(new Frame(4,5));
    	game.addFrame(new Frame(8,1));
    	game.addFrame(new Frame(2,6));

    	expect(112).to.eql(game.score());
      done();
  });

  test('Multiple Spares', function(done){
    	var game = new Game();

    	game.addFrame(new Frame(8,2));
    	game.addFrame(new Frame(5,5));
    	game.addFrame(new Frame(7,2));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(4,4));
    	game.addFrame(new Frame(5,3));
    	game.addFrame(new Frame(3,3));
    	game.addFrame(new Frame(4,5));
    	game.addFrame(new Frame(8,1));
    	game.addFrame(new Frame(2,6));


    	expect(10).to.eql(game.frameScore(1));
    	expect(17).to.eql(game.frameScore(2));

    	//check later
    	expect(93).to.eql(game.score());
      done();
  });

  test('Is Last Spare', function(done){
    	var game = new Game();

    	game.addFrame(new Frame(1,5));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(7,2));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(4,4));
    	game.addFrame(new Frame(5,3));
    	game.addFrame(new Frame(3,3));
    	game.addFrame(new Frame(4,5));
    	game.addFrame(new Frame(8,1));
    	game.addFrame(new Frame(2,8));

    	expect(game.isSpare(10)).to.be.ok();
      done();
  });

  test('Last Spare Score', function(done){
    	var game = new Game();

    	game.addFrame(new Frame(1,5));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(7,2));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(4,4));
    	game.addFrame(new Frame(5,3));
    	game.addFrame(new Frame(3,3));
    	game.addFrame(new Frame(4,5));
    	game.addFrame(new Frame(8,1));
    	game.addFrame(new Frame(2,8));
    	game.addBonusThrow(7);

    	expect(17).to.eql(game.frameScore(10));
    	expect(90).to.eql(game.score());
      done();
  });

  test('Last Frame Strike', function(done){
    	var game = new Game();

    	game.addFrame(new Frame(1,5));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(7,2));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(4,4));
    	game.addFrame(new Frame(5,3));
    	game.addFrame(new Frame(3,3));
    	game.addFrame(new Frame(4,5));
    	game.addFrame(new Frame(8,1));
    	game.addFrame(new Frame(10,0));
    	game.addBonusThrow(7);
    	game.addBonusThrow(2);

    	expect(19).to.eql(game.frameScore(10));
    	expect(92).to.eql(game.score());
      done();
  });

  test('Bonus is Strike', function(done){
    	var game = new Game();

    	game.addFrame(new Frame(1,5));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(7,2));
    	game.addFrame(new Frame(3,6));
    	game.addFrame(new Frame(4,4));
    	game.addFrame(new Frame(5,3));
    	game.addFrame(new Frame(3,3));
    	game.addFrame(new Frame(4,5));
    	game.addFrame(new Frame(8,1));
    	game.addFrame(new Frame(2,8));
    	game.addBonusThrow(10);

    	expect(20).to.eql(game.frameScore(10));
    	expect(93).to.eql(game.score());
      done();
  });

  test('Best Score', function(done){
       var game = new Game();

    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(10,0));
    	game.addBonusThrow(10);
    	game.addBonusThrow(10);
      for(var i=1;i<10;i++){
          expect(30).to.eql(game.frameScore(i));
      }

    	expect(300).to.eql(game.score());
      done();
  });

  test('Real Game', function(done){

    	var game = new Game();

    	game.addFrame(new Frame(6,3));
    	game.addFrame(new Frame(7,1));
    	game.addFrame(new Frame(8,2));
    	game.addFrame(new Frame(7,2));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(6,2));
    	game.addFrame(new Frame(7,3));
    	game.addFrame(new Frame(10,0));
    	game.addFrame(new Frame(8,0));
    	game.addFrame(new Frame(7,3));
    	game.addBonusThrow(10);

    	expect(9).to.eql(game.frameScore(1));
    	expect(8).to.eql(game.frameScore(2));
    	expect(17).to.eql(game.frameScore(3));
    	expect(9).to.eql(game.frameScore(4));
    	expect(18).to.eql(game.frameScore(5));
    	expect(8).to.eql(game.frameScore(6));
    	expect(20).to.eql(game.frameScore(7));
    	expect(18).to.eql(game.frameScore(8));
    	expect(8).to.eql(game.frameScore(9));
    	expect(20).to.eql(game.frameScore(10));

    	expect(135).to.eql(game.score());
      done();
  });

  test('Throw Can Not Be Negative', function(done){
      expect(Frame).withArgs(1, -1).to.throwException();

      done();
  });

});
