const jokeParagraph = document.getElementById('joke');
const btnJoke = document.getElementById('btn-joke');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {
    jokeParagraph.classList.remove('fade');
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeParagraph.textContent = `${item.joke}`;
        jokeParagraph.classList.add('fade');
    })
}

btnJoke.addEventListener('click', getJoke)

getJoke();