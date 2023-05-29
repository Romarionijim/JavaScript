let secretNumber = Math.trunc(Math.random() * 10) + 1
let secret = document.querySelector('.guess-box').textContent = secretNumber
let score = 20;

let highscore = 0;

let returnText = (text) => {
    document.querySelector('.start-guessing-text').textContent = text
}

document.querySelector('.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.start-guessing').value)
    if (!guess) {
        document.querySelector('.start-guessing-text').textContent = 'no number!'
    } else if (guess === secret) {



        returnText('correct guess!')
        score = score + 1
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.guess-box').style.backgroundColor = 'yellow'

        if (score > highscore) {
            highscore = score
            document.querySelector('.high-score-child').textContent = highscore
        }

    } else if (guess !== secret) {
        if (score > 1) {
            returnText(guess > secret ? 'too high!' : 'too low!')
            score = score - 1
            document.querySelector('.score').textContent = score;
        } else {
            returnText('Game Over!')
            document.querySelector('.start-guessing').value = '';
            document.querySelector('.score').textContent = '0';
        }
    } else {
        document.querySelector('.start-guessing-text').textContent = 'guess again...'
    }
})


document.querySelector('.again').addEventListener('click', () => {
    location.reload();
})
