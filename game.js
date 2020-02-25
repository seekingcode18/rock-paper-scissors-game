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

    play(user, computer){
        if(user === computer){
            return "tie";
        }
        else if(user === 2 && computer == 0){
            return "c"
        }
        else if(user === 0 && computer == 2){
            return "u"
        }
        else if(user > computer){
            return "u"
        }
        else{
            return "c"
        }
    }
}

