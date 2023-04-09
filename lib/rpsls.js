//rock-paper-scissors
function rps(shot) {
    const elements = [ 'rock','paper','scissors'];

    if (shot == null) {
        var random_element = Math.floor(Math.random() * 3);
        return elements[random_element];
    }

    //error message
    if (!elements.includes(shot)) {
        console.error(shot + " is out of range");
    }

}

//rock-paper-scissors-lizard-spock
function rspls(shot) {
    const elements = [ 'rock','paper','scissors','lizard','spock'];
    
    if (shot == null) {
        var random_element = Math.floor(Math.random() * 5);
        return elements[random_element];
    }

    //error message
    if (!elements.includes(shot)) {
        console.error(shot + " is out of range");
    }

}