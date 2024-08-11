const jokeButton = document.getElementById('joke-button')
const jokeString = document.getElementById('joke-string')
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
            jokeString.innerHTML = `"${randomJokes[0]}"`
            break;
        case 1:
            jokeString.innerHTML = `"${randomJokes[1]}"`
            break;
        case 2:
            jokeString.innerHTML = `"${randomJokes[2]}"`
            break;
        case 3:
            jokeString.innerHTML = `"${randomJokes[3]}"`
            break;
        case 4:
            jokeString.innerHTML = `"${randomJokes[4]}"`
            break;
    }
}

jokeButton.addEventListener('click', showMessage)

showMessage()