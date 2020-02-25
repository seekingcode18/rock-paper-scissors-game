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
            let c = game.computerChooser();
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

    describe("Comparison Logic", function(){
        let options = ['rock', 'paper', 'scissors'];
        let game = new Game(options);
        it("should return the winner if paper", function(){
            let u = game.userChooser("paper");
            let c = 0;
            expect(game.play(u, c)).toEqual('u');

            c = 1;
            expect(game.play(u, c)).toEqual('tie');

            c = 2;
            expect(game.play(u, c)).toEqual('c');
        })

        it("should return the winner if rock", function(){
            let u = game.userChooser("rock");
            let c = 0;
            expect(game.play(u, c)).toEqual('tie');

            c = 2;
            expect(game.play(u, c)).toEqual('u');
        })

        it("should return the winner if scissors", function(){
            let u = game.userChooser("scissors");
            let c = 2;
            expect(game.play(u, c)).toEqual('tie');
        })
    })
})