const randomJokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What did one hat say to the other? Stay here, I'm going on ahead.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What's orange and sounds like a parrot? A carrot!",
    "How does a penguin build its house? Igloos it together!"
]

const showMessage = () => {
    let randomNumber = Math.floor(Math.random() * 5)
    switch (randomNumber) {
        case 0:
            console.log(randomJokes[0])
            break;
        case 1:
            console.log(randomJokes[1])
            break;
        case 2:
            console.log(randomJokes[2])
            break;
        case 3:
            console.log(randomJokes[3])
            break;
        case 4:
            console.log(randomJokes[4])
            break;
    }
}

showMessage()