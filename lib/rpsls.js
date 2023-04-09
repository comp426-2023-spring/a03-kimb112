//Rock-Paper-Scissors
function rps(shot) {
    const elements = [ 'Rock','Paper','Scissors'];

    if (shot == null) {
        var random_element = Math.floor(Math.random() * 3);
        return elements[random_element];
    }

    //error message
    if (!elements.includes(shot)) {
        console.error(shot + " is out of range");
        process.exit(0);
    }

    var opponent_random_element = Math.floor(Math.random() * 3);
    const opponent_shot = elements[opponent_random_element];

    //compare player vs opponent
    if (shot == opponent) {
        result = "tie";
    } else if 
        (shot == "Scissors" && opponent == "Paper" ||
         shot == "Paper" && opponent == "Rock" ||
         shot == "Rock" && opponent == "Scissors") {
        result = "win";
    } else {
        result = "lose";
    }

    return `{player: ${shot}, opponent: ${opponent_shot}, result: ${result}}`;
}

//Rock-Paper-Scissors-lizard-spock
function rspls(shot) {
    const elements = [ 'Rock','Paper','Scissors','lizard','spock'];
    
    if (shot == null) {
        var random_element = Math.floor(Math.random() * 5);
        return elements[random_element];
    }

    //error message
    if (!elements.includes(shot)) {
        console.error(shot + " is out of range");
        process.exit(0);
    }

    var opponent_random_element = Math.floor(Math.random() * 5);
    const opponent_shot = elements[opponent_random_element];

    //compare player vs opponent
    if (shot == opponent) {
        result = "tie";
    } else if 
        (shot == "Scissors" && (opponent == "Paper" || opponent == "Lizard") ||
         shot == "Paper" && (opponent == "Rock" || opponent == "Spock") ||
         shot == "Rock" && (opponent == "Scissors" || opponent == "lizard") ||
         shot == "Lizard" && (opponent == "Spock" || opponent == "Paper") || 
         shot == "Spock" && (opponent == "Scissors" || opponent == "Rock")) {
        result = "win";
    } else {
        result = "lose";
    }

    return `{player: ${shot}, opponent: ${opponent_shot}, result: ${result}}`;
}