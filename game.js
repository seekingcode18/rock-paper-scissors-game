module.exports = class Game {
    constructor(options){
        this.options = options;
        this.computerChoice;
        this.userChoice;
    }

    computerChooser(){
        return Math.floor(Math.random() * this.options.length);
    }

    userChooser(input){
        let index = this.options.findIndex(e => e === input);
        if(index === -1){
            return false;
        }
        return index;
    }
}

