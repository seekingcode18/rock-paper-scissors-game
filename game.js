module.exports = class Game {
    constructor(options){
        this.options = options;
    }

    computerChoice(){
        return Math.floor(Math.random() * this.options.length);
    }
}

