import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async() => {
	// get the id from URL
    const data = new URLSearchParams(window.location.search);
	// use the id to fetch the dog
    const doggyId = data.get('id');

    const dog = await getDog(doggyId);

// render and append this dog's details to the container

    const dogDetailEl = renderDogDetail(dog);
    dogDetailContainer.append(dogDetailEl);
});

