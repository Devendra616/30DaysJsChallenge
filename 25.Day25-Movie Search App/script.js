document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "f0c0c504";
  const form = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;
  const movieDetailsUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&i=`;
  const movieContainer = document.getElementById("movie-container");

  async function getMovies() {
    const query = searchInput.value.trim().toLowerCase();
    try {
      if (query) {
        const response = await fetch(
          `${searchUrl}${encodeURIComponent(query)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.Response === "False" && data.Error) {
          // Handle movie not found error
          console.error("Movie not found");
          throw new Error("Movie not found!");
        }
        displayMovies(data.Search);
      }
    } catch (err) {
      console.error("Error fetching movie search results:", err);
      movieContainer.innerHTML = `<p class='error'>${err.message}</p>`;
    }
  }

  searchInput.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await getMovies();
    }
  });

  // fetch movies
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await getMovies();
  });

  // display movies

  function displayMovies(movies) {
    movieContainer.innerHTML = "";

    if (!movies || movies.length === 0) {
      movieContainer.innerHTML = "<p>No movies found. Try another name</p>";
      return;
    }
    const sortedMovies = movies.sort(
      (a, b) => parseInt(b.Year) - parseInt(a.Year)
    );

    sortedMovies.forEach((movie) => {
      const { Title, Year, Poster, imdbID } = movie;

      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
        <img src="${
          Poster !== "N/A" ? Poster : "./assets/defaultPoster.jpg"
        }" alt="${Title}">
        <h3   
   class="movie-title">${Title}</h3>
        <p class="movie-year">Year: ${Year}</p>
        <button class="details-btn" data-info="${imdbID}" >More Info</button>
      `;

      movieCard
        .querySelector(".details-btn")
        .addEventListener("click", async () => {
          await displayMovieDetails(imdbID);
        });

      movieContainer.appendChild(movieCard);
    });
  }

  async function displayMovieDetails(imdbID) {
    const movieDetailsContainer = document.getElementById("movie-details");
    try {
      const response = await fetch(
        `${movieDetailsUrl}${encodeURIComponent(imdbID)}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const movie = await response.json();
      if (movie.Response === "False" && movie.Error) {
        // Handle movie not found error
        console.error("Movie details not found");
        throw new Error("Movie details not found!");
      }

      movieDetailsContainer.style.display = "flex";

      movieDetailsContainer.innerHTML = `
      <div id="movie-details-content">
    <h2>${movie.Title}</h2>
    <p><strong>Year:</strong> ${movie.Year}</p>
    <p><strong>Released:</strong> ${movie.Released || "N/A"}</p>
    <p><strong>Genre:</strong> ${movie.Genre || "N/A"}</p>
    <p><strong>Director:</strong>   
 ${movie.Director || "N/A"}</p>
    <p><strong>Writer:</strong> ${movie.Writer || "N/A"}</p>
    <p><strong>Actors:</strong> ${movie.Actors || "N/A"}</p>
    <p><strong>Plot:</strong> ${movie.Plot.split(".").join(".<br>")}</p>
    <p><strong>Language:</strong> ${movie.Language || "N/A"}</p>
    <p><strong>Country:</strong> ${movie.Country || "N/A"}</p>
    
    <p><strong>IMDb Rating:</strong> ${movie.imdbRating || "N/A"}</p>

    <button class='close-btn'>Close</button>
    </div>
    <div id="movie-poster">
      <img src=${
        movie.Poster !== "N/A" ? movie.Poster : "./assets/defaultPoster.jpg"
      }
      alt="${movie.Title}" />
    </div>
  `;

      // Optionally, you can add a close button or other elements here
      const closeBtn = document.querySelector(".close-btn");

      closeBtn.addEventListener("click", () => {
        movieDetailsContainer.innerHTML = "";
        movieDetailsContainer.style.display = "none";
      });
    } catch (err) {
      console.error("Error fetching movie details:", err);
      movieDetailsContainer.innerHTML =
        "<p class='error'>Failed to load movie details. Please try again later.</p>";
    }
  }
});
