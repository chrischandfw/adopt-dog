import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async() => {
    const doggies = await getDogs();

    for (let dog of doggies) {

        const dogEl = renderDogCard();
		
        dogListContainer.append(dogEl);
    }
});


// fetch all dogs
// render and append all dog cards to the container
