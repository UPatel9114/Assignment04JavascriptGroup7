//Reference link to the api https://api.chucknorris.io/#!

/*
1]Vilas Desai  -  200522471
2]Udaykumar Patel  -  200522548	
3]Bishnu Bohora  -  200519767
*/

const APIUrl = 'https://api.chucknorris.io/jokes/random';
const fetchBtn = document.getElementById('fetch-button');
const jokes = document.getElementById('joke-container');
const shareBtn = document.getElementById('share-button');

fetchBtn.addEventListener('click', () => {
    fetch(APIUrl).then(response => response.json()).then(data => {
            const joke = data.value;
            jokes.textContent = joke;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            jokes.textContent = 'An error occurred while fetching a Chuck Norris joke.';
        });
});

shareBtn.addEventListener('click', () => {
    const joke = jokes.textContent;
    if (navigator.share) {
        navigator.share({
            title: 'Chuck Norris Joke',
            text: joke,
        })
        .then(() => console.log('Joke shared successfully.'))
        .catch(error => console.error('Error sharing joke:', error));
    } else {
        alert('Sharing is not supported on your device/browser.');
    }
});
