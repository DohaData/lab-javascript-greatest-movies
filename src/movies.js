// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let newMoviesArray = moviesArray.map((movie) => movie.director);
  return newMoviesArray.filter(
    (item, pos) => newMoviesArray.indexOf(item) === pos
  );
}

// let newMovies = movies.map(movie => movie.director);
// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray
    .filter(
      (movie) =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    )
    .reduce((nbMovies, _) => nbMovies + 1, 0);
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  return Number(
    (
      moviesArray.reduce(
        (sumScores, movie) => sumScores + (movie.score || 0),
        0
      ) / moviesArray.length
    ).toFixed(2)
  );
}

// console.log(typeof scoresAverage(moviesList));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  return dramaMovies.length ? scoresAverage(dramaMovies) : 0;
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort(
    (movieA, movieB) =>
      movieA.year - movieB.year || movieA.title.localeCompare(movieB.title)
  );
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort((titleA, titleB) => titleA.localeCompare(titleB))
    .slice(0, 20);
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const regexpSize = /([0-9]+)h\s?([0-9]*)(?:min)?/;
  return structuredClone(moviesArray).map((movie) => {
    let match = movie.duration.match(regexpSize);
    movie.duration = parseInt(match[1]) * 60 + parseInt(match[2] || 0);
    return movie;
  });
}

// console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null;
  }
  allMoviesYears = moviesArray
    .map((movie) => movie.year)
    .filter((item, pos, self) => self.indexOf(item) === pos);
  let maxYearAvgScore = 0;
  let maxYear = 0;
  for (year of allMoviesYears) {
    currentYearScores = moviesArray.filter((movie) => movie.year === year);
    currentYearAvgScore = Number(
      (
        currentYearScores.reduce(
          (totalScore, movie) => totalScore + movie.score,
          0
        ) / currentYearScores.length
      ).toFixed(2)
    );
    if (currentYearAvgScore > maxYearAvgScore) {
      maxYearAvgScore = currentYearAvgScore;
      maxYear = year;
    } else if (currentYearAvgScore === maxYearAvgScore && maxYear > year) {
      maxYear = year;
    }
  }
  return `The best year was ${maxYear} with an average score of ${maxYearAvgScore}`;
}

// console.log(bestYearAvg(movies));
