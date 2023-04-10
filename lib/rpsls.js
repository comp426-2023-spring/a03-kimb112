//rock-paper-scissors
export function rps(shot) {
    shot = shot.toLowerCase();
    const elements = [ 'rock','paper','scissors'];

    if (shot == null) {
        var random_element = Math.floor(Math.random() * 3);
        var random_element_move = elements[random_element];
        return {player:random_element_move};
    }

    //error message
    if (!elements.includes(shot)) {
        console.error(shot + " is out of range");
        console.log(`Rules for rock paper scissors:

                    - Scissors CUTS Paper
                    - Paper COVERS Rock
                    - Rock CRUSHES Scissors`);
        process.exit(1);
    }

    var opponent_random_element = Math.floor(Math.random() * 3);
    const opponent_shot = elements[opponent_random_element];

    //compare player vs opponent
    if (shot == opponent) {
        result = "tie";
    } else if 
        (shot == "scissors" && opponent == "paper" ||
         shot == "paper" && opponent == "rock" ||
         shot == "rock" && opponent == "scissors") {
        result = "win";
    } else {
        result = "lose";
    }

    return `{player: ${shot}, opponent: ${opponent_shot}, result: ${result}}`;
}

//rock-paper-scissors-lizard-spock
export function rpsls(shot) {
    shot = shot.toLowerCase();
    const elements = [ 'rock','paper','scissors','lizard','spock'];
    
    if (shot == null) {
        var random_element = Math.floor(Math.random() * 5);
        var random_element_move = elements[random_element];
        return {player:random_element_move};
    }

    //error message
    if (!elements.includes(shot)) {
        console.error(shot + " is out of range");
        console.log(`Rules for the lizard-spock Expansion of rock paper scissors:

                    - Scissors CUTS Paper
                    - Paper COVERS Rock
                    - Rock SMOOSHES Lizard
                    - Lizard POISONS Spock
                    - Spock SMASHES Scissors
                    - Scissors DECAPITATES Lizard
                    - Lizard EATS Paper
                    - Paper DISPROVES Spock
                    - Spock VAPORIZES Rock
                    - Rock CRUSHES Scissors`);
        process.exit(1);
    }

    var opponent_random_element = Math.floor(Math.random() * 5);
    const opponent_shot = elements[opponent_random_element];

    //compare player vs opponent
    if (shot == opponent) {
        result = "tie";
    } else if 
        (shot == "scissors" && (opponent == "paper" || opponent == "lizard") ||
         shot == "paper" && (opponent == "rock" || opponent == "spock") ||
         shot == "rock" && (opponent == "scissors" || opponent == "lizard") ||
         shot == "lizard" && (opponent == "spock" || opponent == "paper") || 
         shot == "spock" && (opponent == "scissors" || opponent == "rock")) {
        result = "win";
    } else {
        result = "lose";
    }

    return `{player: ${shot}, opponent: ${opponent_shot}, result: ${result}}`;
}