const Game = require("../game")

describe("Rock paper scissors game", function(){
    // beforeEach(function() {
    //     let options = ['rock', 'paper', 'scissors'];
    //     let game = new Game(options);
    // })

    describe("Randomise", function(){
        it("should set computer variable to random number based on length of array", function(){
            let options = ['rock', 'paper', 'scissors'];
            let game = new Game(options);
            let c = game.computerChoice();
            expect(c).toBeGreaterThan(-1);
            expect(c).toBeLessThan(3);
        })
    })

    describe("User choice", function(){
        let options = ['rock', 'paper', 'scissors'];
        let game = new Game(options);
        it("should return index if the input is in range", function(){
            let u = game.userChooser("rock");
            expect(u).toEqual(0);
            u = game.userChooser("paper");
            expect(u).toEqual(1);
            u = game.userChooser("scissors");
            expect(u).toEqual(2);
        })
        it("should return false if input is not in range", function(){
            let u = game.userChooser("bike");
            expect(u).toBeFalsy();
        })
    })

})