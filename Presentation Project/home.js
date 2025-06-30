let allMovies = [];

async function fetchMovies() {
  const response = await fetch('movies_data.json');
  const data = await response.json();
  allMovies = data.movies;
  displayMovies(allMovies);
}

function displayMovies(movies) {
  const container = document.getElementById('movies-container');
  container.innerHTML = '';

  if (movies.length === 0) {
    container.innerHTML = `<p>No movies found for the selected filter.</p>`;
    return;
  }

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" />
      <div class="movie-details">
        <h3>${movie.title}</h3>
        <p><strong>Language:</strong> ${movie.language}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <p>${movie.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterByLang(language) {
  if (language === 'All') {
    displayMovies(allMovies);
  } else {
    const filtered = allMovies.filter(movie => movie.language === language);
    displayMovies(filtered);
  }
}

// Call fetch on page load
fetchMovies();
