const Game = require("../game")

describe("Rock paper scissors game", function(){
    beforeEach(function() {
        let options = ['rock', 'paper', 'scissors'];
        let game = new Game(options);
    })
    describe("Randomise", function(){
        it("should set computer variable to random number based on length of array", function(){
            let c = game.computerChoice();
            expect(c).toBeGreaterThan(-1);
            expect(c).toBeLessThan(2);
        })
    })

   
})