const form = document.getElementById('form');
    const input = document.getElementById('input');
    const mainBlock = document.getElementById('mainBlock');


document.addEventListener('DOMContentLoaded', function () {
    fetch('https://www.swapi.tech/api/films/')
        .then((data) => {
            return data.json();
        })
        .then(dataJson => {
            localStorage.setItem('movies', JSON.stringify(dataJson))
            displayCards(dataJson.result);
        })
        .catch(error => {
            console.log(error);
        })

    input.addEventListener('input', (e) => {
        const inputValue = e.target.value.toLowerCase();
        const allCards = document.querySelectorAll('.card');

        allCards.forEach(card => {
            const title = card.querySelector('h2').innerText.toLowerCase();
            card.style.display = title.includes(inputValue) ? 'block' : 'none';
        });
    });
    function displayCards(cards) {
        let data = '';
        cards.forEach(element => {
            data += `
                <div class="card">
                    <img src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2017/02/IMG_5095.jpg"
                        alt="film" width="150px">
                    <h2>${element.properties.title}</h2>
                    <p>Main Character:</p>
                    <p>${element.properties.character}</p>
                    <span>${'Release date:' + ' ' + '  ' +' '+ element.properties.release_date}</span>
                    <span></span>
                    <p>${element.properties.opening_crawl}</p>
                </div>
            `;
        });

        mainBlock.innerHTML = data;
    }
});
